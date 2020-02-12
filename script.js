const change = document.getElementById("change");

change.addEventListener("click", function(e) {
  updatePic();
  change.innerHTML = "do it again!";
});

const canvas = document.getElementById("canvas");
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext("2d");



function updatePic() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    // random position x and y for each circle:
    let x = Math.floor(Math.random() * 400);
    let y = Math.floor(Math.random() * 400);

    //   random radius for each circle up to 20px
    let r = Math.floor(Math.random() * 20);

    //   random numbers for three color channels to make them different colors:
    let redChannel = Math.floor(Math.random() * 256);
    let greenChannel = Math.floor(Math.random() * 256);
    let blueChannel = Math.floor(Math.random() * 256);

    //   drawing a circle:
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.strokeStyle =
      "rgba(" + redChannel + "," + greenChannel + "," + blueChannel + ",0.8)";
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle =
      "rgba(" + redChannel + "," + greenChannel + "," + blueChannel + ",0.8)";
  }
}