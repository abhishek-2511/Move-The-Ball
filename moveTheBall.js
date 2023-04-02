
// Get the ball element
const ball = document.getElementById('ball');
      
// Set the initial position of the ball
let ballX = Math.floor(Math.random() * (window.innerWidth - ball.offsetWidth));
let ballY = Math.floor(Math.random() * (window.innerHeight - ball.offsetHeight));
ball.style.left = ballX + 'px';
ball.style.top = ballY + 'px';

// Set the bounds of the viewport
const minX = 0;
const minY = 0;
const maxX = window.innerWidth - ball.offsetWidth;
const maxY = window.innerHeight - ball.offsetHeight;

// Add event listener for key presses
document.addEventListener('keydown', function(event) {
  if (event.key === 'w' && ballY > minY) {
    ballY -= 10;
    ball.style.top = ballY + 'px';
  } else if (event.key === 'a' && ballX > minX) {
    ballX -= 10;
    ball.style.left = ballX + 'px';
  } else if (event.key === 's' && ballY < maxY) {
    ballY += 10;
    ball.style.top = ballY + 'px';
  } else if (event.key === 'd' && ballX < maxX) {
    ballX += 10;
    ball.style.left = ballX + 'px';
  }
});