  
/**
 * Created by PaulCK on 6/3/2018.
 */
 
// Function Prevent User Go outside of Hong Kong
/**
 *  Listen drag event
 * 
 */
 // Listen for the dragend event
baseCenterPoint = new google.maps.LatLng(22.363358, 114.136615);
   
  
google.maps.event.addListener(map, 'center_changed', function() {

  if(!arePointsNear(map.getCenter(), baseCenterPoint,35)){

    map.panTo(baseCenterPoint); 
  }

});

 
/**
 *  detect center point within Hong Kong region
 * 
 */  
function arePointsNear(checkPoint, centerPoint, km) {
 
  const ky = 40000 / 360;
  const kx = Math.cos(Math.PI * centerPoint.lat() / 180.0) * ky;
 
  const dx = Math.abs(centerPoint.lng() - checkPoint.lng()) * kx;
  const dy = Math.abs(centerPoint.lat() - checkPoint.lat()) * ky;
  return (Math.sqrt(dx * dx + dy * dy) <= km);
}

 