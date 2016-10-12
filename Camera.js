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
    
  };
  
};
