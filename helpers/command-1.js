db.persons.aggregate([
  { $match: { name: "subham" } },
  { $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } } },
]);
//Aggregation Function
/*
Accumulator Operator

It will keep the aggregated sum in memory until its done with a
group and then writes a total sum into  aggregation function
group does accumulate data

*/
//$ tell the mongodb that i am referring to a field of our
//document which is passed into the group stage

//Group Stage
/*
we always use objectid but never use documents
_id:{}


db.gojo.aggregate([{$match:{title:"Ipad"}}, {$group:{_id:{city:"$location.city"},totalSums:{$sum:1}}}, {$sort:{totalSums:-1}}])


*/
db.gojo.aggregate([
  { $match: { gender: "male" } },
  {
    $group: { _id: { age: $age } },
    AverageAge: { $avg: 1 },
    TotalAge: { $sum: 1 },
  },
  { $sort: { totalAge: 1 } },
]);

//Project same as projection
//concat allow you to concat two string from array
//substCP
db.perons.aggregate([
  {
    $project: {
      _id: 0,
      gender: 1,
      // fullName: { $concat: ["$name.first", "$name.last"] },
      //  fullname:{$concat:[{$toUpper:"$name.first"},'',{$toUpper:"$name.last"}]}
    },
  },
]);

//projection is method to implement how the data is retrieve from the database
/*
Here we not only can inclue or exclude the data
here we can like add an additional feature also

*/

db.per.aggregate([
  {
    $project: {
      _id: 0,
      fullName: {
        $concat: [
          { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
          {
            $substrCP: [
              "$name.first",
              1,
              { $substract: [{ $strlenCP: "$name.first" }] },
            ],
          },
          " ",
          { $toUpper: { $substrCP: ["$name.last", 0, 1] } },
          {
            $substrCP: [
              "$name.last",
              1,
              { $substract: [{ $strlenCP: "$name.last" }, 1] },
            ],
          },
        ],
      },
    },
  },
]);

//OUTPUT == Subham Joshi

//Now for Conver Operator
db.per.aggregate([
  {
    $project: {
      _id: 0,
      email: 1,
      name: 1,
      location: {
        type: "Point",
        coordinates: ["location.address.long", "location.address.lat"],
        //This are string now we need to convert into dobule
        coordinates: [
          {
            $convert: {
              $input: "$location.address.long",
              to: "double",
              onError: 0.0,
              onNull: 0.0,
            },
          },
          {
            $convert: {
              $input: "$location.address.lat",
              to: "double",
              onError: 0.0,
              onNull: 0.0,
            },
          },
        ],
      },
    },
  },
  {
    $project: {
      email: 1,
      location: 1,
      fullName: {
        $concat: [{ $toUpper: "$name.first" }, " ", { $toUpper: "$name.last" }],
      },
    },
  },
]);

db.per.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      Age: { age: "$dob.age" },
      Date: {
        $convert: { $input: "$dob.date", to: Date, onError: 0.0, onNull: 0.0 },
        //we can writ e $toDate shortcut for transformation
      },
    },
  },
  {
    //find ko ko kun barsa ma janmya cha vanera
    $group: {
      _id: { birthYear: { $isoWeekYear: "$birthdate" } },
      numPersons: { $sum: 1 },
    },
  },
  { $sort: { numPersons: -1 } },
]);

//group
/*
Group is for grouping multiple documents into one documents

sum count average build

*/

//Project
/*
whereas project is a one to one relation
you get one documents and then you will return one documents that one
documents we will just have changed
include /exlcude field transofrom field within single documents
*/

//Array

//push element into newly create array
db.data.aggregate([
  {
    $group: {
      _id: { age: "$age" },
      allHobbies: { $push: "$hobbies" },
    },
  },
]);

//unwind is basically flattens the array by repeating document that held array as needed to merge it to original
//where group merges multiple documents in one but unwind takes one documents and split out multiple

db.data.aggregate([{ $unwind: "$hobbies" }]);

db.data.aggregate([
  { $unwind: "$hobbies" },
  {
    $group: {
      _id: { age: "$age" },
      allHobbies: { $push: "$hobbies" },
    },
  },
]);

//$addtoSet same as push but it push and if it encounter the duplicate value it will eliminated it

//only get first element of array
db.data.aggregate([
  { $project: { _id: 0, eaxmScores: { $slice: ["$examScores", 1] } } },
]);
//only get last two elemnt of array
db.data.aggregate([
  { $project: { _id: 0, eaxmScores: { $slice: ["$examScores", -2] } } },
]);
//only get the last element of an array
db.data.aggregate([
  { $project: { _id: 0, eaxmScores: { $slice: ["$examScores", -1] } } },
]);
//$size calculate the length of an array
db.data.aggregate([
  {
    $project: { _id: 0, numScores: { $size: "$examScores" } },
  },
]);
///calculate the size of an array
db.data.aggregate([
  {
    $project: {
      _id: 0,
      examScores: {
        $filter: {
          $input: $examScores,
          as: "sc",
          cond: { $gt: ["$$sc.scores", 60] },
        },
      },
    },
  },
]);
//calcultate the highest score
db.data.aggregate([
  {
    $unwind: "$examScores",
  },
  {
    $project: {
      _id: 0,
      name: 1,
      age: 1,
     score: "$examScores.score" ,
    },
  },
  {$sort:{score: -1}},
  {
    $group:{_id:"$id",name:{$first:"$name"}, maxScore:{$max : "$score"}}}
  },
  {$sort:{maxScores:-1}}
]);


