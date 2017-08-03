$(document).ready(function() {
//Variables
	var correct = 0;
	var incorrect = 0;

		//write in score...
		//html ((correct/10) + "%")


	//Timer (GOagain id button)
	var counter = 120, timer = setInterval(function() {
	    $("#GOagain").html(count--);
	    if(count == 1) clearInterval(timer);
	}, 1000);

//Reset
	function reset() {
		correct = 0;
		incorrect = 0;
	}

	function start() {
		//change #GOagain to var(counter)
		//show answerA-D
	}

	function end() {
		//Hide answerA-D
		//change var(counter) to #GOagain
			//words to "GO AGAIN?"
	}





	//for questions: question 1: if click B, +1 for correct; else, +1 incorrect
	
});