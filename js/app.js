

// Enemies our player must avoid

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images   
    this.sprite = 'images/enemy-bug.png';
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
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function() {
//    var x =  200;
//    var y = 300;
    this.sprite = 'images/char-boy.png';
}

player.prototype.update = function(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    
};



var x = 200;
var y = 300;
var points = 0;
var pointsContent = document.querySelector(".points");

player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), x, y);
};

// Addded Move of Player
player.prototype.handleInput = function(move) {
    if(move === "up") {
        y -= 83;
        console.log(y);
        // Checking if Player is moving on canvas
        if( y < -30) {
            
            points++;
            x = 200;
            y = 300;
            
            pointsContent.textContent = points;
            
        }
        
        player.render();
        
        ctx.restore();
    }
    if(move === "right") {
        x += 101;
        
        // Checking if Player is moving on canvas
        if( x > 400) {
            x = 400;
        }
        
        player.render();
    }
    if(move === "down") {
        y += 83;
        
        // Checking if Player is moving on canvas
        if( y > 380) {
            y = 383;
        }
        
        player.render();
    }
    if(move === "left") {
        x -= 101;
        
        // Checking if Player is moving on canvas
        if( x < 0) {
            x = -2;
        }
        
        player.render();
    }
    
};





// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = new Array();
allEnemies[0] = new Enemy();
allEnemies[1] = new Enemy();
allEnemies[2] = new Enemy();


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
