function Snake() {


    this.x = 0;
    this.y = 0;

    this.xspeed = 1;
    this.yspeed = 0;

    this.scl = 20;
    this.total = 0;
    this.tail = [];

    this.move = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }
    this.update = function() {

        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x += this.xspeed * this.scl;
        this.y += this.yspeed * this.scl;

        this.x = constrain(this.x, 0, width - this.scl);
        this.y = constrain(this.y, 0, height - this.scl);
    }
    this.death = function() {
        for (var i = 0; i < this.tail.length; i++) {
            var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
            if (d < 1) {
                this.total = 0;
                this.tail = [];
            }
        }
    }

    this.show = function() {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, this.scl, this.scl)
        }
        rect(this.x, this.y, this.scl, this.scl);
    }
    this.eat = function(food) {
        var d = dist(this.x, this.y, food.x, food.y)
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }
}
