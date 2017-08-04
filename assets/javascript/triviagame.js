$(document).ready(function() {
//Variables
	var correct = 0;
	var incorrect = 10 - correct;
	var remaining = 10;
	var time = 90;
	

//Resets

	function start() {
		$( "#ready" ).click(function(){
		nonClickable();
		alert("You sure?");
		clickable();
		showQuestions();
//		$("#ready").html(timer)

		});};


//The Rest

	//clickable/non-clickable
		function nonClickable() {
			$("answerA").click(false);
			};

		function clickable() {
			$("answerA").click(true);
			};


	//non-translucent questions
		function showQuestions() {
			document.getElementById("answerA").style.opacity = ".7";
			document.getElementById("answerB").style.opacity = ".7";
			document.getElementById("answerC").style.opacity = ".7";
			document.getElementById("answerD").style.opacity = ".7";
			};

		function end() {
			if (time < 1) || (remaining < 1) {
				document.getElementById("main").html("You got " + correct + " question(s) correct, " + incorrect " question(s) incorrect with " + remaining " unanswered.");
				$("#ready").html("Go Again?");
				reset();
				start();
			}
			};

		function reset() {
			correct = 0;
			remaining = 10
			time = 90;
			$("#main").html("");	
			};


//Questions and Answers


	//QUESTION ONE
		function questionOneQ () {
			$("#main").html("1) Best recent Bond Film?");
			};

		function questionOneA () {
			$("#answerA").html("A) Casino Royale")
			$("#answerB").html("B) Quantum of Solace")
			$("#answerC").html("C) Skyfall")
			$("#answerD").html("D) Spectre")
			};

		function q1 () {
			questionOneQ();
			questionOneA();
			remaining-1;	
			
		};


	//QUESTION TWO
		function questionTwoQ () {
			$("#main").html("2) What is the correct hierarchy of these bands?");
			};

		function questionTwoA () {
			$("#answerA").html("A) Nirvana, Alice in Chains, Radiohead")
			$("#answerB").html("B) Radiohead, Nirvana, Alice in Chains")
			$("#answerC").html("C) Alice in Chains, Radiohead, Nirvana")
			$("#answerD").html("D) Alice in Chains, Nirvana, Radiohead")
			};

		function q2 () {
			questionTwoQ();
			questionTwoA();
			remaining-1;

		};


	//QUESTION THREE
		function questionThreeQ () {
			$("#main").html("3) Best season?");
			};

		function questionThreeA () {
			$("#answerA").html("A) Summer")
			$("#answerB").html("B) Spring")
			$("#answerC").html("C) Winter")
			$("#answerD").html("D) Fall")
			};

		function q3 () {
			questionThreeQ();
			questionThreeA();
			remaining-1;

		};


	//QUESTION FOUR
		function questionFourQ () {
			$("#main").html("4) Best beach drink?");
			};

		function questionFourA () {
			$("#answerA").html("A) Daiquiri (any)")
			$("#answerB").html("B) Margarita")
			$("#answerC").html("C) Caipirinha")
			$("#answerD").html("D) Mojito")
			};

		function q4 () {
			questionFourQ();
			questionFourA();
			remaining-1;

		};


	//QUESTION FIVE
		function questionFiveQ () {
			$("#main").html("5) Top group of cities?");
			};

		function questionFiveA () {
			$("#answerA").html("A) Mexico City, Capetown, Athens, Hamburg")
			$("#answerB").html("B) New York City, Istanbul, London, Paris")
			$("#answerC").html("C) Miami, Boston, D.C., Chicago")
			$("#answerD").html("D) Bratislava, Wroclaw, Kiev, Minsk")
			};

		function q5 () {
			questionFiveQ();
			questionFiveA();
			remaining-1;

		};


	//QUESTION SIX
		function questionSixQ () {
			$("#main").html("6) Best movie from this list?");
			};

		function questionSixA () {
			$("#answerA").html("A) The Room")
			$("#answerB").html("B) Good Will Hunting")
			$("#answerC").html("C) Ghost in the Shell")
			$("#answerD").html("D) Spectre")
			};

		function q6 () {
			questionSixQ();
			questionSixA();
			remaining-1;	
			
		};


	//QUESTION SEVEN
		function questionSevenA () {
			$("#main").html("7) Best TV/Netflix show out right now?");
			};

		function questionSevenA () {
			$("#answerA").html("A) Westworld")
			$("#answerB").html("B) Mr. Robot")
			$("#answerC").html("C) Legion")
			$("#answerD").html("D) American Gods")
			};

		function q7 () {
			questionSevenA();
			questionSevenA();
			remaining-1;

		};


	//QUESTION EIGHT
		function questionEightQ () {
			$("#main").html("8) Favorite soccer player?");
			};

		function questionEightA () {
			$("#answerA").html("A) Ronaldo R9")
			$("#answerB").html("B) Ronaldo R7")
			$("#answerC").html("C) Roberto Carlos")
			$("#answerD").html("D) Messi")
			};

		function q8 () {
			questionEightQ();
			questionEightA();
			remaining-1;

		};


	//QUESTION NINE
		function questionNineQ () {
			$("#main").html("9) Best soccer team?");
			};

		function questionNineA () {
			$("#answerA").html("A) Manchester United")
			$("#answerB").html("B) Real Madrid")
			$("#answerC").html("C) FC Bayern Munich")
			$("#answerD").html("D) Juventus")
			};

		function q9 () {
			questionNineQ();
			questionNineA();
			remaining-1;

		};


	//QUESTION TEN
		function questionTenQ () {
			$("#main").html("10) Was this a good quiz?");
			};

		function questionTenA () {
			$("#answerA").html("A) yeah, sure")
			$("#answerB").html("B) Good effort, poor execution")
			$("#answerC").html("C) Meh")
			$("#answerD").html("D) No")
			};

		function q10 () {
			questionTenQ();
			questionTenA();
			remaining-1;

		};


	
//Unfinished (Not enough time)

	//Timeout 
		//	function timeOut () {
		//		if (time<1)&&(remaining>1){
		//			end();
		//		};};

	//I tried to get the clicked answer to reference the value in the array.
		
			//	var theAnswers= {
			//		first: "a",
			//		second: "b",
			//		third: "c",
			//		fourth: "d",
			//		fifth: "b",
			//		sixth: "b",
			//		seventh: "a",
			//		eighth: "c",
			//		ninth: "a",
			//		tenth: "d",			};

			//		console.log("Test: " + $("#answerB").val())
			//		console.log("Answer: " + theAnswers.first)
			//		console.log(theOptions.A)

			//		if(theAnswers.first = theOptions.A) {}

		
			//	var theOptions= {
			//		A: $("#answerA").val(),
			//	};

	//Making the #GOagain button the timer, alerting when time<0, switch back to button
				
		//	function timer() {
		//		for (i=0; i<time; i--)
		//		time=time-1;
		//		if(time<=0) {
		//			reset.timer();
		//			alert("That's it!");
		//		}
		//	};

	
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

	
	//QUESTION TWO
		q2();
		

	//QUESTION THREE
		q3();
		

	//QUESTION FOUR
		q4();


	//QUESTION FIVE
		q5();
		

	//QUESTION SIX
		q6();
		

	//QUESTION SEVEN
		q7();
		

	//QUESTION EIGHT
		q8();
		

	//QUESTION NINE
		q9();
		

	//QUESTION TEN
		q10();
		





	
});