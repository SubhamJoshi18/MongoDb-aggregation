/*


Aggregation Framework
pipeline of steps

collection
$match
$sort
$group
$project
output list of documents

-- Very powerful way of retriving documents
Every stage recevies the output of the previous stage
Building Pipeline

instead of using find()
we use aggregate and it takes an array cause we define
serial of steps to ouput a good model of data
aggregate does not fetch all the data 
take advantage of indexes

Just Like Find methodit returns a cursor 

cursor is the mongodb collection of the documents which is
returned upon the find method execution. by default it is
automatically executed as aloop.
db.users.aggregate([{$match:{name:"subham"}}])
First Aggregation Commmand
we end pipeline of stages with closing array brackets






*/
