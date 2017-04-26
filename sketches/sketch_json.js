var url = 'https://api.myjson.com/bins/16ozqj';

function setup() {
   loadJSON(url, gotData, 'json');
   canvas = createCanvas(windowWidth, windowHeight * 0.8);
   canvas.parent('top');
   canvas.position(0, 0);
   canvas.style('z-index', '-1');
   noStroke();
   noLoop();
}

function gotData(data) {
   console.log(data);
   var total = 0;
   var starfighter = 0;
   for (var a = 0; a < data.results.length; a++) {
      total++;
      if (data.results[a].starship_class.includes("Starfighter")) {
         starfighter++;
      }
   }
   textSize(20);
   text("De un total de " + total + " de naves de Star Wars.", width / 2, 150);
   text("Solo " + starfighter + " corresponden a naves del tipo Starfighter.", width / 2, 200);
   var promedio = round((starfighter * 100) / total);
   textSize(30);
   text("Este tipo de naves corresponde al " + promedio + "% del total de naves.", width / 2, 270);
}

function draw() {
   background(237, 34, 93);
   fill(255);
   textAlign(CENTER);
}
