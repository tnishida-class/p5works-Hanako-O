// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  t = "I love Hanshin Tigers"
  a = 255
  b = 212
  c = 0
  d = 50
  e = 50
  balloon(t, a, b, c, d, e);
  fill(255, 212, 0);
  noStroke();
  triangle(d + 10, e, d + 20, e, d + 15, e + 15);
}

function balloon(t, a, b, c, d, e){
  let w = textWidth(t);
  let h = textAscent(t) + textDescent(t);//文字の高さ
  let p = 2;//余白の大きさ
  fill(a, b, c);
  noStroke();
  rect(d, e - 15, w, h + p * 2);
  fill(0);
  text(t, d, e);
}

//function crossmark(x1, y1, x2, y2){
  //line(x1, y1, x2, y2);
  //line(x2 + 10, y1, x1 + 10, y2);
//}
