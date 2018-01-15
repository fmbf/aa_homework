document.addEventListener("DOMContentLoaded", function(){
  // in your HTML this element appears as <canvas id="myCanvas"></canvas>
  const canvas = document.getElementById('mycanvas');
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = "orange";
  // draws the rectangle at position 10, 10 with width of 55 & height of 50
  ctx.fillRect(10, 10, 55, 50);

  // First path
  ctx.beginPath();
  ctx.strokeStyle = 'blue';
  ctx.moveTo(20, 20);
  ctx.lineTo(200, 20);
  ctx.stroke();

  // Second path
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(20, 20);
  ctx.lineTo(120, 120);
  ctx.stroke();


  ctx.beginPath();
  ctx.strokeStyle = 'purple';
  ctx.lineWidth = 1;
  void ctx.arc(100, 100, 50, 0, 360);
  ctx.stroke();
  // ctx.fillStyle = "red";
  // ctx.fill();



  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.moveTo(40, 40);
  ctx.lineTo(110, 220);
  ctx.lineTo(100, 240);
  ctx.lineTo(80, 240);
  ctx.lineTo(70, 220);
  ctx.lineTo(90, 200);
  void ctx.arc(200, 200, 50, 0, 360);
  ctx.stroke();


});
