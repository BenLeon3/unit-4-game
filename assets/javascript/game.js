//console.log("Hello World!")
//Set Variables


    
//Generate random number and display at the start of the game.

    var randNum = 0;
    var crystal1Value;
    var crystal2Value;
    var crystal3Value;
    var crystal4Value;
    var userTotal = 0;
    var totalWins = 0;
    var totalLosses= 0;

    $('#wins').text("Wins: " + totalWins);

    $('#losses').text("Losses: " + totalLosses);

    $('#score').text(userTotal);

$(document).ready(function(){

    function generateRandomNumber(){
        var randNum = Math.floor(Math.random() * 120)+19;
        //console.log(randNum);
        $('#randomNumber').text(randNum);
    }
    
    generateRandomNumber()

    function generateCrystalNumbers(){
        crystal1Value = Math.floor(Math.random() * 12)+1;
        $('#crystal1').text(crystal1Value);

        crystal2Value = Math.floor(Math.random() * 12)+1;
        $('#crystal2').text(crystal2Value);

        crystal3Value = Math.floor(Math.random() * 12)+1;
        $('#crystal3').text(crystal3Value);

        crystal4Value = Math.floor(Math.random() * 12)+1;
        $('#crystal4').text(crystal4Value);
    }
    // call function immediately to set the game up
    generateCrystalNumbers();

        $('#crystal1').attr("value", crystal1Value);
			var c1 = $('#crystal1').attr("value");
			//Test / Debug
			console.log('crystal 1   '+c1);
    

        $('#crystal2').attr("value", crystal2Value);
			var c2 = $('#crystal2').attr("value");
			//Test / Debug
			console.log('crystal 2   '+c2);
    

        $('#crystal3').attr("value", crystal3Value);
			var c3 = $('#crystal3').attr("value");
			//Test / Debug
			console.log('crystal 3   '+c3);
   

        $('#crystal4').attr("value", crystal4Value);
			var c4 = $('#crystal4').attr("value");
			//Test / Debug
			console.log('crystal 4   '+c4);
     
    $('.CB').on('click', function() {
        var test1 = $(this).attr("value");
        userTotal = parseInt(userTotal) + parseInt(test1);
        console.log('Crystal*  ' +  test1);
		console.log('userTotal***  ' +userTotal);
        $('#score').text(userTotal);
        
        if(randNum === userTotal)
			{
				//alert('win');
				totalWins++;
				$('#wins').html("wins: " + totalWins);
				$('#win-message').text("You Win! :)");
				reset();
				
			}
			else if (userTotal > randNum)
			{
				//alert('loser');
				totalLosses++;
				$('#losses').html("Losses: " + totalLosses);
				$('#loose-message').text("You Lose! :(");
				reset();
			}
    });

    function reset()
	{

        generateRandomNumber();
        generateCrystalNumbers();
		// reset
		//  randNum = Math.floor(Math.random() * 120)+19;
		//  console.log('randomNumber =  ' + randNum);
		//  crystal1Value = Math.floor(Math.random() * 12)+1;
		//  crystal2Value = Math.floor(Math.random() * 12)+1;
		//  crystal3Value = Math.floor(Math.random() * 12)+1;
		//  crystal4Value = Math.floor(Math.random() * 12)+1;
		//  userTotal = 0;

		 //HTML
		//  $('.ranNumBox').text(randNum);
        //  $('#score').text(userTotal);
         //$('#win-message').text("You Win! :)");
         //$('#loose-message').text("You Lose! :(");
         
         
		 //start();
    }
});
    