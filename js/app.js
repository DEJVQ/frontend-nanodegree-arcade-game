

// Enemies our player must avoid

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images   
    this.sprite = 'images/enemy-bug.png';
    
    x1 = 0;
    x2 = 0;
    x3 = 0;
    y = Math.floor(1+Math.random() * 200);
    var speed = Math.floor(1+Math.random() * 2);
    
    setInterval(function() {
        this.x1 += Math.floor(1+Math.random() * 5);;
        this.x2 += Math.floor(1+Math.random() * 6);;
        this.x3 += Math.floor(1+Math.random() * 7);;
        
        if(this.x1 > 500) {
            this.x1 = -100;
        }
        if(this.x2 > 500) {
            this.x2 = -100;
        }
        if(this.x3 > 500) {
            this.x3 = -100;
        } 
    }, 50);
    
};

//Enemy.prototype.position1 = function() {
//    y = Math.floor(1+Math.random() * 200);
//    var speed = Math.floor(1+Math.random() * 2);
//    setInterval(function() {
//        this.x += speed;
//        
//        if(this.x > 500) {
//            this.x = -100;
//        } 
//    }, 50);
//}
//Enemy.prototype.position2 = function() {
//    y = Math.floor(1+Math.random() * 200);
//    var speed = Math.floor(1+Math.random() * 2);
//    setInterval(function() {
//        this.x += speed;
//        
//        if(this.x > 500) {
//            this.x = -100;
//        } 
//    }, 50);
//}
//Enemy.prototype.position3 = function() {
//    y = Math.floor(1+Math.random() * 200);
//    var speed = Math.floor(1+Math.random() * 2);
//    setInterval(function() {
//        this.x += speed;
//        
//        if(this.x > 500) {
//            this.x = -100;
//        } 
//    }, 50);
//}


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), x1, 60);
    ctx.drawImage(Resources.get(this.sprite), x2, 140);
    ctx.drawImage(Resources.get(this.sprite), x3, 230);
};




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function() {
//    var x =  200;
//    var y = 300;
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
        
        //ctx.restore();
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


//allEnemies[0].position = function() {
//}
//allEnemies[1].position = function() {
//}
//allEnemies[2].position = function() {
//}
//
//allEnemies[0].position();
//allEnemies[1].position2();
//allEnemies[2].position3();
console.log(allEnemies);


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
