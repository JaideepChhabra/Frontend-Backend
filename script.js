var isDrawing = false;
var prevX = 0;
var prevY = 0;

const canvas = document.getElementById('mycanvas');
const context = canvas.getContext('2d');

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
canvas.addEventListener('mousedown', e => {
  prevX = e.offsetX;
  prevY = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, prevX, prevY, newX=e.offsetX, newY=e.offsetY);
    prevX = newX;
    prevY = newY;
  }
});

canvas.addEventListener('mouseup', e => {
    isDrawing = false;
  }
);

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 2;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}