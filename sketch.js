
let cx, cy; // posicion del personaje
let impulso = 0;
let gravedad = 0.8;


var player;
var corriendo = false;
var saltando = false;
var corriendo2 = false;

var xperso = 19*2 ;
var yperso = 34*2 ;

var posSuelo =0;
var posSuelo2 =0;
var posSuelo3 =0;

var posHud;
var mostrarItem1 = true;
var mostrarItem2 = true;
var mostrarItem3 = true;
var mostrarItem4 = true;


var xitem1;
var yitem1;
var xitem2;
var xitem3;

var text1y = 1080;
var text2y = 1080;
var statsY = 1080; 
var codeY = 1080; 

var tijerax = 1375; 
var tijeray = 813; 


let drag = false;

var instru3y = 1080;
var globox;
var globoy;
var globoE;
var globoExplota = false;

var item4y = 165;

var infofinalY = 1080;

var ln1x;
var ln1y;
var ln2x;
var ln2y;
var ln3x;
var ln3y;
var ln4x;
var ln4y;

function preload() {
  img1 = loadImage("img/idle.gif");
  img2 = loadImage("img/run.gif");
  img3 = loadImage("img/jump.png");
  img4 = loadImage("img/run2.gif");
  puff = loadImage("img/puff.gif");
  suelo = loadImage("img/suelo.png");
  fondo1 = loadImage("img/fondo1.png");
  fondo2 = loadImage("img/fondo2.png");
  fondo3 = loadImage("img/fondo3.png");
  info = loadImage("img/pixelinfo.gif");
  info2 = loadImage("img/pixelinfo.png");
  instru1 = loadImage("img/instruction1.png");
  instru2 = loadImage("img/instruction2.png");
  instru3 = loadImage("img/instruction3.png");
  mission = loadImage("img/mission.png");
  title = loadImage("img/title.png");
  cora = loadImage("img/corazon.png");
  pen = loadImage("img/LAPIZ.gif");
  pen2 = loadImage("img/LAPIZ.png");
  stats = loadImage("img/stats.png");
  codei = loadImage("img/code.gif");
  codei2 = loadImage("img/code.png");
  stats2 = loadImage("img/stats2.png");
  scissors = loadImage("img/scissors.png");
  globo = loadImage("img/globo.gif");
  contact = loadImage("img/contact.gif");
  contact2 = loadImage("img/contact.png");
  stats2fin = loadImage("img/stats2fin.png");
  statsfin = loadImage("img/statsfin.png");
  infofinal = loadImage("img/infofinal.png");
  insta = loadImage("img/instagram.svg");
  github = loadImage("img/github.svg");
  linke = loadImage("img/linkedin.svg");
  boton = loadImage("img/BOTON.png");
}

function setup() {
  createCanvas(1920 , 1080);
  cx = width / 4;
  cy = 428;
    }
    
