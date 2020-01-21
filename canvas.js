function createBackground() {
    background('#002534');
    stroke('#cccdcf');
    fill('#424242');
  }
  
  function drawLinesOnCanvas() {
    for (let i = 0; i < 6000; i += 50) {
      line(i, 0, i, 6000);
    }
    for (let j = 0; j < 6000; j += 50) {
      line(0, j, 6000, j);
    }
  }
  
  function writeNumbersOnCanvas() {
    fill('#cccdcf');
    textAlign(CENTER, CENTER);
    text('0', 10, 10);
    line(500, 0, 500, 10); // top middle
    text('3000', 500, 15);
    text('6000', 985, 15); // top right
    line(0, 500, 10, 500); // left middle
    text('3000', 15, 500);
    text('6000', 15, 995); // left bottom
    fill('#424242');
  }
  
  function mouseLocation() {
    fill('white');
    stroke('blue');
    text('(' + 6 * mouseX + ', ' + 6 * mouseY + ')', mouseX, mouseY);
  }
  