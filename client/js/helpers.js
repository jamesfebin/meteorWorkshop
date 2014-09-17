Template.dashboard.teams = function()
{

        if(Meteor.user())
        return Teams.find({users:{$in:[Meteor.user()._id]}});
}

Template.dashboard.searchResults=function()
{
        return Teams.find({name: { $regex: Session.get('searchValue')+".*", $options: 'i' }});
}
Template.statusContainer.statusUpdates = function ()
{

        return Status.find({},{sort:{time:-1}});
}
Template.missionsContainer.missions = function()
{
        return Missions.find({});
}

Template.teamWall.tasks = function()
{
        var currentMissionId =  Session.get('currentMissionId');
        return Tasks.find({missionId:currentMissionId});

}
Template.missionsContainer.tasks=function(id)
{
        return Tasks.find({missionId:id});

}
Template.teamWall.teamRequests = function()
{
        var teamData = Teams.findOne({_id:Session.get('teamId')});
        if(teamData)
        return Meteor.users.find({_id:{$in:teamData.requests}});
}

Template.dashboard.teamUsers = function()
{

        var teamData = Teams.findOne({_id:this._id});
        if(teamData)
        return Meteor.users.find({_id:{$in:teamData.users}},{limit:3});
}
Template.missionsContainer.helpers({
        date:function()
        {
        return moment.unix(this.time).format("MMM Do YYYY");
        },
        progress:function()
        {

                var totalMissions = Tasks.find({missionId:this._id}).count();
                var completed = Tasks.find({missionId:this._id,completed:true}).count();
                return completed/totalMissions * 100;
        }
});
Template.chatContainer.messages = function()
{
        return Messages.find({},{sort:{time:1}});
}

Template.navbar.helpers({
        'isLoggedIn':function()
        {
                if(Meteor.user())
                {
                        return true;
                }
                else
                {
                        return false;
                }
        },
        'isDashboard':function()
        {
                if(Session.get('currentPage')=='dashboard')
                        return true;
                else
                        return false;
        },
        'isTeamPage':function()
        {
                if(Session.get('currentPage')=='team')
                        return true;
                else
                        return false;
        },
        'teamRequests':function()
        {

                var teamId = Session.get('teamId');
                var teamData = Teams.findOne({_id:teamId});
                if(teamData && teamData.requests.length!="")
                return teamData.requests.length;
                else
                return "";

        }
})
