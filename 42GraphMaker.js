// A backup of what is at https://editor.p5js.org/kaidrumm/sketches/-Xb87w9b8
// This is a P5.JS project made by Kai Drumm

function Project(x, y) {
  this.x = x;
  this.y = y;
  this.name = "";
  this.del = false
  this.display = function() {
    fill("#474747")
    stroke("#cccdcf")
    ellipse(this.x, this.y, 30)
    fill("#cccdcf")
    textAlign(CENTER, CENTER)
    text(this.name, this.x, this.y)
  }
}

var projects = []
var typing
var current

function setup() {
  createCanvas(1000, 1000);
  print("Type '@' (Shift+2) to print coordinates!")
}

function draw() {
  background("#171719");
  stroke("#cccdcf");
  fill("#cccdcf");
  textAlign(CENTER, CENTER);
  text("0", 10, 10)
  line(500, 0, 500, 10) // top middle
  text("3000", 500, 15)
  text("6000", 985, 15) // top right
  line(0, 500, 10, 500) // left middle
  text("3000", 15, 500)
  text("6000", 15, 995) // left bottom
  
  fill("#424242")
  for(let i = 0; i< 6000; i+= 50){
    line(i, 0, i, 6000)
  }
  for (let j = 0; j < 6000; j+= 50){
    line(0, j, 6000, j) 
  }
  
  
  for (let prj of projects) {
    if (!prj.del){
      prj.display()
    }
  }
  fill('white')
  stroke('white')
  text("(" + 6*mouseX + ", " + 6*mouseY + ")", mouseX, mouseY)
}

function outputAll(){
  for (let prj of projects) {
    if (!prj.del){
      print(`${prj.name}: (${6*prj.x}, ${6*prj.y})`)
    }
  }
}

function keyPressed(){
  // print(key, " ", keyCode)
  if (keyCode === RETURN || keyCode === ENTER){
    typing = false
  }
  if (keyCode === DELETE || keyCode === BACKSPACE){
    // print("del")
    current.del = true
  }
  if (typing){
    current.name += key
  }
  if (keyCode === 50){
    outputAll() 
  }
}

function mouseDragged(){
  current.x = mouseX
  current.y = mouseY
  return false
}

function mousePressed(){
  var selected = false
  for(let prj of projects){
     if (!prj.del && collidePointEllipse(mouseX, mouseY, prj.x, prj.y, 30, 30)){
       current = prj
       selected = true
       typing = true
     }
  }
  if (!selected){
    new_project = new Project(mouseX, mouseY)
    typing = true
    current = new_project
    projects.push(new_project)
  }
}
