const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const image = new Image();
const imageSlice = 1;
const amplitude = 8;
const intensity = 3;
let speed = 0;

window.onload = () => {
  image.src = 'image.png';
  image.addEventListener('load', imageLoadHandler);
}

function imageLoadHandler() {
  canvas.width = this.width;
  canvas.height = this.height;
  draw();
}

function draw() {
  speed += 0.04;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < image.width; i++) {
    ctx.drawImage(
      image,

      i * imageSlice,
      Math.sin(speed - i / amplitude) * intensity,
      imageSlice,
      image.height,

      i * imageSlice,
      0,
      imageSlice,
      image.height
    );
  }

  requestAnimationFrame(draw);
}
