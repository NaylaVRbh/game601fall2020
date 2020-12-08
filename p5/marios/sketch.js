let supermario = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50, 150, 200);
	noStroke();

	for (let i = 0; i < 20; i += 1){
		supermario[i] = new Mario(random(width), random(height));
	}
}

function draw() {
	background(50, 150, 200);

	for (let i = 0; i < supermario.length; i += 1) {
		supermario[i].update();
	}
}

function Mario(initialX, initialY) {
	this.x = initialX;
	this.y = initialY;
	this.velX = random(-3, 3);
	this.velY = random(-3, 3);
	this.update = function(){
		this.x += this.velX;
		this.y += this.velY;
		if (this.x < 0 || this.x > width) {
			this.velX *= -1;
		}
		if (this.y < 0 || this.y > height) {
			this.velY *= -1;
		}
			fill(206, 32, 41)
	rect(this.x, this.y, 20, 20);
	fill(206, 32, 41)
	rect(this.x-20, this.y, 20, 20);
	fill(206, 32, 41)
	rect(this.x-40, this.y, 20, 20);
	fill(206, 32, 41)
	rect(this.x-60, this.y, 20, 20);
	fill(206, 32, 41)
	rect(this.x-80, this.y, 20, 20);
	fill(245, 245, 220)
	rect(this.x-(-60), this.y, 20, 20);
	fill(245, 245, 220)
	rect(this.x-(-80), this.y, 20, 20);
	fill(245, 245, 220)
	rect(this.x-(-100), this.y, 20, 20);
	fill(245, 245, 220)
	rect(this.x-(-100), this.y+20, 20, 20);
	fill(245, 245, 220)
	rect(this.x-(-80), this.y+20, 20, 20);
	fill(206, 32, 41)
	rect(this.x-(-60), this.y+20, 20, 20);
	fill(206, 32, 41)
	rect(this.x-(-40), this.y+20, 20, 20);
	fill(206, 32, 41)
	rect(this.x-(-20), this.y+20, 20, 20);
	fill(206, 32, 41)
	rect(this.x, this.y+20, 20, 20);
	fill(206, 32, 41)
	rect(this.x-20, this.y+20, 20, 20);
	fill(206, 32, 41)
	rect(this.x-40, this.y+20, 20, 20);
	fill(206, 32, 41)
	rect(this.x-60, this.y+20, 20, 20);
	fill(206, 32, 41)
	rect(this.x-80, this.y+20, 20, 20);
	fill(206, 32, 41)
	rect(this.x-100, this.y+20, 20, 20);
	fill(150, 75, 0)
	rect(this.x-100, this.y+40, 20, 20);
	fill(150, 75, 0)
	rect(this.x-80, this.y+40, 20, 20);
	fill(150, 75, 0)
	rect(this.x-60, this.y+40, 20, 20);
	fill(245, 245, 220)
	rect(this.x-40, this.y+40, 20, 20);
	fill(245, 245, 220)
	rect(this.x-20, this.y+40, 20, 20);
	fill(0)
	rect(this.x, this.y+40, 20, 20);
	fill(245, 245, 220)
	rect(this.x+20, this.y+40, 20, 20);
	fill(206, 32, 41)
	rect(this.x+60, this.y+40, 20, 20);
	fill(206, 32, 41)
	rect(this.x+80, this.y+40, 20, 20);
	fill(206, 32, 41)
	rect(this.x+100, this.y+40, 20, 20);
	fill(206, 32, 41)
	rect(this.x+100, this.y+60, 20, 20);
	fill(206, 32, 41)
	rect(this.x+80, this.y+60, 20, 20);
	fill(245, 245, 220)
	rect(this.x+60, this.y+60, 20, 20);
	fill(245, 245, 220)
	rect(this.x+40, this.y+60, 20, 20);
	fill(245, 245, 220)
	rect(this.x+20, this.y+60, 20, 20);
	fill(0)
	rect(this.x, this.y+60, 20, 20);
	fill(245, 245, 220)
	rect(this.x-20, this.y+60, 20, 20);
	fill(245, 245, 220)
	rect(this.x-40, this.y+60, 20, 20);
	fill(150, 75, 0)
	rect(this.x-60, this.y+60, 20, 20);
	fill(245, 245, 220)
	rect(this.x-80, this.y+60, 20, 20);
	fill(150, 75, 0)
	rect(this.x-100, this.y+60, 20, 20);
	fill(150, 75, 0)
	rect(this.x-100, this.y+80, 20, 20);
	fill(245, 245, 220)
	rect(this.x-80, this.y+80, 20, 20);
	fill(150, 75, 0)
	rect(this.x-60, this.y+80, 20, 20);
	fill(245, 245, 220)
	rect(this.x-40, this.y+80, 20, 20);
	fill(245, 245, 220)
	rect(this.x-20, this.y+80, 20, 20);
	fill(245, 245, 220)
	rect(this.x, this.y+80, 20, 20);
	fill(0)
	rect(this.x+20, this.y+80, 20, 20);
	fill(245, 245, 220)
	rect(this.x+40, this.y+80, 20, 20);
	fill(245, 245, 220)
	rect(this.x+60, this.y+80, 20, 20);
	fill(206, 32, 41)
	rect(this.x+80, this.y+80, 20, 20);
	fill(206, 32, 41)
	rect(this.x+100, this.y+80, 20, 20);
	fill(206, 32, 41)
	rect(this.x+80, this.y+100, 20, 20);
	fill(0)
	rect(this.x+60, this.y+100, 20, 20);
	fill(0)
	rect(this.x+40, this.y+100, 20, 20);
	fill(0)
	rect(this.x+20, this.y+100, 20, 20);
	fill(0)
	rect(this.x, this.y+100, 20, 20);
	fill(245, 245, 220)
	rect(this.x-20, this.y+100, 20, 20);
	fill(245, 245, 220)
	rect(this.x-40, this.y+100, 20, 20);
	fill(245, 245, 220)
	rect(this.x-60, this.y+100, 20, 20);
	fill(150, 75, 0)
	rect(this.x-80, this.y+100, 20, 20);
	fill(245, 245, 220)
	rect(this.x-60, this.y+120, 20, 20);
	fill(245, 245, 220)
	rect(this.x-40, this.y+120, 20, 20);
	fill(245, 245, 220)
	rect(this.x-20, this.y+120, 20, 20);
	fill(245, 245, 220)
	rect(this.x, this.y+120, 20, 20);
	fill(245, 245, 220)
	rect(this.x+20, this.y+120, 20, 20);
	fill(245, 245, 220)
	rect(this.x+40, this.y+120, 20, 20);
	fill(206, 32, 41)
	rect(this.x+60, this.y+120, 20, 20);
	fill(206, 32, 41)
	rect(this.x+80, this.y+120, 20, 20);
	fill(206, 32, 41)
	rect(this.x+60, this.y+140, 20, 20);
	fill(206, 32, 41)
	rect(this.x+40, this.y+140, 20, 20);
	fill(0, 0, 255)
	rect(this.x+20, this.y+140, 20, 20);
	fill(206, 32, 41)
	rect(this.x, this.y+140, 20, 20);
	fill(206, 32, 41)
	rect(this.x-20, this.y+140, 20, 20);
	fill(206, 32, 41)
	rect(this.x-40, this.y+140, 20, 20);
	fill(0, 0, 255)
	rect(this.x-60, this.y+140, 20, 20);
	fill(206, 32, 41)
	rect(this.x-80, this.y+140, 20, 20);
	fill(206, 32, 41)
	rect(this.x-100, this.y+140, 20, 20);
	fill(206, 32, 41)
	rect(this.x-120, this.y+140, 20, 20);
	fill(206, 32, 41)
	rect(this.x-140, this.y+140, 20, 20);
	fill(245, 245, 220)
	rect(this.x-160, this.y+140, 20, 20);
	fill(245, 245, 220)
	rect(this.x-180, this.y+140, 20, 20);
	fill(245, 245, 220)
	rect(this.x-180, this.y+160, 20, 20);
	fill(245, 245, 220)
	rect(this.x-160, this.y+160, 20, 20);
	fill(206, 32, 41)
	rect(this.x-140, this.y+160, 20, 20);
	fill(206, 32, 41)
	rect(this.x-120, this.y+160, 20, 20);
	fill(206, 32, 41)
	rect(this.x-100, this.y+160, 20, 20);
	fill(206, 32, 41)
	rect(this.x-80, this.y+160, 20, 20);
	fill(206, 32, 41)
	rect(this.x-60, this.y+160, 20, 20);
	fill(0, 0, 255)
	rect(this.x-40, this.y+160, 20, 20);
	fill(206, 32, 41)
	rect(this.x-20, this.y+160, 20, 20);
	fill(206, 32, 41)
	rect(this.x, this.y+160, 20, 20);
	fill(206, 32, 41)
	rect(this.x+20, this.y+160, 20, 20);
	fill(0, 0, 255)
	rect(this.x+40, this.y+160, 20, 20);
	fill(150, 75, 0)
	rect(this.x+120, this.y+160, 20, 20);
	fill(150, 75, 0)
	rect(this.x+120, this.y+180, 20, 20);
	fill(150, 75, 0)
	rect(this.x+100, this.y+180, 20, 20);
	fill(0, 0, 255)
	rect(this.x+80, this.y+180, 20, 20);
	fill(0, 0, 255)
	rect(this.x+60, this.y+180, 20, 20);
	fill(255, 255, 0)
	rect(this.x+40, this.y+180, 20, 20);
	fill(0, 0, 255)
	rect(this.x+20, this.y+180, 20, 20);
	fill(0, 0, 255)
	rect(this.x, this.y+180, 20, 20);
	fill(0, 0, 255)
	rect(this.x-20, this.y+180, 20, 20);
	fill(0, 0, 255)
	rect(this.x-40, this.y+180, 20, 20);
	fill(206, 32, 41)
	rect(this.x-60, this.y+180, 20, 20);
	fill(206, 32, 41)
	rect(this.x-80, this.y+180, 20, 20);
	fill(206, 32, 41)
	rect(this.x-100, this.y+180, 20, 20);
	fill(245, 245, 220)
	rect(this.x-160, this.y+180, 20, 20);
	fill(0, 0, 255)
	rect(this.x-80, this.y+200, 20, 20);
	fill(0, 0, 255)
	rect(this.x-60, this.y+200, 20, 20);
	fill(0, 0, 255)
	rect(this.x-40, this.y+200, 20, 20);
	fill(0, 0, 255)
	rect(this.x-20, this.y+200, 20, 20);
	fill(0, 0, 255)
	rect(this.x, this.y+200, 20, 20);
	fill(0, 0, 255)
	rect(this.x+20, this.y+200, 20, 20);
	fill(0, 0, 255)
	rect(this.x+40, this.y+200, 20, 20);
	fill(0, 0, 255)
	rect(this.x+60, this.y+200, 20, 20);
	fill(0, 0, 255)
	rect(this.x+80, this.y+200, 20, 20);
	fill(150, 75, 0)
	rect(this.x+100, this.y+200, 20, 20);
	fill(150, 75, 0)
	rect(this.x+120, this.y+200, 20, 20);
	fill(150, 75, 0)
	rect(this.x+120, this.y+220, 20, 20);
	fill(150, 75, 0)
	rect(this.x+100, this.y+220, 20, 20);
	fill(0, 0, 255)
	rect(this.x+80, this.y+220, 20, 20);
	fill(0, 0, 255)
	rect(this.x+60, this.y+220, 20, 20);
	fill(0, 0, 255)
	rect(this.x+40, this.y+220, 20, 20);
	fill(0, 0, 255)
	rect(this.x+20, this.y+220, 20, 20);
	fill(0, 0, 255)
	rect(this.x, this.y+220, 20, 20);
	fill(255, 255, 0)
	rect(this.x-20, this.y+220, 20, 20);
	fill(0, 0, 255)
	rect(this.x-40, this.y+220, 20, 20);
	fill(0, 0, 255)
	rect(this.x-40, this.y+220, 20, 20);
	fill(0, 0, 255)
	rect(this.x-60, this.y+220, 20, 20);
	fill(0, 0, 255)
	rect(this.x-80, this.y+220, 20, 20);
	fill(150, 75, 0)
	rect(this.x-120, this.y+240, 20, 20);
	fill(150, 75, 0)
	rect(this.x-100, this.y+240, 20, 20);
	fill(0, 0, 255)
	rect(this.x-80, this.y+240, 20, 20);
	fill(0, 0, 255)
	rect(this.x-60, this.y+240, 20, 20);
	fill(0, 0, 255)
	rect(this.x-40, this.y+240, 20, 20);
	fill(0, 0, 255)
	rect(this.x-20, this.y+240, 20, 20);
	fill(0, 0, 255)
	rect(this.x, this.y+240, 20, 20);
	fill(0, 0, 255)
	rect(this.x+20, this.y+240, 20, 20);
	fill(0, 0, 255)
	rect(this.x+40, this.y+240, 20, 20);
	fill(0, 0, 255)
	rect(this.x+60, this.y+240, 20, 20);
	fill(0, 0, 255)
	rect(this.x+80, this.y+240, 20, 20);
	fill(150, 75, 0)
	rect(this.x+100, this.y+240, 20, 20);
	fill(150, 75, 0)
	rect(this.x+120, this.y+240, 20, 20);
	fill(0, 0, 255)
	rect(this.x+20, this.y+260, 20, 20);
	fill(0, 0, 255)
	rect(this.x, this.y+260, 20, 20);
	fill(0, 0, 255)
	rect(this.x-20, this.y+260, 20, 20);
	fill(0, 0, 255)
	rect(this.x-40, this.y+260, 20, 20);
	fill(0, 0, 255)
	rect(this.x-60, this.y+260, 20, 20);
	fill(0, 0, 255)
	rect(this.x-80, this.y+260, 20, 20);
	fill(150, 75, 0)
	rect(this.x-100, this.y+260, 20, 20);
	fill(150, 75, 0)
	rect(this.x-120, this.y+260, 20, 20);
	fill(150, 75, 0)
	rect(this.x-140, this.y+260, 20, 20);
	fill(150, 75, 0)
	rect(this.x-140, this.y+280, 20, 20);
	fill(150, 75, 0)
	rect(this.x-120, this.y+280, 20, 20);
	}
}
