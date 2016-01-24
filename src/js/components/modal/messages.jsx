// Tools
import React from 'react'
import _ from 'lodash'

// Components
import GoogleMap from 'google-map-react'

// Streams
import MessagesStream from '../../streams/messageStream.js'

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'messages': []
        };
    }

    componentDidMount() {
        MessagesStream.subscribe((data) => {
            this.setState({
                messages: data.messages
            });
        });

    }

    componentDidUpdate() {
        // Scroll to bottom
        let node = this.refs['Messages'];
        node.scrollTop = node.scrollHeight;
        console.log("set scroll top to ", node.scrollHeight);
    }

    componentWillUnmount() {
        MessagesStream.dispose();
    }

    displayMessage(msg) {
        let subject = _.get(msg, 'data.subject');
        let text = _.get(subject, 'text');
        let imgUrl = _.get(subject, 'picture_url');
        let location = _.get(subject, 'location');

        if(!subject) {
            console.log("msg shoud be filtered !", msg);
            return null;
        }
        let image = (imgUrl) ? (
            <div className="ImageWrapper">
                <img src={imgUrl} className="Image"/>
            </div>
        ) : null;
        console.log("location ? ", location);
        let map = (_.get(location, 'lat')) ? (
            <div className="LocationWrapper">
                <GoogleMap
                    defaultCenter={{lat: parseFloat(location.lat), lng: parseFloat(location.lng)}}
                    defaultZoom={9}>
                </GoogleMap>
            </div>
        ) : null;

        return (
            <div className="Message" key={msg.id}>
                {text}
                {image}
                {map}
            </div>
        );
    }

    displayUserMessages(msgs) {
        console.log("display messages for user", msgs);
        let firstMessage = _.first(msgs);
        let subject = _.get(firstMessage, 'data.subject');

        let user = (() => {
            return (
                <div className="User">
                    <div className="UserAvatar">
                        <img className="UserAvatarImg" src={subject.avatar_url}/>
                    </div> 
                    <div className="UserName">{subject.name}</div>
                </div>
            );
        })();
        let messages = _.chain(msgs).map((msg) => {
            return this.displayMessage(msg);
        }).compact().value();
        return (
            <div className={"UserGroup clearfix " + subject.name.toLowerCase()} key={'User' + firstMessage.id}>
                {user}
                <div className="Group"> {messages}</div>
            </div>
        );
    }

    render() {
        if(!this.state.messages) return null;
        let userMessages = this._groupMessagesByUser(this.state.messages);
        let messages = _.map(userMessages, (msgs) => {
            return this.displayUserMessages(msgs);
        });
        return (
            <div className="Messages" ref="Messages">
                {messages}
            </div>
        );
    }

    _groupMessagesByUser(msgs) {
        let groupedMessages = [];
        // Group messages by user
        let userMsgs = [];
        let lastSender = null;
        _.forEach(msgs, (msg) => {
            let sender = _.get(msg, 'data.subject.sender_id');
            if(lastSender !== sender && userMsgs.length > 0) {
                groupedMessages.push(userMsgs);
            } else {
                userMsgs.push(msg);
            }
            lastSender = sender;
        });
        if(userMsgs.length > 0) {
            groupedMessages.push(userMsgs);
        }
        return groupedMessages;
    }
};


export default Messages;