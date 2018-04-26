
// Functions
// Get random number beetween two values
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


// Time counting
function countTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    stopwatch.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    
    timeInterval();
}

function timeInterval() {
    tick = setTimeout(countTime, 1000);
}


/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */ 
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


// Obje
// Enemies our player must avoid
var Enemy = function() {
    
    Enemy.sprite = 'images/enemy-bug.png';
    
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

Enemy.prototype.update = function(dt) {
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(Enemy.sprite), this.x, this.y);
};


var player = function() {
    this.sprite = 'images/char-boy.png';
    
    this.x = 200;
    this.y = 300;
    
}

player.prototype.update = function(dt) {
};



var points = 0;
var waterpoints = 0;
var pointsContent = document.querySelector(".points-container .points");
var waterPointsContent = document.querySelector(".points-container .water-points");

player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //ctx.drawImage(Resources.get("images/Gem Orange.png"), this.x, this.y);
    
    player.checkCollision();
    player.getCoin();
    player.checkPoints();
    
    // Checking Player
    if(player.sprite.indexOf("piggis") >= 0) {
        Enemy.sprite = "images/piggis-enemy.png";
        coinSprite = ["images/document.png", "images/document.png", "images/document.png"];
        coin.sprite =  coinSprite[(Math.floor(Math.random()*3))];
    }
    else {
        Enemy.sprite = "images/enemy-bug.png";
        coinSprite = ["images/Gem Orange.png", "images/Gem Green.png", "images/Gem Blue.png"];
    }
    
    player.playerGrow();
    
};

// Check collision
player.prototype.checkCollision = function() {
    
    // Check collision on collumn 1
    if(player.x < 0 && allEnemies[0].x < 0  && player.y === 51 || player.x < 0 && allEnemies[1].x < 0 && player.y === 134 || player.x < 0 && allEnemies[2].x < 0 && player.y === 217) {
        player.resetPosition();
    }
    
    // Check collision on collumn 2
    if(player.x === 99  && allEnemies[0].x > 30 && allEnemies[0].x < 120 && player.y === 51 || player.x === 99 && allEnemies[1].x > 30 && allEnemies[1].x < 120 && player.y === 134 || player.x === 99 && allEnemies[2].x > 30 && allEnemies[2].x < 120 && player.y === 217) {
        player.resetPosition();
    }
    
    // Check collision on collumn 3
    if(player.x === 200  && allEnemies[0].x > 150 && allEnemies[0].x < 280 && player.y === 51 || player.x === 200 && allEnemies[1].x > 150 && allEnemies[1].x < 280 && player.y === 134 || player.x === 200 && allEnemies[2].x > 150 && allEnemies[2].x < 280 && player.y === 217) {
        player.resetPosition();
    }
    
    // Check collision on collumn 4
    if(player.x === 301  && allEnemies[0].x > 250 && allEnemies[0].x < 401 && player.y === 51 || player.x === 301 && allEnemies[1].x > 250 && allEnemies[1].x < 401 && player.y === 134 || player.x === 301 && allEnemies[2].x > 250 && allEnemies[2].x < 401 && player.y === 217) {
        player.resetPosition();
    }
    
    // Check collision on collumn 5
    if(player.x === 400  && allEnemies[0].x > 350 && player.y === 51 || player.x === 400 && allEnemies[1].x > 350 && player.y === 134 || player.x === 400 && allEnemies[2].x > 350 && player.y === 217) {
        player.resetPosition();
    }
    
}

// Check if the Player got Gem
player.prototype.getCoin = function() {
    
    if(coin.x === 15 && coin.y === 115  && player.x === -2 && player.y === 51 || coin.x === 15 && coin.y === 200  && player.x === -2 && player.y === 134 || coin.x === 15 && coin.y === 280  && player.x === -2 && player.y === 217) {
        coin.addPoints();
        coin.resetPosition();
    }
    
    if(coin.x === 115 && coin.y === 115  && player.x === randomIntFromInterval(97,99)  && player.y === 51 || coin.x === 115 && coin.y === 200  && player.x === randomIntFromInterval(97,99) && player.y === 134 || coin.x === 115 && coin.y === 280  && player.x === randomIntFromInterval(97,99) && player.y === 217) {
        coin.addPoints();
        coin.resetPosition();
    }
    
    if(coin.x === 215 && coin.y === 115  && player.x === randomIntFromInterval(198,200) && player.y === 51 || coin.x === 215 && coin.y === 200  && player.x === randomIntFromInterval(198,200) && player.y === 134 || coin.x === 215 && coin.y === 280  && player.x === randomIntFromInterval(198,200) && player.y === 217) {
        coin.addPoints();
        coin.resetPosition();
    }
    
    if(coin.x === 318 && coin.y === 115  && player.x === randomIntFromInterval(299,301) && player.y === 51 || coin.x === 318 && coin.y === 200  && player.x === randomIntFromInterval(299,301) && player.y === 134 || coin.x === 318 && coin.y === 280  && player.x === randomIntFromInterval(299,301) && player.y === 217) {
        coin.addPoints();
        coin.resetPosition();
    }
    
    if(coin.x === 420 && coin.y === 115  && player.x === 400 && player.y === 51 || coin.x === 420 && coin.y === 200  && player.x === 400 && player.y === 134 || coin.x === 420 && coin.y === 280  && player.x === 400 && player.y === 217) {
        coin.addPoints();
        coin.resetPosition();
    }
}

