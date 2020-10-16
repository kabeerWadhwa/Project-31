var particles = []
var plinkos = []
var divisions = []

var divisionsHeight=300

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);


for(var k =0; k<=width; k = k + 80){
  divisions.push(new divisions(k,height - divisionHeight/2,10,divisionHeight));
}

for (var j = 40; j <+width; j=j+50)
{
  plinkos.push(new plinko(j,75));
}

for (var j = 15; j <=width-10; j=j+50)
{
  plinkos.push(new plinko(j,175));
}

for (var j = 15; j <=width-10; j=j+50)
{
  plinkos.push(new plinko(j,175));
}

for (var j = 15; j <=width-10; j=j+50)
{
  plinkos.push(new plinko(j,175));
}
}
/*var division1 = new Division(0,400,800,10)
var division2 = new Division(80,400,800,10)
var division3 = new Division(160,400,800,10)
var division4 = new Division(240,400,800,10)
var division5 = new Division(320,400,800,10)
var division6 = new Division(400,400,800,10)
var division7 = new Division(480,400,800,10)
*/
function draw() {
  background(255,255,255);
    
  drawSprites();
}