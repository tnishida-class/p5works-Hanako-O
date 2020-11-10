// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love Hanshin Tigers",//吹き出しのテキスト
          255, 212, 0,//吹き出しの色
          0, 0, 120, 30);//吹き出しの位置
  //crossmark(20, 30, 30, 45)//吹き出しのしっぽ
  fill(255, 212, 0);
  triangle(20, 30, 30, 40, 40, 30);
}

function balloon(t, a, b, c, d, e, f, g){
  let w = textWidth(t);
  let h = textAscent() + textDescent();//文字の高さ
  let p = 2;//余白の大きさ
  fill(a, b, c);
  rect(d, e, f, g);
  fill(255);
  text(t, p, h + p);
}

//function crossmark(x1, y1, x2, y2){
  //line(x1, y1, x2, y2);
  //line(x2 + 10, y1, x1 + 10, y2);
//}
