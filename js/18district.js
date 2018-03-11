 /**
 * Created by PaulCK on 6/3/2018.
 */
let district_name = [
  "Central and Western",
  "Eastern",
  "Islands",
  "Kowloon City",
  "Kwai Tsing",
  "Kwun Tong",
  "North",
  "Sai Kung",
  "Sha Tin",
  "Sham Shui Po",
  "Southern",
  "Tai Po",
  "Tsuen Wan",
  "Tuen Mun",
  "Wan Chai",
  "Wong Tai Sin" ,
  "Yau Tsim Mong" , 
  "Yuen Long" ,
  ];

let district_fillColor = [
"#00ff00", // Central and Western
"#3cb44b",
"#ffff00",
"#00a5ff",
"#ff6900",
"#ff00ff",  
"#4cffff",
"#00ff00", 
"#d2f53c", 
"#fabebe",
"#008080",
"#761693",  
"#aaffc3",  // Tsuen Wan
"#ff0000",
"#000000", 
"#ffd8b1",  // Wong Tai Sin
"#0000ff" ,
"#87571f"
];

  
let district = [
  
  "json/Central%20and%20Western.json",
  "json/Eastern.json" ,
  "json/Islands.json" ,
  "json/Kowloon%20City.json" ,
  "json/Kwai%20Tsing.json",
  "json/Kwun%20Tong.json",
  "json/North.json",
  "json/Sai%20Kung.json",
  "json/Sha%20Tin.json",
  "json/Sham%20Shui%20Po.json",
  "json/Southern.json",
  "json/Tai%20Po.json",
  "json/Tsuen%20Wan.json",
  "json/Tuen%20Mun.json",
  "json/Wan%20Chai.json",
  "json/Wong%20Tai%20Sin.json",
  "json/Yau%20Tsim%20Mong.json",
  "json/Yuen%20Long.json"  
 ];

 let districts = false;
 let gray_out = false;

 // basic setup
 map.data.setStyle(function(feature) {
    let name = feature.getProperty('name');
    let color; 
    let stroke;
    let strokeWeight;
 
    for (let i = 0; i < district_name.length; i++) {
      if (name === district_name[i]) {
        color = district_fillColor[i];
        stroke = '#000';
        strokeWeight = 0.1;
      }
       
    }
    if (name === "cn") {

      stroke = '#fff';
      strokeWeight = 0;
    }
    
    return ({
       fillColor: color,
       strokeColor: stroke,
       strokeWeight: strokeWeight
     });
  }); 
 
 

function districts_setup(){

  if(!districts){
    for (let i = 0; i < district.length; i++) {
      district_layer = map.data.loadGeoJson(district[i]);
    } 

  }else{

    map.data.forEach(function(feature) {
      let SD_NAME = feature.getProperty('SD_NAME');
      if (SD_NAME != "cn") {
          map.data.remove(feature);
      }
    }); 

  }
  map.panTo(baseCenterPoint);
  map.setZoom(10);  
  districts = !districts;

}
 
function gray_out_setup(){

  if(!gray_out){

    map.data.loadGeoJson("../HKMap/json/cn.json");

  }else{

    map.data.forEach(function(feature) {

      let SD_NAME = feature.getProperty('SD_NAME');
      if (SD_NAME == "cn") {
        map.data.remove(feature);
      }
      map.panTo(baseCenterPoint);
      map.setZoom(10);  

    }); 

  }

  map.panTo(baseCenterPoint);
  map.setZoom(10);  
  gray_out = !gray_out;

}