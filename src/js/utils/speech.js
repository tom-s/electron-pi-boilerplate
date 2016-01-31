let Speech = (() => {
	let voices = window.speechSynthesis.getVoices();
	
	let _speak = (msg) => {
		let utterance = new SpeechSynthesisUtterance();
		//utterance.voice = voices[10]; // Note: some voices don't support altering params
		utterance.voiceURI = 'native';
		utterance.volume = 1; // 0 to 1
		utterance.rate = 1; // 0.1 to 10
		utterance.pitch = 1; //0 to 2
		utterance.text = msg;
		utterance.lang = 'en-UK';
		console.log('utterance', utterance);
		window.speechSynthesis.speak(utterance);
	}

	return {
		speak: _speak
	}
})();

export default Speech;