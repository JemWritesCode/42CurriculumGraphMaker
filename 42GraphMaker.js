<!DOCTYPE html>
<html>
   <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.dom.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.sound.min.js"></script>
      <script src ="collide2d.min.js"></script>
      <link rel="stylesheet" type="text/css" href="style.css">
      <meta charset="utf-8" />
      <!--Used to bring in BOOTSTRAP-->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
   </head>
   <body>
     
     <div class="sad">
     <script src="sketch.js"></script>
      <script src="canvas.js"></script>
     </div>
     
      <!--Used to bring in BOOTSTRAP-->
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      
     
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
         <a class="navbar-brand" href="#">HolyGraphMaker</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  File
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                     <button class="dropdown-item"  onclick="outputAll()">Save Graph</button>
                     <input type="file" id="contentFile"/>
                     <input type="button" onclick="uploadJSON()" value="Load Graph" id="loadGraph"/>
                  </div>
            </ul>
               </li>
         </div>
      </nav>
     
     
   </body>
</html>