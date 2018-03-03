 
var infowindow;
var map;
var myLatLng = [];

var district = [
  
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Central%20and%20Western.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Eastern.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Islands.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Kowloon%20City.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Kwai%20Tsing.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Kwun%20Tong.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/North.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Sai%20Kung.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Sha%20Tin.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Sham%20Shui%20Po.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Southern.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Tai%20Po.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Tsuen%20Wan.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Tuen%20Mun.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Wan%20Chai.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Wong%20Tai%20Sin.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Yau%20Tsim%20Mong.kml",
  "https://raw.githubusercontent.com/Paulkit/HKMap/master/Yuen%20Long.kml"
   

 ];

 
      
 
var array = new Array;

for (i = 0; i < district.length; i++) {
    var kml =    new google.maps.KmlLayer({
                
                        url: district[i],
                        map: map
    });

    array.push( kml);
    
}

 