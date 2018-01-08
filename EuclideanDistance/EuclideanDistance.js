
// challenge:
// "A drone begins flying aimlessly beginning at the origin, (0,0). At each time step, the drone flies one meter in a random direction—either north, south, east, or west—with equal probability. 
// In the language of your choosing, write a program that takes an integer argument n, representing the number of time steps, and prints the following:
// For each step, the location of the drone, including the starting point (0,0).  
// At the end, the final Euclidean distance (straight, "as the crow flies") from the origin."
// a sample output, with input of n=4:
// (0,0)
// (0,1)
// (0,2)
// (-1,2)
// (-1,3)
// euclidean distance: 3.1622776

var currentX = 0;
var currentY = 0;
var directions = ['n', 's', 'w', 'e'];
var movement;

// var a = x1 - x2
// var b = y1 - y2

// var c = Math.sqrt( a*a + b*b );

function calculateDistance(arg) {
  console.log('starting x: ' + currentX + 'starting y: ' + currentY);
  for (var i = 0; i < arg; i++) {
    movement = directions[Math.floor(Math.random() * directions.length)]
    // console.log(movement);
    if (movement === 'n') {
      currentX += 1;
      console.log('x: ' + currentX + ' y: ' + currentY);
    } else if (movement === 's') {
      currentX -= 1;
      console.log('x: ' + currentX + ' y: ' + currentY);
    } else if (movement === 'w') {
      currentY -= 1;
      console.log('x: ' + currentX + ' y: ' + currentY);
    } else if (movement === 'e') {
      currentY += 1;
      console.log('x: ' + currentX + ' y: ' + currentY);
    }
    // console.log('current x: ' + currentX + ' current y: ' + currentY);
  }
  var x = 0 - currentX;
  var y = 0 - currentY
  var euclidean = Math.sqrt(x * x + y * y);
  console.log('distance traveled: ' + euclidean);
}

calculateDistance(10);