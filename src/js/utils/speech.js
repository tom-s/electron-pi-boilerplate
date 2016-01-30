let Speech = (() => {
	let _speak = (msg) => {
		var utterance = new SpeechSynthesisUtterance();
		var voices = window.speechSynthesis.getVoices();
		utterance.voice = voices[10]; // Note: some voices don't support altering params
		utterance.voiceURI = 'native';
		utterance.volume = 1; // 0 to 1
		utterance.rate = 0.8; // 0.1 to 10
		utterance.pitch = 1; //0 to 2
		utterance.text = msg;
		utterance.lang = 'en-UK';
		window.speechSynthesis.speak(utterance);
	}

	return {
		speak: _speak
	}
})();

export default Speech;