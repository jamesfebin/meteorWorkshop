Meteor.publish('teamsData',function(limit)
{
        return Teams.find({},{limit:limit});
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
