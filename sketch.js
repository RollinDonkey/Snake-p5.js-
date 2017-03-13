var snake;
var food;
var total = 0;

function setup() {
    createCanvas(600, 600);
    snake = new Snake();
    frameRate(10);
    pickLocation();
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
    } else if (keyCode === RIGHT_ARROW) {
        snake.move(1, 0);
    } else if (keyCode === DOWN_ARROW) {
        snake.move(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        snake.move(-1, 0);
    }
}
