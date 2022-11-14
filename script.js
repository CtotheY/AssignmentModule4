(function (window) {
		var paula = {};
		paula.name = "Paula";
		var speakWord = "Hello ";
		function speak(name) {
  		console.log(speakWord + " " + name);
	}

	window.paula = paula;

})(window);

(function (window) {
		var paula = {};
		paula.name = "Paula";
		var byeSpeaker = "Good Bye ";
		function speak(name) {
  		console.log(byeSpeaker + " " + name);
	}

	window.paula = paula;

})(window);