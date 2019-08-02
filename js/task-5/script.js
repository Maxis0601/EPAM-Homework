let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const CENTER_CANVAS = 400;
const COEF = 20;

const initialArray = [
  {f: function(x){ return x*x}, startX:-20, endX:20, step: 0.3, color: 'coral'},
  {f: function(x){ return -x}, startX:-20, endX:20, step: 0.3, color: 'yellow'},
  {f: function(x){ return Math.cos(x) + -5}, startX:-20, endX:20, step: 0.3, color: 'red'},
  {f: function(x){ return 1/x}, startX:-20, endX:20, step: 0.3, color: 'blue'},
];

ctx.moveTo(0, 400);
ctx.lineTo(800, 400);
ctx.moveTo(400, 0);
ctx.lineTo(400, 800);
ctx.stroke();

function* genX(startX, endX, step) {
  let x = startX;
  yield x;
  while(x < endX) {
    x += step;
    yield x;
  }

}

function genY(f) {
  return function(x){
    return f(x);
  }
}

function draw(array, time) {
  for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array[i].pointers.length-1; j++){
        setTimeout(()=>{
          ctx.beginPath();
          ctx.strokeStyle = array[i].color;
          ctx.moveTo(array[i].pointers[j].x*COEF+CENTER_CANVAS, -array[i].pointers[j].y*COEF+CENTER_CANVAS);
          ctx.lineTo(array[i].pointers[j+1].x*COEF+CENTER_CANVAS, -array[i].pointers[j+1].y*COEF+CENTER_CANVAS);
          ctx.stroke();
          ctx.closePath();
        }, j*time)
      }
  }  
}

function generateGraphics(array) {

  const arrayGlobal = [];

  for(let i = 0; i < array.length; i++){
    let getX = genX(array[i].startX, array[i].endX, array[i].step);
    let getY = genY(array[i].f);
    
    const arrayLocal = [];
    const obj = [];
    while(true){
      let x = getX.next().value;
      if(x == undefined) break;
      let y = getY(x);
      arrayLocal.push({x, y});
    }
    obj.pointers = arrayLocal;
    obj.color = array[i].color;

    arrayGlobal.push(obj);

  }
  return arrayGlobal;
}

draw(generateGraphics(initialArray), 100);