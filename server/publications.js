Meteor.publish('teamsData',function(limit)
{
        return Teams.find({},{limit:limit});
});

Meteor.publish('statusData',function(teamId,limit)
{
        return Status.find({teamId:teamId},{sort:{time:-1},limit:limit});
});

Meteor.publish('missionsData',function(teamId,limit)
{
        return Missions.find({teamId:teamId},{limit:limit});
});

Meteor.publish('messagesData',function(teamId,limit)
{
        return Messages.find({teamId:teamId},{sort:{time:-1},limit:limit});
});
Meteor.publish('tasksData',function(teamId,limit)
{
        return Tasks.find({teamId:teamId},{limit:limit});
});


/*

teamsData
userData
searchTeams
        Hint
        name: { $regex: teamName+".*", $options: 'i' }}

teamRequestUsersData
        {_id:{$in:teamData.requests}}

Messages
        Check if user is part of a team
        users:{$in:[this.userId]}}
Status
        Check if user is part of a team
        users:{$in:[this.userId]}}
TasksData
        Check if user is part of a team
        users:{$in:[this.userId]}}
MissionsData
        Check if user is part of a team
        users:{$in:[this.userId]}}
*/
