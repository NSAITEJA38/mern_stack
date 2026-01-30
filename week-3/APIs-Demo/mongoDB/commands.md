### Create database
    use db-name

### how to read databases
    show databases

### Create Collection
    db.createCollection(colletion-name)

### Create documents
->two ways
    1.insertOne()
    2.insertMany([obj1,obj2...])

### Reading/selecting the data
->two ways
    1.findOne(condition)
    2.find(condition)  ex:db.users.find()

### updating documents
->two ways
    1.updateOne(condition,arg)  ex: db.users.updateOne({name:"Sai"},{$set:{name:"Sai teja"}})
    2.updateMany(cond,arg)

### delete documents
->two ways
    1.deleteOne(condition)
    2.deleteMany(condition)


# Query operators
## comparosion Query operators
    $eq : equal to
    $ne : not equal
    $gt : greater than
    $gte : greater than or equal
    $lt : less than
    $lte : less than or equal
    $in : in arrray
    $nin : not in array