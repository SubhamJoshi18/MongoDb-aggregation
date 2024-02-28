/*
ndexes are data structures that support the efficient execution of queries in MongoDB. They contain copies of parts of the data in documents to make queries more efficient. 
Without indexes, MongoDB must scan every document in a collection to find the documents that match each query.
collscan 


Production Collection

id name age hobbies


production indexes

id name age hobbies
index of all field for all collection for best perfomance

explain for find update delete
not for insert

you find a detaile output for this quert and how the result were returned
executionStats

Winning Plan and Rejectedplan = []





db.contacts.createIndex({})


index scan does not return the document but just the key in the index and the pointer to the document

Fetch take the pointer from the index  and reach out to the real collection and fetch the real documents
totalkeyExamined = nReturnerdDocuments



What does createIndex() do in detail?

Whilst we can't really see the index, you can think of the index as a simple list of values + pointers to the original document.

Something like this (for the "age" field):

(29, "address in memory/ collection a1")

(30, "address in memory/ collection a2")

(33, "address in memory/ collection a3")

The documents in the collection would be at the "addresses" a1, a2 and a3. The order does not have to match the order in the index (and most likely, it indeed won't).

The important thing is that the index items are ordered (ascending or descending - depending on how you created the index). createIndex({age: 1}) creates an index with ascending sorting, createIndex({age: -1}) creates one with descending sorting.

MongoDB is now able to quickly find a fitting document when you filter for its age as it has a sorted list. Sorted lists are way quicker to search because you can skip entire ranges (and don't have to look at every single document).

Additionally, sorting (via sort(...)) will also be sped up because you already have a sorted list. Of course this is only true when sorting for the age.







ExecutionTimeEstimated 

db.contacts.dropIndex({age:1})

db.contacts.explain("exectionStats").find({age:{$gt:18}}).pretty()


in case when you have a document which is fetches all the document of the collection sometimes index may be slow and
COLLSCAN > IXSCAN



if you have a dataset where your queries typically only return fraction like 10 or 20 percent or low
indexes will always speed up



if you have a dataset where your queries typically return all documents
indexes will not speed up and like executiontimeEstimated of COLLScan will be reducedd


index quickly let narrow subset of your document list not majority of that



CREATING A TEXT INDEX
 db.contacts.createIndex({name:1})

 Compound Index
 left to right
 left will ixscan
 right will collscan
 speed of queries that have multiple values







You can see the indexes in your document or collection
 db.contacts.getIndexes()

 { v: 2, key: { _id: 1 }, name: '_id_' },
 default index key made byb mongodb


 data consistency and data duplication
 {unique:true}
duplicated key or duplicated value



note Index always eat up size on your disk
partial index only add value you reguarly going to lookat

PARTIAL INDEX
for the partial index overall index is smaller only the data which stored here
like male matra store huncha female hunna
db.contacts.explain("executionStats").find().pretty()
db.contacts.createIndex({age:1}, {partialFilterExpression:{gender:"male"}})
db.contacts.explain("executionStats").find({age:{$gt:60}}) == COLLSCAN
if you add gender filter garda
tyo chai indexScan huncha

Mongodb treats nonexisting value still as a value in your index
MongoServerError: E11000 duplicate key error collection: persondata.users index: email_1 dup key: { email: null }
persondata>
null and null is kind of duplicate key
unique true vayo vane
{unique:true,partialFilterExpression:{$exist:{email:true}}}






Time to Live
like session kun bela afai delete hune data
db.sessions.insertOne({data:"random", createdAT:new Date})
expireAfterSecond only work for date 
other field ma ignore huncha
db.session.createIndex({date:1},{expireAfterSecond:10})
does not work in compound indexes


Covered Queries
skip one step
db.customer.explain("executionStats").find({name:"max"},{_id:0, name:1}).pretty()

RejectedPlan
single field index 
compound index

winning plan




Multi key Indexes
lets index an array
isMultiKey is true
mongodb treats it is an index on an array of value
work as a normal index and store in differenetly
pulls out all the value in index key which is array
store as seprate element in indexes
every element 4 array cha
ani 1000 documents
ani 1000* 4 = 4000 elements
look for field not the value
like addresses:{n:""}
cannot index parallel array
compound index with both array is not possible



Text Indexes
db.products.createIndex({description:"text"})
db.products.find({$text:{$search:"awesome"}}).pretty()
searching for phrase
db.products.find({$text:{$search:"\"awesome book\""}}).pretty()
.sort({score:{$meta :"textScore"}})

we can exclude by -word
where
{$text:{$search:"awesome -subham"}}
subham will be excluded
{default_language:}



FOREGROUND                   BACKGROUND
collection is locked         collection is accssiable during index creation
                               slower
during index creation        
faster

*/
