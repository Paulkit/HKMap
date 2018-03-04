  
 
 
// Function Prevent User Go outside of Hong Kong
/**
 *  Listen drag event
 * 
 * 
 * 
 */
 // Listen for the dragend event
   baseCenterPoint = new google.maps.LatLng(22.363358, 114.136615);
   
  
 google.maps.event.addListener(map, 'center_changed', function() {
    
 
    if(!arePointsNear(map.getCenter(), baseCenterPoint,35)){
     
       map.panTo(baseCenterPoint);
   //  animateMapZoomTo(10);
    }
   
         
      });

 
    /**
 *  detect center point within Hong Kong region
 * 
 * 
 * 
 */  
function arePointsNear(checkPoint, centerPoint, km) {
 
  var ky = 40000 / 360;
  var kx = Math.cos(Math.PI * centerPoint.lat() / 180.0) * ky;
 
  var dx = Math.abs(centerPoint.lng() - checkPoint.lng()) * kx;
  var dy = Math.abs(centerPoint.lat() - checkPoint.lat()) * ky;
  return (Math.sqrt(dx * dx + dy * dy) <= km);
}

 