Template.dashboard.teams = function()
{

        return Teams.find({});
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

Template.missionsContainer.helpers({
        date:function()
        {
        return moment.unix(this.time).format("MMM Do YYYY");
        }
});
Template.chatContainer.messages = function()
{
        return Messages.find({});
}
