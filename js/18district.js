var district_fillColor = [
"#e6194b",
"#3cb44b",
"#ffe119",
"#0082c8",
"#f58231",
"#911eb4",
"#911eb4",
"#46f0f0",
"#d2f53c",
"#d2f53c",
"#fabebe",
"#008080",
"#aa6e28",
"#fffac8",
"#800000",
"#ffd8b1",
"#000080" 
];
  
var district = [
  
  "../HKMap/json/Central%20and%20Western.json" ,
  "../HKMap/json/Eastern.json" ,
  "../HKMap/json/Islands.json" ,
  "../HKMap/json/Kowloon%20City.json" ,
  "../HKMap/json/Kwai%20Tsing.json",
  "../HKMap/json/Kwun%20Tong.json",
  "../HKMap/json/North.json",
  "../HKMap/json/Sai%20Kung.json",
  "../HKMap/json/Sha%20Tin.json",
  "../HKMap/json/Sham%20Shui%20Po.json",
  "../HKMap/json/Southern.json",
  "../HKMap/json/Tai%20Po.json",
  "../HKMap/json/Tsuen%20Wan.json",
  "../HKMap/json/Tuen%20Mun.json",
  "../HKMap/json/Wan%20Chai.json",
  "../HKMap/json/Wong%20Tai%20Sin.json",
  "../HKMap/json/Yau%20Tsim%20Mong.json",
  "../HKMap/json/Yuen%20Long.json" 

 ];

 
      
 
var array = new Array;

for (i = 0; i < district.length; i++) {
  /*  var kml =    new google.maps.KmlLayer({
                
                        url: district[i],
                        map: map
    });
*/
    map.data.setStyle({
        fillColor: district_fillColor[i],
        strokeWeight: 0
    });
    var geoJson  =   map.data.loadGeoJson(district[i]);


  //  array.push( kml);
    // 18 district KmlLayer's click listener
    google.maps.event.addListener(geoJson, 'click', function(kmlEvent) {
        var text = geoJson.featureData.name;
        alert(text);
    });
    
 
}