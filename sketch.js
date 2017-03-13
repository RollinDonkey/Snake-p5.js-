var snake;
var food;
var total = 0;
var keyArrey = [];
var demo;

function setup() {
    createCanvas(600, 600);
    snake = new Snake();
    frameRate(10);
    pickLocation();
    demo = select('#demo');
}

function draw() {
    background(51);
    snake.death();
    snake.update();
    snake.show();

    if (snake.eat(food)) {
        pickLocation();
    }

    fill(255, 0, 0);
    rect(food.x, food.y, 20, 20);
}

function pickLocation() {
    var cols = floor(width / 20);
    var rows = floor(height / 20);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(20);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.move(0, -1);
        keyArrey.push(UP_ARROW);
    } else if (keyCode === RIGHT_ARROW) {
        snake.move(1, 0);
        keyArrey.push(RIGHT_ARROW);
    } else if (keyCode === DOWN_ARROW) {
        snake.move(0, 1);
        keyArrey.push(DOWN_ARROW);
    } else if (keyCode === LEFT_ARROW) {
        snake.move(-1, 0);
        keyArrey.push(LEFT_ARROW);
    }
}
