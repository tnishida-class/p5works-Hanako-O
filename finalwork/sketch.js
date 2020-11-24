// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
  a = 200;
  b = 200;
  c = 0;
  d = 100;
  e = 100;
  x =  0;
  y = 0;
  vx = 8;
  vy = 8;
  angle = 0;
  f1 = color(0, 0, 255);
  f2 = color(0, 255, 255);
  noStroke();
  for(var g = 200; g > 0; g -= 5){
    fill(lerpColor(f1, f2, g / 250));
    ellipse(200, 200, g, g);
  }
}

function draw(){
  //fill(22, 131, 46);
  //noStroke();
  //ellipse(200, 200, 200, 200);//緑の大きな円
  //fill(255, 0, 0);
  //ellipse(200, 200, 170, 170);//赤の小さな円
  fill(255, 212, 0);
  noStroke();
  star(a, b, angle);
  radial(d, e);
  dot(x, y);
  angle += 0.02;
  x += vx;
  y += vy;
}


function radial(d, e){
	for(var i = 0; i < 360; i += 30){
		var radian = i * PI / 180;
		var d = 200 + sin(radian) * 50;
		var e = 200 + cos(radian) * 50;
    stroke(255, 212, 0);
		line(200, 200, d, e);
	}
}


function dot(x, y){
  for(let i = 0; i < 12; i++){
      const theta = TWO_PI * i / 12;
      const x = 100 + cos(theta) * 50;
      const y = 100 + sin(theta) * 50;
      ellipse(x + 100, y + 100, 5);
      line(x + 100, y + 100, x + 100, y + 100);
  }
}


function star(ca, cb, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    var a = ca + cos(theta) * 10;
    var b = cb + sin(theta) * 10;
    vertex(a, b);
  }
  endShape(CLOSE);
}
