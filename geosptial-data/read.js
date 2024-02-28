/*
Storing Geospatial Data in geojson format
querying geospatial data


location:{type:'point', coordintes;{first value is always longitude and second value is always latitude}}

$near working with geospatial data
$near:{$geometry:{geojson object}}
check if the user is near the location that we are finding
2dsphere
index gepspatialindex
$maxdistance
 db.newplaces.find({location:{$near:{$geometry:{type:'Point', coordinates:[85.350711,27.655674]}, $maxDistance:300, $minDistance:10}}})
$mindistance
which point are near to our point
 db.newplaces.find({location:{$near:{$geometry:{type:'Point', coordinates:[85.350711,27.655674]}}}})


which places are inside in the area
$geowithin
 const p1 ma long and lat hal
 const p2 ma long and lat hal
 const p3 ma ne long and lat 
 auta certain area bitr
 $geowithin all element in a certain shape or object o polygon
 $geowithin:{$geometry:{type:"Polygon", coordinates:[[p1,p2,p3,p4,p1]]}}
 polygon has to end with starting point

 
 finding out if a user is inside a specific area
 db.areas.insertOne({name:"golden gate park", area:{type:'polygon', coordinates:[[p1,p2,p3,p4]]}})

now find
db.areas.createIndex({area:'2dsphere})
we can write our query
$geointersect

db.area.find({area:{$geointersect:{$geometry:{type:'Point',coordinates:[user ko co ordinate hal yeta]}}}})


finding places within a certain raidus
$centerSphere :[two elements[long,lat],1/6378.1 ]
*/
