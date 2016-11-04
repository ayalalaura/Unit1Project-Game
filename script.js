$(document).ready(function() {

  console.log('script loaded');

  var healthyFoods = [
    ['Apple','images/apple.png',10],
    ['Avocado','images/avocado.png',30],
    ['Blueberries','images/blueberries.png',15],
    ['Broccoli','images/broccoli.png',20],
    ['Carrot','images/carrot.png',15],
    ['Lemon','images/lemon.png',5],
  ];

  var junkFoods = [
    ['Can','images/can.png',10],
    ['Candy','images/candy.png',5],
    ['Doughnut','images/doughnut.png',20],
    ['Fries','images/fries.png',30],
<<<<<<< HEAD
    ['Hamburger','images/hamburguer.png',25],
=======
    ['Hamburger','images/hamburger.png',25],
>>>>>>> 3467e5f70e8b1880dc56ada9a5187d66ed381384
    ['Pizza','images/pizza.png',20],
  ];

var $assorted = [ ];

var $fallingFoods = $('#falling-foods');


// var $foods = $('<div class="foods"> </div>');


// create 6 <div>s with class .foods
var makeFood = function(){
  // choosing which array
  var healthOrJunk = Math.round(Math.random());
  if (healthOrJunk === 0){
    var arr = healthyFoods;
  }  else {
    var arr = junkFoods
  }

  //choose index
  var foodItem = Math.round(Math.random() * arr.length -1);

  var $foods = $('<div class="foods"> </div>');
  $foods.css('background-image', 'url(' + arr[foodItem][1] + ')') ;
  $foods.css('left', Math.floor(Math.random()*(660-100)+100 ));
   $fallingFoods.append($foods);
 $foods.click(function() {
          $foods.remove();
          // handle some game logic with another function
<<<<<<< HEAD
          // is this a healthy food or a junk food?
=======
>>>>>>> 3467e5f70e8b1880dc56ada9a5187d66ed381384
      });
console.log(Math.floor(Math.random()*(660-220)+100 ));
   // for(var i=0; i<6; i++) {
   //    makeFood();
   //  }
  }







// random images in the divs
// var chooseFoods = function(){
//     for (var i = 0; i < healthyFoods.length - 1; i++){
//       $assorted = healthyFoods[Math.floor(Math.random() * (healthyFoods.length - 1)+1)];
//       $foods.css('background-image', 'url("$assorted[2]")');
//     }
// }
// chooseFoods();
// console.log($assorted);


  // click function
   // $foods.on("click", function() {
   //      // $foods.addClass("different-class-here");  // save for reach goal, imgs change on click
   //      setTimeout(function(){
   //        $foods.remove();
   //        // checkForWinner();  // create function/variable that's checking for winner
   //      }, 800); // foods are removed once they're clicked on
   //    })

      // return $foods;

var addEventListeners = function() {
<<<<<<< HEAD
  // add click function(s) here
=======
>>>>>>> 3467e5f70e8b1880dc56ada9a5187d66ed381384
  var stop = setInterval(function(){
  makeFood();
  //clearInterval(stop);
  // put this in an if statement - game over
  },2000)
}

$(document).ready(function(){
    addEventListeners();
  })

});



// (function(){

// // var game_start = new Audio('/audio/start-round.mp3');
// //   game_start.play();



//   // function for foods to fall
//       // randomized from array
//       // fall down the screen
//       // speed
//       // increase speed
//       // stop when win/lose

//    // function to create divs? onclick - removed and added to score(s)
//       // or, function to continuously occupy divs with random foods
//       // ---



   // function to click on falling foods
      // disappear
      // good food added to score
      // bad food added to junk-o-meter



      // $getSick.on("click", function() {
      //   // $getHealthy.addClass("different-class-here");  // save for reach goal
      //   setTimeout(function(){
      //     $getSick.remove();
      //     // checkForWinner();  // create function/variable that's checking for winner
      //   }, 800); // foods are removed once they're clicked on
      // })

      // return $getSick;

      // ---

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




  // // 6. Defines a createDuck function that returns a duck
  // function createDuck() {
  //   // 1. Creates a <div> with the class "duck" named "duck"
  //   var duck = $('<div class="duck"></div>');
  //   body.append(duck);



  //   duck.css("top", Math.random() * window.innerHeight);
  //   duck.css("left", Math.random() * window.innerWidth);


  //   setInterval(function() {
  //     duck.css("top", Math.random() * window.innerHeight);
  //     duck.css("left", Math.random() * window.innerWidth);
  //   }, 2000)


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

  // for(var i=0; i<5; i++) {
  //   createDuck();
  // }