// Reset position of player when collision
player.prototype.resetPosition = function() {
    player.x = 200;
    player.y = 300;
    player.render();
    points = 0;
    pointsContent.textContent = 0;
    pointsContent.classList.add("collision");
    setTimeout(function() {
        pointsContent.classList.remove("collision");
    }, 100);
}


// Check if player Won game
player.prototype.checkPoints = function() {
    if(points > 100 && waterpoints > 9 ) {
        // Show time
        let finalTime = document.querySelector(".stopwatch-final");
        finalTime.textContent = stopwatch.textContent;
        clearTimeout(tick);
        
        // Show Congratulations
        finishContent.classList.remove("hide");
    }
}


// Additional event - for Ogarniamprad.pl - piggis character
player.prototype.playerGrow = function() {
    if(player.sprite.indexOf("piggis") >= 0 ) {
        if (points > 3) {
            player.sprite = "images/piggis-2.png";
            if (points > 5) {
                player.sprite = "images/piggis-3.png";
                if (points > 7) {
                    player.sprite = "images/piggis-4.png";
                }
            }
        }
        if (points === 0) {
            player.sprite = "images/piggis-1.png";
        }
    }
}


// Addded Move of Player
player.prototype.handleInput = function(move) {
    if(move === "up") {
        this.y -= 83;
        
        // Checking if Player is moving on canvas
        if( this.y < -30) {
    
            // Reseting Player position on Win
            points++;
            waterpoints++;
            
            this.x = 200;
            this.y = 300;
            
            pointsContent.textContent = points;
            waterPointsContent.textContent = waterpoints;
            
            
            waterPointsContent.classList.add("point-add");
            setTimeout(function() {
                waterPointsContent.classList.remove("point-add");
            }, 1000);
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



var coinSpriteSelector = 0;
var parameter1 = [15,115,215,318,420];
var parameter2 = [115,200,280];

var finishContent = document.querySelector(".finish");

let stopwatch = document.querySelector(".stopwatch")
let seconds = 0, minutes = 0, hours = 0, t;

var Coin = function() {
    
    shuffle(parameter1);
    shuffle(parameter2);
    this.x = parameter1[0];
    this.y = parameter2[0];
    
    this.sprite = 'images/Gem Orange.png';
    
}

// Give random position of Coin when is collected
Coin.prototype.resetPosition = function() {
    
    shuffle(parameter1);
    shuffle(parameter2);
    coin.x = parameter1[0];
    coin.y = parameter2[0];
    
    coinSprite = ["images/Gem Orange.png", "images/Gem Green.png", "images/Gem Blue.png"]
    
    coin.sprite =  coinSprite[(Math.floor(Math.random()*3))];
    coinSpriteSelector++
    
    if(coinSpriteSelector === 10) {
        coin.sprite = "images/Star.png";
    }
    
    coin.render();
    
}

// Add points for Gems
Coin.prototype.addPoints = function() {
    
    points++;
    if (coin.sprite == "images/Star.png") {
        points = points+99;
    }
    if (coin.sprite == "images/Gem Green.png") {
        points = points+1;
    }
    if (coin.sprite == "images/Gem Blue.png") {
        points = points+2;
    }
    pointsContent.textContent = points;
    
    pointsContent.classList.add("point-add");
    setTimeout(function() {
        pointsContent.classList.remove("point-add");
    }, 300);
}
 
// Render Coin
Coin.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 70, 90);
};

// Instance Objects
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
var coin = new Coin();


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