function draw() {
  background(0);
  
 
  // IMÁGENES ESCENARIO
  
  
  image(fondo3, 0, 0, width, height);
  image(fondo2, posSuelo2, 0, 1434 * 2 ,216 * 2.5);
  image(fondo1, posSuelo, 0, 2789 * 2 ,216 * 2.5);
  image(suelo, posSuelo, 460, 4328 * 2 ,49 * 2);

  frameRate(50)

  // TIJERA

  image(infofinal,50,infofinalY,1282,330)

  

  if (drag) {
    tijerax = mouseX - 100 / 2;
    tijeray = mouseY - 100 / 2;
  } else{
    tijerax = 1375; 
    tijeray = 813;
  }
  image(scissors,tijerax,tijeray,100,100)

  if (posSuelo < -4420 ){
    instru3y -= 8;
  }
  if (instru3y < 605){
    instru3y = 605;
  }

  // ITEMS
  
  posHud = width - 400

  xitem1 = posSuelo + 1500;
  yitem1 = 300 ;

  xitem2 = posSuelo + 3500;

  xitem3 = posSuelo + 4300;

  






  // ELEMENTOS INTERFAZ

  image(instru1, posSuelo + 50 , 600, 645  ,207);
  image(instru2, posSuelo + 800 , 500, 816  ,446);
  image(instru3, posSuelo + 5100,instru3y, 1198 * .8,358*.8)
  
  image(mission, posHud  , 825, 38 * 2  ,38 * 2);
  image(mission, posHud + 90 , 825, 38 * 2  ,38 * 2);
  image(mission, posHud + 180 , 825, 38 * 2  ,38 * 2);
  image(mission, posHud + 270 , 825, 38 * 2  ,38 * 2);



  stroke(255);
  strokeWeight(4);
  noFill();
  rect(posHud -25, 800, 400, 125);
  rect(posSuelo + 3605,statsY - 15, 575, 260);
  rect(posSuelo + 4380,codeY - 15, 575, 260);

  strokeWeight(.5);
  fill(255)
  textFont('Courier');
  textSize(28);
  text('Objetivos', posHud + 100, 775);
  text('Estadísticas del personaje', posSuelo + 3620, statsY - 35);
  text('Estadísticas secundarias', posSuelo + 4395, codeY - 35);
  
  

  textSize(40);
  image(title, 359, 25, 1202, 272); 
  image(cora, 50, 25, 50, 50); 
  text(' x 27', 100, 61);

  textSize(28);
  text("¡Hola! Este es mi portfolio interactivo, me llamo Nacho Puerto y soy estudiante de diseño gráfico y desarrollo web, tengo 27 años y disfruto mucho involucrándome en nuevos proyectos como este.",posSuelo + 1800,text1y,720)
  
  text("Me gusta aprender a utilizar nuevas tecnologías día a día, ¡Realmente lo disfruto mucho! Sigue hacia adelante para recolectar toda la información a cerca de mí, ¡Espero que te guste!!",posSuelo + 2700,text2y,720)

  image(stats,posSuelo + 3620,statsY,771 * 0.7,330 *0.7)
  image(stats2,posSuelo + 4395,codeY,771 * 0.7,330 *0.7)


ln1x = 150;
ln1y = infofinalY + 210;
ln2x = 275
ln2y = infofinalY + 210
ln3x = 400
ln3y = infofinalY + 210
ln4x = 900
ln4y = infofinalY + 210

image(insta, ln1x,ln1y,75,75)
image(github, ln2x,ln2y,75,75)
image(linke,ln3x ,ln3y,75,75)
image(boton,ln4x ,ln4y,330,70)
  


    // CAMBIO DE IDIOMA

    // ANIMACIONES PERSONAJE Y MOVIMIENTO

  if (corriendo === true){
    player = image(img2, cx, cy, xperso, yperso);
    posSuelo -= 5;
    posSuelo2 -= 2.5;
  }else if (saltando === true ){
    player = image(img3, cx, cy, xperso, yperso);
  }else if (corriendo2 === true){
    player = image(img4, cx, cy, xperso, yperso);
    posSuelo += 5;
    posSuelo2 += 2.5;
  }else{
    player = image(img1,cx, cy, xperso, yperso);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    corriendo = true;
  }else{
    corriendo = false;
  }

  if (keyIsDown(LEFT_ARROW)) {
    corriendo2 = true;
  }else{
    corriendo2 = false;
  }

  // MOVIMIENTO ESCENARIO

  if (cy < 420 ){
    saltando = true;
    
  }else{
    saltando = false;
  }

  if (posSuelo<- 4815 && globoExplota === false){
    corriendo = false;

  }

  if (posSuelo< -6080){
    corriendo = false;
    infofinalY -= 5;
  }else if (posSuelo > -6080 && posSuelo < -6040){
    infofinalY += 65;
  }

  if (infofinalY > 1080){
    infofinalY = 1080;
  }
  
  if (infofinalY < 600){
    infofinalY = 600;
  }

  if (posSuelo >= 0){
    corriendo2 = false;
  }
  
  // ITEM 1
  
  if (dist(xitem1,yitem1,cx,cy) < 50) {
    mostrarItem1 = false;
    image(puff,xitem1- 25,yitem1 - 35 , 28 * 4 ,41 * 4);
    

  }
  if(mostrarItem1 === true){
    image(info,xitem1  ,yitem1 , 28 * 2 ,41 * 2);
    
  }else{
    image(info2,posHud +3 , 828, 28 * 2.5  ,28 * 2.5);
    text1y -= 8;
  }

  if (text1y < 620){
    text1y = 620;
  }
  
  if (posSuelo < -1950 && mostrarItem1 == false){
    text2y -= 8;
  }
  if (text2y < 620){
    text2y = 620;
  }

  
  // ITEM 2
  
  if (dist(xitem2,yitem1,cx,cy) < 50) {
    mostrarItem2 = false;
    image(puff,xitem2- 25,yitem1 - 35 , 28 * 4 ,41 * 4);
    

  }
  if(mostrarItem2 === true){
    image(pen,xitem2  ,yitem1 , 28 * 2 ,41 * 2);
    
  }else{
    image(pen2,posHud +93 , 828, 28 * 2.5  ,28 * 2.5);
    statsY -= 8;
  }

if (statsY < 660){
  statsY =  660;
}

  // ITEM 3
  
  if (dist(xitem3,yitem1,cx,cy) < 50) {
    mostrarItem3 = false;
    image(puff,xitem3- 25,yitem1 - 35 , 28 * 4 ,41 * 4);
    

  }
  if(mostrarItem3 === true){
    image(codei,xitem3  ,yitem1 , 28 * 2 ,41 * 2);
    
  }else{
    image(codei2,posHud +182 , 828, 28 * 2.5  ,28 * 2.5);
    codeY -= 8;
  }

  if (codeY < 660){
    codeY =  660;
  }


     // ITEM 4

     globox = posSuelo + 6550;
     globoy = 50;
     xitem4 = globox + 15;
     
     
     if (dist(tijerax,tijeray,globox + 38,globoy +77) < 60 && item4y <  325){
       globoExplota = true;
       globoE = image(puff,globox- 25,globoy - 35 , 28 * 4 ,41 * 4);
       item4y += 60;
     }

   
     if (globoExplota === false){
       globoE = image(globo,globox, globoy, 38*2 ,77*2);
       image(contact,globox + 15, item4y, 28*2 ,40*2);
     }

    if (globoExplota === true && mostrarItem4 === true ){
      image(contact,globox + 15, item4y, 28*2 ,40*2);
    }

   

    if(mostrarItem4 === false){
     
        image(contact2,posHud +275 , 828, 28 * 2.5  ,28 * 2.5);
      
    }



    if (dist(xitem4,325,cx,cy) < 50) {
      mostrarItem4 = false;
      image(puff,xitem4- 25,325, 28 * 4 ,41 * 4);
    }



  

  salto();
  console.log(posSuelo)
 
}

function mousePressed() {
  if (mouseX > tijerax && mouseX < tijerax + 100) {
    drag = true;
  }
  
  if(dist(mouseX,mouseY,ln1x + 37,ln1y + 37) < 37){
    window.open("https://www.instagram.com/nachopuertodesign/")
  }
  if(dist(mouseX,mouseY,ln2x + 37,ln2y + 37) < 37){
    window.open("https://github.com/Nachopuerto95")
  }
  if(dist(mouseX,mouseY,ln3x + 37,ln3y + 37) < 37){
    window.open("https://www.linkedin.com/in/nacho-puerto-mendoza-93184b173/m")
  }
  if(dist(mouseX,mouseY,ln4x + 165,ln4y + 35) < 165){
    window.open("https://nachopuertoportfolio.netlify.app/")
  }

  
}


function mouseReleased() {
  drag = false;
}



// SALTO PERSONAJE 

function salto() {
  cy -= impulso;
  impulso = impulso - gravedad
  
  if (cy > 428) {
    impulso = 0
  }
 
}

function keyPressed() {
  if (keyCode === 32 && cy >= 428){
    cy = 428;
    impulso = 15;
  }
}