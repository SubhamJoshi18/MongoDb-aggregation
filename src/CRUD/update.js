//UPDATE DOCUMENT
// db.users.updateOne({name:"chris"}, {$set:{age:null, phone:21341}})
//UpdateOne

//UpdateMany
//db.users.updateMany({"hobbies.title":"sport"}, {$set:{isSporty:true}})

/*

 
$set can update many field as much you wannt 
can array and embedded Docuement
*/

/*
INCREMENTING AND DECREMENTING UPDATE
db.collectionName.updateOne({], {$inc:{age:1 || -1}, $set:{age:30}}})

*/

/*

min , max and mil
when we declared min then it will only change when min value is lower 
same like max and mul
old value is lower than new value
db.users.updateOne({_id:ObjectId('65d4506948d2cf601a165b9e')},{$min:{age:35}})
db.users.updateOne({_id:ObjectId('65d4506948d2cf601a165b9e')},{$max:{age:38}})
db.users.updateOne({_id:ObjectId('65d4506948d2cf601a165b9e')},{$mul:{age:5}})
*/

/*
getting rid of fields
$unset -- get rid of fields
agadi chai filter gara updateone ho ki updatemany ho
{$unset:{phone:""}}

*/

/*
Rename Operator
agadi chai filter gara updateone ho ki updatemany ho
{$rename:{age:"totalage"}}
*/

//UPSERT
/*
when you want to overwrite somethign or want to update
something in your database but you dont know that
you have the given data in your database to be 
updated or not so ,
db.users.updateMany({name:"maria"}, {$set:{age:29, hobbies:[{title:"coding", name:"hero"}]}})
here no matching document
so pass ass a third argument to updateMany or one
and use
{upsert:true}
default is false
db.users.updateMany({name:"maria"}, {$set:{age:29, hobbies:[{title:"coding", name:"hero"}]}}, {upsert:true})



*/

//NOW FOR UPATING ARRAY
/*
$elemMatch look inside array inside embedded Document
db.users.updateOne({hobbies:{$elemMatch:{title:"coding", frequency:{$gte:10}}}}, {$set:{"hobbies.$.high":20}})


*/

//Updating all the array
/*
 db.users.updateMany({"hobbies.frequency":{$gte:8}}, {$set:{"hobbies.$.goodfrequency":20}}})
array ko item matching matra update huncha
aba all update ko lagi

$[] == upddate all elements 
$[].frequency field name 

arrayFilter:el
*/

//adding element to the array
/*
$push we can put in array
$push:{hobbies:{title:""sports, frequency:29
$push:{hobbies:$each:[{},{}],$sort:{frequency:-1}}}add multiple elements
-1 = descending order
 1= ascending order
*/

//remove element to the array
/*
$pull:{hobbies:{title:"hiking"}}
here we put condition to pull out of the array

$pop:{hobbies:1}
pop out the last element of the array

*/
