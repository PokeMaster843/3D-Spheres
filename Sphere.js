/* These are some equations ta generate 
* x[n] = r * cos(2*pi*n/N + theta) + x_centre
* y[n] = r * sin(2*pi*n/N + theta) + y_centre
* Here are the Cartesian (x, y, z) ta Sphericaa (r, theta, phi) equations
* r = sqrt(x^2 + y^2 + z^2)
* theta = arctan(y/x)
* pha = arctan(sqrt(x^2 + y^2)/z)
* textureX = theta/(2*pi)
* textureY = phi/pi
*/

/* Here are some equations for perspective
 * 
 * perspectiveX = ((eyeZ * (actualX - eyeX)) / (eyeZ + actualZ)) + eyeX
 * 
 * perspectiveY = ((eyeZ * (actualY - eyeY)) / (eyeZ + actualZ)) + eyeY */


var Sphere = function(radius, lightSourceCoords, center, sides, ctx, viewPoint) {
	
	var nodes = [];
	var r = radius;
	var s = sides;
	var generated = false;
	var tX = -center[0];
	var tY = -center[1];
	var tZ = -center[2];
	var edges = [];
	// (viewPoint[2] * (currentNode0[0] - viewPoint[0])) / (viewPoint[2] + currentNode0[2]) + viewPoint[0]
	
	this.drawSphere = function(color) {
		
		ctx.beginPath();
		
		for (var e = 0; e < edges.length; e++) {
			
			var n0 = edges[e][0];
			var n1 = edges[e][1];
			var currentNode0 = nodes[n0];
			var currentNode1 = nodes[n1];
			//var cNode0X = 100 * (currentNode0[0] / currentNode0[2]);
			//var cNode0Y = 100 * (currentNode0[1] / currentNode0[2]);
			//var cNode1X = 100 * (currentNode1[0] / currentNode1[2]);
			//var cNode1Y = 100 * (currentNode1[1] / currentNode1[2]);
			
			ctx.moveTo(currentNode0[0], currentNode0[1]);
			ctx.lineTo(currentNode1[0], currentNode1[1]);
			ctx.strokeStyle = color;
			ctx.stroke();
				    
		}
		
		
	}
	
	this.generateSphere = function() {
		
		if(generated == false) {
			
			for(var a = 0; a < s; a++) {
				
				nodes[a] = [r * Math.cos(2 * Math.PI * a / s) + center[0], r * Math.sin(2 * Math.PI * a / s) + center[1], center[2]];
				edges[a] = [a, a + 1];
				
				if(a == s) {
					edges[a] = [a, 0];
				}
			
			}
			
			for(var b = 0; b < s; b++) {
				
				nodes[b + s] = [r * Math.cos(2 * Math.PI * b / s) + center[0], r * Math.sin(2 * Math.PI * b / s) + center[1], center[2]];
				this.rotateSphereNodeX(90, nodes[b + s]);
				edges[b + s] = [b + s, b + s + 1];
				
				if(edges[b + s][1] > 2 * s - 1) {
					edges[b + s] = [b + s, s];
				}
				
			}
			
			for(var c = 0; c < s; c++) {	
				
				nodes[c + 2 * s] = [(nodes[1][0] - nodes[6][0]) / 2  * Math.cos(2 * Math.PI * c / s) + center[0], (nodes[1][0] - nodes[6][0]) / 2 * Math.sin(2 * Math.PI * c / s) + nodes[1][1], center[2]];
				this.rotateSphereNodeXtranlations(90, nodes[c + 2 * s], -nodes[1][1], -center[2]);
				edges[c + 2 * s] = [c + 2 * s, c + 2 * s + 1];
				
				if(edges[c + 2 * s][1]  > 3 * s - 1) {
					edges[c + 2 * s] = [c + 2 * s, 2 * s];
				}
				
			}
			
			for(var d = 0; d < s; d++) {
			
				nodes[d + 3 * s] = [(nodes[2][0] - nodes[5][0]) / 2  * Math.cos(2 * Math.PI * d / s) + center[0], (nodes[2][0] - nodes[5][0]) / 2 * Math.sin(2 * Math.PI * d / s) + nodes[2][1], center[2]];
				this.rotateSphereNodeXtranlations(90, nodes[d + 3 * s], -nodes[2][1], -center[2]);
				edges[d + 3 * s] = [d + 3 * s, d + 3 * s + 1];
				
				if(edges[d + 3 * s][1]  > 4 * s - 1) {
					edges[d + 3 * s] = [d + 3 * s, 3 * s];
				}
				
			}

			for(var e = 0; e < s; e++) {
			
				nodes[e + 4 * s] = [(nodes[13][0] - nodes[8][0]) / 2  * Math.cos(2 * Math.PI * e / s) + center[0], (nodes[13][0] - nodes[8][0]) / 2 * Math.sin(2 * Math.PI * e / s) + nodes[13][1], center[2]];
				this.rotateSphereNodeXtranlations(90, nodes[e + 4 * s], -nodes[13][1], -center[2]);
				edges[e + 4 * s] = [e + 4 * s, e + 4 * s + 1];
				
				if(edges[e + 4 * s][1]  > 5 * s - 1) {
					edges[e + 4 * s] = [e + 4 * s, 4 * s];
				}
				
			}
			
			for(var f = 0; f < s; f++) {
			
				nodes[f + 5 * s] = [(nodes[12][0] - nodes[9][0]) / 2  * Math.cos(2 * Math.PI * f / s) + center[0], (nodes[12][0] - nodes[9][0]) / 2 * Math.sin(2 * Math.PI * f / s) + nodes[12][1], center[2]];
				this.rotateSphereNodeXtranlations(90, nodes[f + 5 * s], -nodes[12][1], -center[2]);
				edges[f + 5 * s] = [f + 5 * s, f + 5 * s + 1];
				
				if(edges[f + 5 * s][1]  > 6 * s - 1) {
					edges[f + 5 * s] = [f + 5 * s, 5 * s];
				}
				
			}

			for(var g = 0; g < s; g++) {
				
				nodes[g + 6 * s] = [r * Math.cos(2 * Math.PI * g / s) + center[0], r * Math.sin(2 * Math.PI * g / s) + center[1], center[2]];
				this.rotateSphereNodeY(90, nodes[g + 6 * s]);
				edges[g + 6 * s] = [g +  6 * s, g + 6 * s + 1];
				
				if(edges[g + 6 * s][1]  > 7 * s - 1) {
					edges[g + 6 * s] = [g + 6 * s, 6 * s];
				}
				
			}

			for(var h = 0; h < s; h++) {
			
				nodes[h + 7 * s] = [r * Math.cos(2 * Math.PI * h / s) + center[0], r * Math.sin(2 * Math.PI * h / s) + center[1], center[2]];
				this.rotateSphereNodeY(30, nodes[h + 7 * s]);
				edges[h + 7 * s] = [h + 7 * s, h + 7 * s + 1];
				
				if(edges[h + 7 * s][1] > 8 * s - 1) {
					edges[h + 7 * s] = [h + 7 * s, 7 * s];
				}
				
			}
			
			for(var i = 0; i < s; i++) {
			
				nodes[i + 8 * s] = [r * Math.cos(2 * Math.PI * i / s) + center[0], r * Math.sin(2 * Math.PI * i / s) + center[1], center[2]];
				this.rotateSphereNodeY(60, nodes[i + 8 * s]);
				edges[i + 8 * s] = [i + 8 * s, i + 8 * s + 1];
				
				if(edges[i + 8 * s][1] > 9 * s - 1) {
					edges[i + 8 * s] = [i + 8 * s, 8 * s];
				}
				
			}

			for(var j = 0; j < s; j++) {
			
				nodes[j + 9 * s] = [r * Math.cos(2 * Math.PI * j / s) + center[0], r * Math.sin(2 * Math.PI * j / s) + center[1], center[2]];
				this.rotateSphereNodeY(120, nodes[j + 9 * s]);
				edges[j + 9 * s] = [j + 9 * s, j + 9 * s + 1];
				
				if(edges[j + 9 * s][1] > 10 * s - 1) {
					edges[j + 9 * s] = [j + 9 * s, 9 * s];
				}
				
			}

			for(var k = 0; k < s; k++) {
			
				nodes[k + 10 * s] = [r * Math.cos(2 * Math.PI * k / s) + center[0], r * Math.sin(2 * Math.PI * k / s) + center[1], center[2]];
				this.rotateSphereNodeY(150, nodes[k + 10 * s]);
				edges[k + 10 * s] = [k + 10 * s, k + 10 * s + 1];
				
				if(edges[k + 10 * s][1] > 11 * s - 1) {
					edges[k + 10 * s] = [k + 10 * s, 10 * s];
				}
				
			}

			for(var l = 0; l < s; l++) {
			
				nodes[l + 11 * s] = [r * Math.cos(2 * Math.PI * l / s) + center[0], r * Math.sin(2 * Math.PI * l / s) + center[1], center[2]];
				this.rotateSphereNodeY(15, nodes[l + 11 * s]);
				edges[l + 11 * s] = [l + 11 * s, l + 11 * s + 1];
				
				if(edges[l + 11 * s][1] > 12 * s - 1) {
					edges[l + 11 * s] = [l + 11 * s, 11 * s];
				}
				
			}

			for(var m = 0; m < s; m++) {
			
				nodes[m + 12 * s] = [r * Math.cos(2 * Math.PI * m / s) + center[0], r * Math.sin(2 * Math.PI * m / s) + center[1], center[2]];
				this.rotateSphereNodeY(45, nodes[m + 12 * s]);
				edges[m + 12 * s] = [m + 12 * s, m + 12 * s + 1];
				
				if(edges[m + 12 * s][1] > 13 * s - 1) {
					edges[m + 12 * s] = [m + 12 * s, 12 * s];
				}
				
			}

			for(var n = 0; n < s; n++) {
			
				nodes[n + 13 * s] = [r * Math.cos(2 * Math.PI * n / s) + center[0], r * Math.sin(2 * Math.PI * n / s) + center[1], center[2]];
				this.rotateSphereNodeY(75, nodes[n + 13 * s]);
				edges[n + 13 * s] = [n + 13 * s, n + 13 * s + 1];
				
				if(edges[n + 13 * s][1] > 14 * s - 1) {
					edges[n + 13 * s] = [n + 13 * s, 13 * s];
				}
				
			}

			for(var o = 0; o < s; o++) {
			
				nodes[o + 14 * s] = [r * Math.cos(2 * Math.PI * o / s) + center[0], r * Math.sin(2 * Math.PI * o / s) + center[1], center[2]];
				this.rotateSphereNodeY(105, nodes[o + 14 * s]);
				edges[o + 14 * s] = [o + 14 * s, o + 14 * s + 1];
				
				if(edges[o + 14 * s][1] > 15 * s - 1) {
					edges[o + 14 * s] = [o + 14 * s, 14 * s];
				}
				
			}
			
			for(var p = 0; p < s; p++) {
			
				nodes[p + 15 * s] = [r * Math.cos(2 * Math.PI * p / s) + center[0], r * Math.sin(2 * Math.PI * p / s) + center[1], center[2]];
				this.rotateSphereNodeY(135, nodes[p + 15 * s]);
				edges[p + 15 * s] = [p + 15 * s, p + 15 * s + 1];
				
				if(edges[p + 15 * s][1] > 16 * s - 1) {
					edges[p + 15 * s] = [p + 15 * s, 15 * s];
				}
				
			}

			for(var q = 0; q < s; q++) {
			
				nodes[q + 16 * s] = [r * Math.cos(2 * Math.PI * q / s) + center[0], r * Math.sin(2 * Math.PI * q / s) + center[1], center[2]];
				this.rotateSphereNodeY(165, nodes[q + 16 * s]);
				edges[q + 16 * s] = [q + 16 * s, q + 16 * s + 1];
				
				if(edges[q + 16 * s][1] > 17 * s - 1) {
					edges[q + 16 * s] = [q + 16 * s, 16 * s];
				}
				
			}		

			generated = true;
            
		}
		
		else {
			
		}
		
	};
	
	this.rotateSphereNodeX = function(degrees, node) {
		
		var sin_t = Math.sin(this.convertDegreesToRadian(degrees));
    	var cos_t = Math.cos(this.convertDegreesToRadian(degrees));
		var y = node[1] + tY;
		var z = node[2] + tZ;
		
		node[1] = y * cos_t - z * sin_t - tY;
		node[2] = y * sin_t + z * cos_t - tZ;
		
	};
	
	this.rotateSphereNodeY = function(degrees, node) {
		
		var sin_t = Math.sin(this.convertDegreesToRadian(degrees));
    	var cos_t = Math.cos(this.convertDegreesToRadian(degrees));
		var x = node[0] + tX;
		var z = node[2] + tZ;
		
		node[0] = x * cos_t - z * sin_t - tX;
		node[2] = x * sin_t + z * cos_t - tZ;
		
	};
	
	this.rotateSphereNodeZ = function(degrees, node) {
		
		var sin_t = Math.sin(this.convertDegreesToRadian(degrees));
    	var cos_t = Math.cos(this.convertDegreesToRadian(degrees));
		var x = node[0] + tX;
		var y = node[1] + tY;
		
		node[0] = x * cos_t - y * sin_t - tX;
		node[2] = x * sin_t + y * cos_t  - tY;
		
	};
	
	this.rotateSphereNodeXtranlations = function(degrees, node, yy, zz) {
		
		var sin_t = Math.sin(this.convertDegreesToRadian(degrees));
    	var cos_t = Math.cos(this.convertDegreesToRadian(degrees));
		var y = node[1] + yy;
		var z = node[2] + zz;
		
		node[1] = y * cos_t - z * sin_t - yy;
		node[2] = y * sin_t + z * cos_t - zz;
		
	};
	
	this.rotateSphereNodeYtranlations = function(degrees, node, xx, zz) {
		
		var sin_t = Math.sin(this.convertDegreesToRadian(degrees));
    	var cos_t = Math.cos(this.convertDegreesToRadian(degrees));
		var x = node[0] + xx;
		var z = node[2] + zz;
		
		node[0] = x * cos_t - z * sin_t - xx;
		node[2] = x * sin_t + z * cos_t - zz;
		
	};
	
	this.rotateSphereNodeZtranlations = function(degrees, node, xx, yy) {
		
		var sin_t = Math.sin(this.convertDegreesToRadian(degrees));
    	var cos_t = Math.cos(this.convertDegreesToRadian(degrees));
		var x = node[0] + xx;
		var y = node[1] + yy;
		
		node[0] = x * cos_t - y * sin_t - xx;
		node[2] = x * sin_t + y * cos_t  - yy;
		
	};
	
	this.rotateSphereX = function(degrees) {
		
		var sin_t = Math.sin(this.convertDegreesToRadian(degrees));
    	var cos_t = Math.cos(this.convertDegreesToRadian(degrees));
    	
    	for (var n = 0; n < nodes.length; n++) {
        	
        	var node = nodes[n];
        	
        	var y = node[1] + tY;
        	var z = node[2] + tZ;
        	
        	node[1] = y * cos_t - z * sin_t - tY;
        	node[2] = z * cos_t + y * sin_t - tZ;
        	
    	}
		
	};
	
	// For rotatina alona the y-axis
	this.rotateSphereY = function(degrees) {
		
		var sin_t = Math.sin(this.convertDegreesToRadian(degrees));
    	var cos_t = Math.cos(this.convertDegreesToRadian(degrees));
    	
    	for (var n = 0; n < nodes.length; n++) {
        	
        	var node = nodes[n];
        	
        	var x = node[0] + tX;
        	var z = node[2] + tZ;
        	
        	node[0] = x * cos_t - z * sin_t - tX;
        	node[2] = z * cos_t + x * sin_t - tZ;
        	
    	}
		
	};
	
	// For rotatina alona the z-axis
	this.rotateSphereZ = function(degrees) {
		
		var sin_t = Math.sin(this.convertDegreesToRadian(degrees));
    	var cos_t = Math.cos(this.convertDegreesToRadian(degrees));
    	
    	for (var n = 0; n < nodes.length; n++) {
        	
        	var node = nodes[n];
        	
        	var x = node[0] + tX;
        	var y = node[1] + tY;
        	
        	node[0] = x * cos_t - y * sin_t - tX;
        	node[1] = y * cos_t + x * sin_t - tY;
        	
    	}
		
	};
	
	this.convertDegreesToRadian = function(degree) {
		
		var radian = (degree / 360) * (2 * Math.PI);
		return radian;
		
	};
	
	this.mapTexture = function(img) {
		
		img = new Image();
		img.src = "sphere.jpg";
		
		for(var i = 0; i < nodes.length - 1; i++) {
			
			var theta = Math.atan(nodes[i][1] / nodes[i][0]);
			var pha = Math.atan(Math.sqrt(nodes[i][0] ^ 2 + nodes[i][1] ^ 2) / nodes[i][2]);
			var xPos = theta / (2 * Math.PI);
			var yPos = pha / Math.PI;
			
			ctx.drawImage(img, xPos, yPos);
			
		}
		
	};
	
};