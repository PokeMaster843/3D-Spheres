var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
var spheres = [];
var radius = 40;
var viewPoint = [450, 250, -200];
var colors = [[0, 255, 255], [255, 255, 0], [255, 0, 255], [255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 128, 0]];
var up = false;

for(var s = 0; s < 7; s++) {
	
	spheres[s] = new Sphere(radius, [0, 0, 0], [200 + radius * 2 * s, 250, 250 - s * 15], 14, ctx, viewPoint);
	spheres[s].generateSphere();
	
} 

var clicked = false, x = 0, y = 0, px = 0, py = 0;

document.addEventListener("mousedown", function(e) {
	clicked = !clicked;
}, false);

document.addEventListener("mousemove", function(e) {
	
	px = x;
	py = y;
	
	x = e.pageX;
	y = e.pageY;
	
}, false);

var update = setInterval(function() {
	
	/*this.generateColorValue(0, 1);
	this.generateColorValue(0, 2);
	this.generateColorValue(1, 0);
	this.generateColorValue(1, 1);
	this.generateColorValue(2, 0);
	this.generateColorValue(2, 2);
	this.generateColorValue(3, 0);
	this.generateColorValue(4, 1);
	this.generateColorValue(5, 2);
	this.generateColorValue(6, 0);
	this.generateColorValue(6, 1);*/
	
	if(clicked) {
		
		ctx.clearRect(-500, -500, 4000, 4000);
		
		//sphere.rotateSphereX(x - px);
		//sphere.rotateSphereY(y - py);
		//sphere2.rotateSphereX(x - px);
		//sphere2.rotateSphereY(y - py);
		for(var sphere = 0; sphere < 7; sphere++) {
			
			spheres[sphere].rotateSphereX(x - px);
			spheres[sphere].rotateSphereY(y - py);
			
		}
		
	}
	
	//sphere2.drawSphere();
	//sphere.drawSphere();
	for(var i = 0; i < 7; i++) {
		
		spheres[i].drawSphere("rgb(" + colors[i][0] + ", " + colors[i][1] + ", " + colors[i][2] + ")");
		
	}
	
}, 1000/60);

this.generateColorValue = function(colorVal, rgb) {
	
	if(up == true) {
		
		if(colors[colorVal][rgb] == 255) {
			
			up = false;
			colors[colorVal][rgb] -= 1;
			
		}
		
		else {
			colors[colorVal][rgb] += 1;
		}
		
	}
	
	else if(colors[colorVal][rgb] == 0) {
		up = true;
	}
	
	else {
		colors[colorVal][rgb] -= 1;
	}
	
};