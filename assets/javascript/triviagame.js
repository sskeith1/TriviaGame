$(document).ready(function() {
//Variables
	var correct = 0;
	var incorrect = 10 - correct;
	var remaining = 10;
	var time = 120;

//I tried to get the clicked answer to reference the value in the array.
//Not enough time
	//	var theAnswers= {
	//		first: "a",
	//		second: "b",
	//		third: "c",
	//		fourth: "d",
	//		fifth: "",
	//		sixth: "",
	//		seventh: "",
	//		eighth: "",
	//		ninth: "",
	//		tenth: "",			};

	//		console.log("Test: " + $("#answerB").val())
	//		console.log("Answer: " + theAnswers.first)
	//		console.log(theOptions.A)

	//		if(theAnswers.first = theOptions.A) {}

	
	var theOptions= {
		A: $("#answerA").val(),
	}
	

//Resets

	function start() {
		$( "#ready" ).click(function(){
		nonClickable();
		alert("You sure?");
		clickable();
		showQuestions();
		$("#ready").html(time)

		});};


//Timer (GOagain id button)
			//	var counter = 120, timer = setInterval(function() {
			//	    $("#GOagain").html(count--);
			//	    if(count == 1) clearInterval(timer);
			//	}, 1000);
	//	function timer() {
	//		for (i=0; i<time; i--)
	//		time=time-1;
	//		if(time<=0) {
	//			reset.timer();
	//			alert("That's it!");
	//		}
	//	}

//The Rest

	//clickable/non-clickable
		function nonClickable() {
			$("answerA").click(false);
			};

		function clickable() {
			$("answerA").click(true);
			};

	function showQuestions() {
		document.getElementById("answerA").style.opacity = ".7";
		document.getElementById("answerB").style.opacity = ".7";
		document.getElementById("answerC").style.opacity = ".7";
		document.getElementById("answerD").style.opacity = ".7";
		};

	function end() {
		//change var(counter) to #GOagain
			//words to "GO AGAIN?"
		};

	function reset() {
		correct = 0;
		remaining = 10
		time = 90;
		$("#main").html("");
		//change #GOagain to var(counter)	
		};


//Questions and Answers


	//QUESTION ONE
		function questionOneQ () {
			$("#main").html("1) A is the answer");
			};

		function questionOneA () {
			$("#answerA").html("A) ")
			$("#answerB").html("B) ")
			$("#answerC").html("C) ")
			$("#answerD").html("D) ")
			};

		function q1 () {
			questionOneQ();
			questionOneA();
			remaining--;	
			
		};


	//QUESTION TWO
		function questionTwoQ () {
			$("#main").html("2) A is the answer");
			};

		function questionTwoA () {
			$("#answerA").html("A) ")
			$("#answerB").html("B) ")
			$("#answerC").html("C) ")
			$("#answerD").html("D) ")
			};

		function q2 () {
			questionTwoQ();
			questionTwoA();
			remaining--;
			
		};





	//QUESTION TWO


	//QUESTION THREE
	



	//Timeout 
	//	function timeOut () {
	//		if (time<1)&&(remaining>1){
	//			end();
	//		};};


	//for questions: question 1: if click B, +1 for correct; else, +1 incorrect
	
//=====================================================================
//=====================                     ===========================
//=====================  Start of the Game  ===========================
//=====================                     ===========================
//=====================================================================

		reset();
		start();

		console.log(remaining + " remaining questions");


	//QUESTION ONE
		q1();
		function myAnswers(){
				q2();
			};
		


	//QUESTION TWO

		


	//QUESTION THREE



	// rewrite $("#ID").text(javatag here)
	
	


	
});