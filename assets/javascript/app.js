
var count = 60;


var correct = 0;
var wrong = 0;




$(document).ready(function(){


	$("#second_container").hide();
	$("#third_container").hide();

	

	
	window.scrollTo(0, 500);




	$("#start_button").on("click", function(){

		
		$("#first_container").hide();


		
		$("#second_container").show();

		startCountdown();
		return;

	});



	
	function countdown(){

		count--;

		
    	$('#timer_number').html(count + " Seconds");

    	
			$("#done_button").on("click", function(){

			
			count = 0; 
			return;

			});

			if(count == -1){

				
				timeUp();

				
				$("#second_container").hide();

			}


	}


	
	function startCountdown(){

		setInterval(countdown, 1000);

	}


	
	function timeUp(){


		
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		


		
		if(Q1 == undefined){
			wrong++;
		}
		else if(Q1 == "47"){
			correct++;
		}
		else{
			wrong++;
		}


		if(Q2 == undefined){
			wrong++;
		}
		else if(Q2 == "Poliwag"){
			correct++;
		}
		else{
			wrong++;
		}


		if(Q3 == undefined){
			wrong++;
		}
		else if(Q3 == "Cinnamon"){
			correct++;
		}
		else{
			wrong++;
		}


		if(Q4 == undefined){
			wrong++;
		}
		else if(Q4 == "Vince Carter"){
			correct++;
		}
		else{
			wrong++;
		}


		if(Q5 == undefined){
			wrong++;
		}
		else if(Q5 == "Chandler/Rachel"){
			correct++;
		}
		else{
			wrong++;
		}


		if(Q6 == undefined){
			wrong++;
		}
		else if(Q6 == "The Northern Lights"){
			correct++;
		}
		else{
			wrong++;
		}


		$('#correct_answers').html(correct);
		$('#wrong_answers').html(wrong);
		
		$("#third_container").show();

	}

});
