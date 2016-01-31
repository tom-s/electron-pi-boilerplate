// Streams
import ConfirmationStream from '../streams/confirmationStream.js';
import VolumeStream from '../streams/volumeStream.js';

let ActionHandler = (() => {
	console.log("action handler");

	let _execute = (action, parameters) => {
		console.log("execute action", action, parameters);
		switch(action) {
			 // Sound
            case 'volume.on':
            	VolumeStream.onNext(true);
            	break;
            case 'volume.off':
            	VolumeStream.onNext(false);
            	break;
            // Messages
            case 'messages.check': //unread: true
            case 'messages.read':
            // Reminders+
            case 'notifications.add': 
            // Cancelling
            case 'smalltalk.confirmation':
            default: 
                  console.log("confirmation stream");
                  ConfirmationStream.onNext(false);
		}
	}

	return {
		execute: _execute
	}
})();

export default ActionHandler;