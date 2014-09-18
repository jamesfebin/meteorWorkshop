


**Mongo Queries**

db.missions.insert({mission:"Learn WebApp Development"});

db.tasks.insert({name:"Learn HTML",missionId:1});
db.tasks.insert({name:"Learn CSS",missionId:1});
db.tasks.insert({name:"Learn JS",missionId:1});
db.tasks.insert({name:"Learn Meteor",missionId:1});

db.tasks.update({},{$set:{completed:false}});
db.tasks.update({},{$set:{completed:false}},{multi:true});

db.tasks.find({},{$set:{completed:false}}).count();

var username = "yourname";
db.tasks.update({name:"Learn HTML"},{$push:{completedUsers:username}})

db.tasks.find({completedUsers:{$in:["yourname"]}});
db.tasks.find({completedUsers:{$in:["yourname"]}}).count();


db.tasks.update({name:"Learn HTML"},{$pull:{completedUsers:username}})
db.tasks.find({completedUsers:{$in:["yourname"]}}).count();


db.tasks.find({},{name:1})

db.tasks.find({}).sort({name:-1});

db.tasks.find({}).limit(3)

db.tasks.findOne({});

db.tasks.remove({});

db.tasks.find({$or:[{name:"Learn HTML"},{missionId:1}]})
