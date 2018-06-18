//console.log("Hello World!")
//Set Variables
var userTotal = 0;
var totalWins = 0;
var totalLosses= 0;

//Generate random number and display at the start of the game.
$(document).ready(function(){
    var randNum = Math.floor(Math.random() * 120)+19;
    //console.log(randNum);
    $('#randomNumber').text(randNum);

    var crystal1Value = Math.floor(Math.random() * 12)+1;
    $('#crystal1').text(crystal1Value);

    var crystal2Value = Math.floor(Math.random() * 12)+1;
    $('#crystal2').text(crystal2Value);

    var crystal3Value = Math.floor(Math.random() * 12)+1;
    $('#crystal3').text(crystal3Value);

    var crystal4Value = Math.floor(Math.random() * 12)+1;
    $('#crystal4').text(crystal4Value);

    $('#wins').text("Wins: " + totalWins);

    $('#losses').text("Losses: " + totalLosses);

    $('#score').text(userTotal);


    //When the player clicks on the crystal the number should add up in the answer square.
    // $('#crystal1').on('click', function(){
    //     newUserTotal = userTotal + crystal1Value;
        //$('#score').text(newUserTotal + userTotal);
       //assigned value to each button/crystal
        $('#crystal1').attr("value", crystal1Value);
			var c1 = $('#crystal1').attr("value");
			//Test / Debug
			console.log('crystal 1   '+c1);
    //});
    
    //$('#crystal2').on('click', function(){
        //newUserTotal = userTotal + crystal2Value;
        //console.log(newUserTotal);
        //$('#score').text(newUserTotal + userTotal);

        $('#crystal2').attr("value", crystal2Value);
			var c2 = $('#crystal2').attr("value");
			//Test / Debug
			console.log('crystal 2   '+c2);
    //}); 
    
    //$('#crystal3').on('click', function(){
        //newUserTotal = userTotal + crystal3Value;
        //console.log(newUserTotal);
        //$('#score').text(newUserTotal + userTotal);

        $('#crystal3').attr("value", crystal3Value);
			var c3 = $('#crystal3').attr("value");
			//Test / Debug
			console.log('crystal 3   '+c3);
   //}); 

    //$('#crystal4').on('click', function(){
        //newUserTotal = userTotal + crystal4Value;
        //console.log(newUserTotal);
        //$('#score').text(newUserTotal + userTotal);

        $('#crystal4').attr("value", crystal4Value);
			var c4 = $('#crystal4').attr("value");
			//Test / Debug
			console.log('crystal 4   '+c4);
    //}); 
    $('.CB').on('click', function() {
        var test1 = $(this).attr("value");
        userTotal = parseInt(userTotal) + parseInt(test1);
        console.log('Crystal*  ' +  test1);
		console.log('userTotal***  ' +userTotal);
        $('#score').text(userTotal);
        
        if(randNum === userTotal)
			{
				alert('win');
				totalWins++;
				$('#wins').html("wins: " + totalWins);
				$('#win-message').text("You Win! :)");
				reset();
				
			}
			else if (userTotal > randNum)
			{
				alert('loser');
				totalLosses++;
				$('#losses').html("Losses: " + loss);
				$('#loose-message').text("You Lose! :(");
				reset();
			}
    });
    // $('.CB').off().on('click', function(){
	// 		var test1 = $(this).attr('value');
	// 		//Adds to final score when clicked
	// 		userTotal = parseInt(userTotal) + parseInt(test1);
	// 		console.log('Crystal*  ' +  test1);
	// 		console.log('finalScore***  ' + userTotal);
    //         $('#score').text(userTotal);
            
    // });
    //add the clicks from each diamond and make a new user total

    // $(function() {
    //     $("crystal1").on("click", function() {
        
    //       var $button = $(this);
    //       var oldValue = $button.closest("ul").prev().val();
        
    //       if ($button.text() == "+") {
    //           var newVal = parseInt(oldValue) +1;
    //           console.log(newVal);
        
    //         } else {
    //        // Don't allow decrementing below zero
    //         if (oldValue > 0) {
    //           var newVal = parseInt(oldValue - 1);
    //         } else {
    //           newVal = 0;
    //         }
    //       }
    //       $button.closest("ul").prev().val(newVal);
        
    //     })
    //     });
    
});

  

          //sets win/lose conditions
        //if (userTotal == randNum){
       //   winner();
      //  }
        //else if ( userTotal > randNum){
        //  loser();
       // }    

//on click add crystal values until = or >
//$(document).ready(function(){
  //  var addedNum = 
//})
//Player wins if the number they click equals the random number.
//if = randNum then win and show "You win!"

//player looses if the number clicked does not equal the random number.
//if is > randNum then loss

//record the win or loss and display proper message.

//start new game 