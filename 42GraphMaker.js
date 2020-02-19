// need to fix the div size because I can make nodes to the right in the white area because that div is not limited there.

var projectList = [];
var current;
var myJSON;

function setup() {
  var myCanvas = createCanvas(1000, 1000);
  myCanvas.parent("graphBoardDiv"); 
}

function draw() {
  createBackground();
  writeNumbersOnCanvas();
  drawLinesOnCanvas();
  
  for (let prj of projectList) {
      prj.display = function() {
      fill('#474747');
      stroke('#cccdcf');
      ellipse(prj.x / 6, prj.y / 6, 30);
      fill('#cccdcf');
      textAlign(CENTER, CENTER);
      text(prj.name, prj.x / 6, prj.y / 6);
      }
      prj.display() 
  }
  mouseLocation(); 
  
}

function clearProjectList(){
  projectList.length = 0;
}

function updateProjectID(){
  current.projectID = document.getElementById("projectIDtextBox").value;
}

function updateProjectName(){
  current.name = document.getElementById("projectNametextBox").value;
}

function mousePressed(e) {
  var clickDiv = document.querySelector('#graphBoardDiv');
   if (clickDiv.contains(event.target)){
    if ($('.dropdown').find('.dropdown-menu').is(":hidden")) { // If we're in a dropdown menu don't make a node.
      var selected = false;
      for (let prj of projectList) {
        if (collidePointEllipse(mouseX, mouseY, prj.x / 6, prj.y / 6, 30, 30)) {
          current = prj;
          selected = true;
        }
      }
      if (!selected && mouseY < 1000) {
        newProject = new createProject(mouseX, mouseY);
        current = newProject;
        projectList.push(newProject);
        
      }
      document.getElementById("projectNametextBox").value = current.name;
      document.getElementById("projectIDtextBox").value = current.projectID; 
    }     
   }
}

function mouseDragged() {
  var clickDiv = document.querySelector('#graphBoardDiv');
  if (clickDiv.contains(event.target)){
    current.x = mouseX * 6;
    current.y = mouseY * 6;
    return false;
  }
}

function keyPressed() {
  if (keyCode === RETURN || keyCode === ENTER) {
  }
  if (keyCode === DELETE) {
    projectList.splice(projectList.indexOf(current), 1);
  }
}

function createProject(x, y) {
  this.x = x * 6;
  this.y = y* 6;
  this.name = '';
  this.projectID = '';
  this.display = function() {
    fill('#474747');
    stroke('#cccdcf');
    ellipse(this.x / 6, this.y / 6, 30);
    fill('#cccdcf');
    textAlign(CENTER, CENTER);
    text(this.name, this.x / 6, this.y / 6);
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

function saveGraphFile() {
  saveJSON(projectList, 'HolyGraph.txt');
}