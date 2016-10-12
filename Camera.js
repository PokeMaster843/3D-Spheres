var Camera = function(coords, angles) {
  
  this.rotateCamera = function(newAngles) {
    
    angles[0] += newAngles[0];
    angles[1] += newAngles[1];
    angles[2] += newAngles[2];
    
  };
  
  this.translateCamera = function(newCoords) {
    
    coords[0] += newCoords[0];
    coords[1] += newCoords[1];
    coords[2] += newCoords[2];
    
  };
  
  this.addPerspective = function(obj) {
    
    for(var i = 0; i < obj.nodes.length; i++) {
      
      var cX = Math.cos(angles[0]), cY = Math.cos(angles[1]), cZ = Math.cos(angles[2]);
      var sX = Math.sin(angles[0]), sY = Math.sin(angles[1]), sZ = Math.sin(angles[2]);
      var x = (obj.nodes[i][0] - coords[0]), y = (obj.nodes[i][1] - coords[1]), z = (obj.nodes[i][2] - coords[2]);
      var bX, bY, b;
      
      var dX = cY * (sZ * y + cZ * x) - sY * z;
      var dY = sX * (cY * z + sY * (sZ * y + cZ * x)) + cX * (cZ * y - sZ * x);
      var dZ = cX * (cY * z + sY * (sZ * y + cZ * x)) - sX * (cZ * y - sZ * x);
      
      bX = (coords[2] / dZ) * dX - coords[0];
      bY = (coords[2] / dZ) * dY - coords[1];
      
      b = [bX, bY];
      
      return b;
      
    }
    
  };
  
};
