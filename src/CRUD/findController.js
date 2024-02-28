//Accessing the Required Data Efficiently

db.mycollection, find({ field: value });
db.mycollection.find({ age: 20 });
//find work as a filter and this is single value filter
//search for all docuement which age is 20

db.mycollection.find({ age: { $gt: 30 } });
//$gt is a operator recogonized by dollar sign
//range filter look for all docuement which age is greater than age 30

/*

Query Selector -- $ dollar sign operator
$eq
Project Operator - change the data we get
modify data presentation only change the look of it when you get
$



Query Selector
comparision
logical
element
array comment
evaluation
geospatial

Project Operator
$
$meta -- working with indexes
$slice
$elemMatch



FindOne
return first matching document
findOne({}) return first document in your collection



Find()
return cursor
find().pretty() -- gives all documents and return cursor 20 document maximnum
*/

/*
$eq || $ne = not equal
db.mycollection.find({runtime:60}) === db.mycollection.find({runtime:{$eq:60}})
$lt || $lte
lower than like <40 kam hunu parcha


$gt || $gte
greater than like >40 or >=40








*/

/*

 Working with embedded Document 

  db.mycollection.find({"rating.average":{$gt:7.0}})
   double quotation rakhne
   we can access array
   db.mycollection.find({genres:"Drama"})



*/

/*

$in and $nin
in looks in array like two discrete value
parna sakxa paran ne sakdain vana khojya ho
between
db.mycollection.find({runtime:{$in:[30,40]}})
in ho
aba not in (nin)
db.mycollection.find({runtime:{$nin:[30,40]}})
*/

//Logical Operator

/* 

OR OPERATOR
db.movies.find($or:[{"address.province":{$lte:5}}, {"address.province":{$gte:2}}]).pretty()

nor operator
return all document neither the condition is matched opposite
db.movies.find($nor:[{"address.province":{$lte:5}}, {"address.province":{$gte:2}}]).pretty()

and operator
 db.movies.find({$and:[{"address.province":{$eq:3}},{age:{$gte:20}}]}).pretty()
 both condition must be true
 mongodb bydefault and the find({})
 db.mycollection.find({})



not operator
not == ne
*/

/*

We can check if there is element exist or not in the mongodb
$exist
kun data ma hamro age cha ki kun document ma hamro age cha vanera check garna milcha

*/

/*
type operator data type
db.collectionName.find({phone:{$type:"number"}}).pretty()
load datatype with number
you pass array in the type
db.collectionName.find({phone:{$type:["number","string"]}}).pretty()


*/

/*
Evaluation Operator
regualr expresssion a way of searching text from sentence /musical/
regx you want to seach for something in the text like
mero name subham ho
from this text you want to check if there exist a subham


*/

/*
Querying Array

db.collectionName.find({"hobbies.title":"sports"}).pretty()
path embedded appraoach , not only on embedded documents


$size : 3
search for the arrat which its array size is 3

$all
insure that the elemnt exist in some field and does not matter in order of order
all field are included


$elemMatch
db.user.find({$and:[{"hobbies.title":"sport"},{"hobbies.frequency":3}]})

db.user.find({hobbies:{$elemMatch:{title:"sport", frequemcy:{$gte:3}}}})

*/

/*

 find() 
 yields out the cursor 20 limited
 client ----- database

 1000 ota linxa document fetch garxa tara
 curosr le 10 ota fetch garna milcha ani arko 10 ota fetch garna milcha
 request batch
 find gives us cursor 
 count simpply count the data or document

*/

//projecion {"genre.$": 1}
