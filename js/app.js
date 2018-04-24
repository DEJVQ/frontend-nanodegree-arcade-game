

// Enemies our player must avoid

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images   
    this.sprite = 'images/enemy-bug.png';
    
    var self = this;
    
    y = Math.floor(1+Math.random() * 200);
    var speed = Math.floor(1+Math.random() * 2);
    
    setInterval(function() {
        self.x += Math.floor(1+Math.random() * 10);;
        
        if(self.x > 500) {
            self.x = -100;
        }
    }, 50);
};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
//    /console.log(this.x);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
//    ctx.drawImage(Resources.get(this.sprite), this.x2, 140);
//    ctx.drawImage(Resources.get(this.sprite), this.x3, 230);
};




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function() {
    this.sprite = 'images/char-boy.png';
    
    this.x = 200;
    this.y = 300;
}

player.prototype.update = function(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
};



var points = 0;
var pointsContent = document.querySelector(".points");

player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    // Check collision
    
    
    //  console.log(allEnemies[0].x);
    console.log(allEnemies[2].x);
    
//    console.log(allEnemies[1].x);
//    
//    console.log(allEnemies[2].x);
    
    if(player.x < 0 && allEnemies[0].x < 0  && player.y === 51 || player.x < 0 && allEnemies[1].x < 0 && player.y === 134 || player.x < 0 && allEnemies[2].x < 0 && player.y === 217) {
        player.x = 200;
        player.y = 300;
        
        player.render();
        points = 0;
        pointsContent.textContent = 0;
    }
    if(player.x === 99  && allEnemies[0].x > 30 && allEnemies[0].x < 120 && player.y === 51 || player.x === 99 && allEnemies[1].x > 30 && allEnemies[1].x < 120 && player.y === 134 || player.x === 99 && allEnemies[2].x > 30 && allEnemies[2].x < 120 && player.y === 217) {
        player.x = 200;
        player.y = 300;
        
        player.render();
        points = 0;
        pointsContent.textContent = 0;
    }
    if(player.x === 200  && allEnemies[0].x > 150 && allEnemies[0].x < 280 && player.y === 51 || player.x === 200 && allEnemies[1].x > 150 && allEnemies[1].x < 280 && player.y === 134 || player.x === 200 && allEnemies[2].x > 150 && allEnemies[2].x < 280 && player.y === 217) {
        player.x = 200;
        player.y = 300;
        
        player.render();
        points = 0;
        pointsContent.textContent = 0;
    }
    if(player.x === 301  && allEnemies[0].x > 250 && allEnemies[0].x < 401 && player.y === 51 || player.x === 301 && allEnemies[1].x > 250 && allEnemies[1].x < 401 && player.y === 134 || player.x === 301 && allEnemies[2].x > 250 && allEnemies[2].x < 401 && player.y === 217) {
        player.x = 200;
        player.y = 300;
        
        player.render();
        points = 0;
        pointsContent.textContent = 0;
    }
    if(player.x === 400  && allEnemies[0].x > 350 && player.y === 51 || player.x === 400 && allEnemies[1].x > 350 && player.y === 134 || player.x === 400 && allEnemies[2].x > 350 && player.y === 217) {
        player.x = 200;
        player.y = 300;
        
        player.render();
        points = 0;
        pointsContent.textContent = 0;
    }
};

// Addded Move of Player
player.prototype.handleInput = function(move) {
    if(move === "up") {
        this.y -= 83;
        
        // Checking if Player is moving on canvas
        if( this.y < -30) {
            

            // Reseting Player position on Win
            points++;
            this.x = 200;
            this.y = 300;
            
            pointsContent.textContent = points;
            
            
            allEnemies[1].speed = Math.floor(1+Math.random() * 2);
            alert(speed);
            
        }
        
        player.render();
        
    }
    if(move === "right") {
        this.x += 101;
        
        // Checking if Player is moving on canvas
        if( this.x > 400) {
            this.x = 400;
        }
        
        player.render();
    }
    if(move === "down") {
        this.y += 83;
        
        // Checking if Player is moving on canvas
        if( this.y > 380) {
            this.y = 383;
        }
        
        player.render();
    }
    if(move === "left") {
        this.x -= 101;
        
        // Checking if Player is moving on canvas
        if( this.x < 0) {
            this.x = -2;
        }
        
        player.render();
    }
    
    
};





// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
allEnemies[0] = new Enemy();
allEnemies[1] = new Enemy();
allEnemies[2] = new Enemy();



allEnemies[0].x = 0;
allEnemies[1].x = -250;
allEnemies[2].x = -360;

allEnemies[0].y = 60;
allEnemies[1].y = 145;
allEnemies[2].y = 230;

var player = new player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
