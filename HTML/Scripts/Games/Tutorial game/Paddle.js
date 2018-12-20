export default class Paddle {

    constructor(gameW, gameH) {
        this.width = 76;
        this.height = 10;
        this.position = {
            x: gameW / 2 - this.width / 2,
            y: gameH - this.height - 10
        };
    }
    
    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}