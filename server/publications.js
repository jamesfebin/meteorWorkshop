Meteor.publish('teamsData',function()
{
        if(this.userId);
        return Teams.find({users:{$in:[this.userId]}});

});

Meteor.publish('userData',function()
{

        return Meteor.users.find({_id:this.userId});
});

Meteor.publish('searchTeams',function(teamName)
{


return Teams.find({name: { $regex: teamName+".*", $options: 'i' }});

});

Meteor.publish('teamRequestUsersData',function(teamId)
{

var teamData = Teams.findOne({_id:teamId});
if(teamData.requests)
return Meteor.users.find({_id:{$in:teamData.requests}});

});

Meteor.publish('teamUserData',function(teamId,limit)
{

var teamData = Teams.findOne({_id:teamId});
if(teamData.users)
return Meteor.users.find({_id:{$in:teamData.users}},{sort:{_id:-1},limit:limit});

});


Meteor.publish('messagesData',function(teamId,limit)
{
                if(Teams.find({_id:teamId,users:{$in:[this.userId]}}).count())
                return Messages.find({teamId:teamId},{sort:{time:-1},limit:limit});
                else
                return Messages.find({flagged:false});
});


Meteor.publish('statusData',function(teamId,limit)
{
                if(Teams.find({_id:teamId,users:{$in:[this.userId]}}).count())
                return Status.find({teamId:teamId},{limit:limit});
                else
                return Status.find({flagged:false});
});

Meteor.publish('tasksData',function(teamId,limit)
{
                if(Teams.find({_id:teamId,users:{$in:[this.userId]}}).count())
                return Tasks.find({teamId:teamId},{limit:limit});
                else
                return Tasks.find({flagged:false});
});

Meteor.publish('missionsData',function(teamId,limit)
{
                if(Teams.find({_id:teamId,users:{$in:[this.userId]}}).count())
                return Missions.find({teamId:teamId},{limit:limit});
                else
                return Missions.find({flagged:false});
});
