var projectList = [];
var typing;
var current;
var myJSON;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  createBackground();
  writeNumbersOnCanvas();
  drawLinesOnCanvas();
  
  for (let prj of projectList) {
    if (!prj.del) {
      prj.display = function() {
      fill('#474747');
      stroke('#cccdcf');
      ellipse(prj.x, prj.y, 30);
      fill('#cccdcf');
      textAlign(CENTER, CENTER);
      text(prj.name, prj.x, prj.y);
      }
      prj.display() 
    }
  }
  mouseLocation(); 
}

function clearProjectList(){
  projectList.length = 0;
}

function updateProjectID(){
  current.projectID = document.getElementById("projectIDtextBox").value;
  // TODO: It's not updating the projectID of the current project because clicking on the projectID textbox is actually clicking a node behind that menu.
}

function mousePressed() {
  if ($('.dropdown').find('.dropdown-menu').is(":hidden")) { // If we're in a dropdown menu don't make a node.
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
    document.getElementById("projectNametextBox").value = current.name;
    document.getElementById("projectIDtextBox").value = current.projectID;
  }
}

function mouseDragged() {
  current.x = mouseX;
  current.y = mouseY;
  return false;
}

function keyPressed() {
  if (keyCode === RETURN || keyCode === ENTER) {
    typing = false;
  }
  if (keyCode === DELETE || keyCode === BACKSPACE) {
    current.del = true;
  }
  if (typing) {
    if (keyCode != 16){ // Don't put record the Shift button for capitals on nodes.
      current.name += key;
    }
  }
}

function createProject(x, y) {
  this.x = x;
  this.y = y;
  this.name = '';
  this.projectID = '';
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

function uploadJSON(){
   //Section of code used to upload JSON files.
  if (confirm("The current map will be cleared, do you wish to continue?")){
    clearProjectList();
    $('.dropdown-toggle').dropdown('toggle'); // Put the dropdown menu away
    document.getElementById('contentFile').click()
     document.getElementById('contentFile').onchange = function(evt) {
          try {
              let files = evt.target.files;
              if (!files.length) {
                  alert('No file selected!');
                  return;
              }
              let file = files[0];
              let reader = new FileReader();
              //const self = this;
              reader.onload = (event) => {
                  //console.log(event.target.result);
                myJSON = JSON.parse( event.target.result );
                graphTextFileLoader(myJSON)
              };
             reader.readAsText(file);
          } catch (err) {
              console.error(err);
          }
            
      } 
  }
}

function graphTextFileLoader(result) { 
  print(result)
  for (let prj of result){
    projectList.push(prj); 
  }
}

function outputAll() {
  for (let prj of projectList) {
    if (!prj.del) {
      print(`${prj.name}: (${6 * prj.x}, ${6 * prj.y})`);
    }
  }
  saveJSON(projectList, 'HolyGraph.txt');
}