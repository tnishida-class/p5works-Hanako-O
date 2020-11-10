// アメリカ国旗
function setup() {
  createCanvas(520, 260);
  noStroke();
  background(255, 255, 255);
  let i = 0;
  for(i = 0; i < 7; i ++){
   fill(255, 0, 0);
   rect(0, i * 40, 520, 20);
}
   fill(0, 0, 255);
   rect(0, 0, 230, 140);

   star(10, 10, 10, 10)

   function star(cx, cy, r){
  beginShape();    // 点つなぎを始める
  for(let j = 0; j < 5; j++){
    const theta = TWO_PI * j * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}

}
