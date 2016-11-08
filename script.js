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
var stop;

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


// replay function
// thanks Mike!
var restart = function() {
  location.reload();
}



// function to create the food items
var makeFood = function() {

// when this function is called, make the main container (holding
// game elements) visible
$('#main-container').css('display', 'block');

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
  $foods.css('left', Math.floor(Math.random()*(1000-200) + 200));
  // appending each food div to the foods container
  $fallingFoods.append($foods);

  // return values
  //

  $foods.click(function(){
    // change cursor to mickey mouse hand
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

     if ($totalScore >= 300){
      clearInterval(stop); // this doesn't work
      $fallingFoods.html(''); // cleared divs
      $('#win-screen').css('display', 'block');
      $('#score').css('display','none');
      $('#win-screen').toggleClass('animated').addClass('slideInLeft');

      console.log($totalScore);
     };

     if ($junkScore >= 200){
      clearInterval(stop); // this doesn't work
      $fallingFoods.html(''); // cleared divs
      $('#lose-screen').css('display', 'block');
      $('#score').css('display','none');
      $('#lose-screen').toggleClass('animated').addClass('slideInLeft');

      console.log($junkScore);
     };
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

$('#start-button').click(function(){
  $('#start-screen').css('display', 'none');
  stop = setInterval(function(){
  makeFood(); // calling makeFood() twice - FIX THIS!
  //clearInterval(stop); // put this in an if statement - game over
  },600)

$('.replay-button').click(function() {
  restart();
})

})

  // var stop = setInterval(function(){
  // makeFood(); // calling makeFood() twice - FIX THIS!
  // //clearInterval(stop); // put this in an if statement - game over
  // },2000)

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



