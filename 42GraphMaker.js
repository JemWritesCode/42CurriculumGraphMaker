function createProject(x, y) {
  this.x = x;
  this.y = y;
  this.name = '';
  this.del = false;
  this.display = function() {
    fill('#474747');
    stroke('#cccdcf');
    ellipse(this.x, this.y, 30);
    fill('#cccdcf');
    textAlign(CENTER, CENTER);
    text(this.name, this.x, this.y);
  };
}

var projectList = [];
var typing;
var current;

function setup() {
  loadStrings('theList.txt', graphTextFileLoader);
  createCanvas(1000, 1000);
  print("Type '@' (Shift+2) to print coordinates!");
}

function graphTextFileLoader(result) {
  // console.log(result)
}

function mouseLocation() {
  fill('white');
  stroke('blue');
  text('(' + 6 * mouseX + ', ' + 6 * mouseY + ')', mouseX, mouseY);
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

function createBackground() {
  background('#002534');
  stroke('#cccdcf');
  fill('#424242');
}

//draw is built in and runs without being called.
function draw() {
  createBackground();

  for (let prj of projectList) {
    if (!prj.del) {
      prj.display();
    }
  }

  writeNumbersOnCanvas();
  drawLinesOnCanvas();
  mouseLocation();
}

function outputAll() {
  var test = [];
  for (let prj of projectList) {
    if (!prj.del) {
      print(`${prj.name}: (${6 * prj.x}, ${6 * prj.y})`);
      test.push(prj.name);
      test.push(6 * prj.x);
      test.push(6 * prj.y);
    }
  }
  print(projectList);
  //saveStrings(test, 'theList.txt');
}

function keyPressed() {
  // print(key, " ", keyCode)
  if (keyCode === RETURN || keyCode === ENTER) {
    typing = false;
  }
  if (keyCode === DELETE || keyCode === BACKSPACE) {
    // print("del")
    current.del = true;
  }
  if (typing) {
    current.name += key;
  }
  if (keyCode === 50) {
    outputAll();
  }
}

function mouseDragged() {
  current.x = mouseX;
  current.y = mouseY;
  return false;
}

function mousePressed() {
  console.log(mouseY);
  var selected = false;
  for (let prj of projectList) {
    if (!prj.del && collidePointEllipse(mouseX, mouseY, prj.x, prj.y, 30, 30)) {
      current = prj;
      selected = true;
      typing = true;
    }
  }
  if (!selected && mouseY < 1000) {
    newProject = new createProject(mouseX, mouseY);
    typing = true;
    current = newProject;
    projectList.push(newProject);
  }
}
