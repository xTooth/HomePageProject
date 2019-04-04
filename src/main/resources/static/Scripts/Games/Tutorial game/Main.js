import Paddle from './Paddle.js';

let canvas = document.getElementById("1stGame");
let ctx = canvas.getContext("2d");

const gameH = 400;
const gameW = 400;

ctx.clearRect(0,0,gameW,gameH);

let paddle = new Paddle(gameW,gameH);

paddle.draw(ctx);

