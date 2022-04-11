window.addEventListener('load', function(){
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    class userInput{
        constructor(){
            this.keys = [];
            window.addEventListener('keydown', e =>{
                if(e.key === 'ArrowUp' || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight" && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key);
                }
            });
            window.addEventListener('keyup', e =>{
                if(e.key === 'ArrowUp' || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight"){
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
            });
        }
    }
    class Player{
        constructor(gameWidth, gameHeight){
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 200;
            this.height = 200;
            this.x = 0;
            this.y = this.gameHeight - this.height;
            this.image = document.getElementById('player');
            this.speed = 0;
            
        }
        draw(context){    
            context.drawImage(this.image,  this.x, this.y, this.width, this.height); 
        }
        update(input){
            this.x += this.speed;
            if(input.keys.indexOf('ArrowRight') > -1){
                this.speed = 5;
            }
            else if(input.keys.indexOf('ArrowLeft') > -1){
                this.speed = -5;
            }
            else{
                this.speed = 0;
            }
            if(this.x < 0){
                this.x = 0;
            }
            else if(this.x > this.gameWidth - this.width){
                this.x = this.gameWidth - this.width;
            }
        }
    }
    class Background{
        constructor(gameWidth, gameHeight){
            this.gameWidth = gameWidth; 
            this.gameHeight = gameHeight;
            this.width = 2400;
            this.height = 7200;
            this.x = 0;
            this.y = 0;
            this.image = document.getElementById('background');
        }
        draw(context){
            context.drawImage(this.image, this.x, this.y);
        }
    }
    const input = new userInput();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);

    function animation(){
        ctx.clearRect(0, 0, canvas.width,canvas.height);
        background.draw(ctx);
        player.draw(ctx);
        player.update(input);
        requestAnimationFrame(animation);
    }
    animation();
});