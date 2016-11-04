$(document).ready(function() {

  console.log('script loaded');

  // 2 arrays containing 2 types of foods (healthy and junk)
  // containing name, img src, score and "healthy" or "junk" identifier
  // for now, ignoring the preset scores...
  var healthyFoods = [
    ['Apple','images/apple.png','healthy',10],
    ['Avocado','images/avocado.png','healthy',30],
    ['Blueberries','images/blueberries.png','healthy',15],
    ['Broccoli','images/broccoli.png','healthy',20],
    ['Carrot','images/carrot.png','healthy',15],
    ['Lemon','images/lemon.png','healthy',5],
  ];

  var junkFoods = [
    ['Can','images/can.png','junk',10],
    ['Candy','images/candy.png','junk',5],
    ['Doughnut','images/doughnut.png','junk',20],
    ['Fries','images/fries.png','junk',30],
    ['Hamburger','images/hamburguer.png','junk',25],
    ['Pizza','images/pizza.png','junk',20],
  ];

//  empty array to store the randomized food(s)
// var $assorted = [ ];

// var - holding the fallig foods div
var $fallingFoods = $('#falling-foods');

// variables for calculating scores
var $score = $('p.total-score');
var $totalScore = 0;
$score.text('Total Score: ' + $totalScore);

// variables for calculating junk scores
var $negScore = $('p.junk-score');
var $junkScore = 0;
$negScore.text('Junk Score: ' + $junkScore);

// borrowed from the Pokemon game
var $randomNum = function randNum (min,max) {
    return Math.floor(Math.random() * (max - min +1) + min);}

// function to create the food items
var makeFood = function() {
  // choosing which array with a random number (0 or 1)
  var healthOrJunk = Math.round(Math.random());
      if (healthOrJunk === 0){
          var arr = healthyFoods;
      }  else {
          var arr = junkFoods
      }
  // now that the array is chosen, choose the food item
  var foodItem = Math.round(Math.random() * arr.length -1);
  // var - the individual div holding each food
  var $foods = $('<div class="foods"> </div>');
  // use random food item above to grab image bground
  $foods.css('background-image', 'url(' + arr[foodItem][1] + ')') ;
  // randomizing where they fall from; staggering them
  $foods.css('left', Math.floor(Math.random()*(660-100)+100 ));
  // appending each food div to the foods container
  $fallingFoods.append($foods);


  $foods.click(function(){
    $foods.remove();
    // remove foods div altogether when clicked
     var $points = $randomNum(5,30)
     if (arr[foodItem][2]=== 'healthy') {
        $score.text('Total Score: ' + ($totalScore += $points));
      } else {
    // reach goal: turn this into junk-o-meter score
        // $negScore.text('Junk Score: ' + ($junkScore + foodItem[3]));
        $negScore.text('Junk Score: ' + ($junkScore += $points));
        }
        // console.log($totalScore);
        // console.log($junkScore);
    // overallScore();
    // call score function
  });

  // console.log(Math.floor(Math.random()*(660-220)+100 ));
  // printing the random number indicating the left-side positioning
  }

// function to calculate scores
// var overallScore = function() {
//   // added 'healthy' and 'junk' values to arrays
//   if (foodItem[2] == 'healthy') {
//     // adding preset score to respective p tags
//     $score.text('Total Score: ' + ($totalScore + foodItem[3]));
//   } else {
//     // reach goal: turn this into junk-o-meter score
//     $negScore.text('Junk Score: ' + ($junkScore + foodItem[3]));
//   }
// }


var addEventListeners = function() {

  var stop = setInterval(function(){
  makeFood();
  //clearInterval(stop); // put this in an if statement - game over
  },2000)

  // $foods.click(function(){
  //   $foods.remove();
  //   // remove foods div altogether when clicked
  //   overallScore();
  //   // call score function
  // });

}




$(document).ready(function(){
    addEventListeners();
  })

});







  // click function
   // $foods.on("click", function() {
   //      // $foods.addClass("different-class-here");  // save for reach goal, imgs change on click
   //      setTimeout(function(){
   //        $foods.remove();
   //        // checkForWinner();  // create function/variable that's checking for winner
   //      }, 800); // foods are removed once they're clicked on
   //    })

      // return $foods;



// (function(){

// // var game_start = new Audio('/audio/start-round.mp3');
// //   game_start.play();



//    // function to create divs? onclick - removed and added to score(s)
//       // or, function to continuously occupy divs with random foods
//       // ---





   // function for scores
      // if food is from good array, add set points to total score
      // else, convert junk points to junk-o-meter value
      // when score reaches x, increase speed
      // when score reaches 25K, win game
      // counter checking for max junk score
      // when junk score reaches y, you lose

      // ---

//       console.log(createFood());

// });



  //   duck.on("click", function() {
  //     duck.addClass("shot");

  //     setTimeout(function() {
  //       duck.remove();
  //       checkForWinner();
  //     }, 1000)
  //   })

  //   return duck;
  // }


  // function checkForWinner() {
  //   if ($('.duck').length === 0) {
  //     alert("You Win!");
  //   }
  // }


