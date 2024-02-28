const Course = require("../models/schema");

const PostFunction = async (req, res, next) => {
  try {
    const user = new Course({
      name: "subham Joshi",
      author: "Mosh",
      tags: ["node", "backend"],
      isPublished: true,
    });
    const result = await user.save();
    console.log(result);
    next();
  } catch (err) {}
};

//CREATE DOCUMENT

/*
insertOne({FIELD:value})

db.collectionName.insertOne({name:'subham'})




insertMany([[{},{}]])


db.collectionName.insertMany([{name:'subham'},{name:'rahul}])
You Just Need To Put into the array in the insertMany or it will not work

db.collectionName.insertMany([{}])


insert() --> insertone or insertmany errorprone so dont used this
insert work as a insertOne or insertMany 
so it is a errorProne
we can use your _id as your own 

standalone if one fail it fail entire insert opertaion
but agadi ko chai execute huncha
 

{ordered:false}

write conceren

{w:1, j:undefined
j = journal additional file in which the storage engine manage
//j = save operation management like this
if server down or something happen file is there in journal incase if memory is wipe or real disk
backup todolist of storage engine
it hasnst save to database ffile
now 


{w:1, j:true}//now its backup
{w:1, wtimeout:200, j:true}
w= acknowledgement from the server

wtimeout = setTimeout


Atomicity - error - success
 
rolled back noting is saved  ||   saved as a whole

name and age is insert but hobbies has error 
than atomicity transcation it rolled back to nothing is saved
 */

module.exports = {
  PostFunction,
};
