function draw() {
  var canvas = document.getElementById('Canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var x = 10;
    while(x > 0){
      ctx.fillStyle = "#fcba03";
      ctx.fillStyle = "#fcce03";
      ctx.fillStyle = "#fceb03";
      ctx.fillStyle = "#f4fc03";
      ctx.fillStyle = "#fc6203";
      ctx.fillStyle = "#fc7703";
      ctx.fillStyle = "#c75f04";
      ctx.fillStyle = "#db3502";

      ctx.fillRect(20, 20, 100, 100);
      x = x - 0.001;
    }
    
  }
}