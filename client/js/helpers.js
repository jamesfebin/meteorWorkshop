/*
Dashboard Helpers

Teams
        Hint
        Get teams which user belongs to
        $in:[Meteor.user()._id]

SearchResults
        Hint
        Like Query
        {name: { $regex: Session.get('searchValue')+".*", $options: 'i' }}

teamUsers
        Subscribe
        Hint
        $in:teamData.users

*/
Template.teamWall.tasks = function()
{
        var missionId = Session.get('currentMissionId');
        return Tasks.find({missionId:missionId});
}
Template.dashboard.teams = function()
{
        return Teams.find({});
}

Template.statusContainer.status = function()
{
        return Status.find({});
}

Template.missionsContainer.tasks = function(id)
{
        return Tasks.find({missionId:id})
}
Template.missionsContainer.missions = function()
{
        return Missions.find({});
}

Template.chatContainer.messages = function()
{
        return Messages.find({});
}

Template.missionsContainer.helpers({
        'date':function()
        {
                return moment.unix(this.deadline).format("MMM Do YYYY");

        },
        'progress':function()
        {
                var missionId = this._id;
                var totalTasks = Tasks.find({missionId:missionId}).count();
                var completedTasks = Tasks.find({missionId:missionId,completed:true}).count();
                return completedTasks/totalTasks * 100;

        }
});
/*
statusContainer Helpers

statusUpdates
*/

/*
missionsContainer helpers
missions
tasks

date
        add momentjs
        moment.unix("2232039203").format("MMM Do YYYY");
progress
*/

/*
teamWall helpers
tasks
teamRequests
        Hint
        $in:teamData.requests}

*/


/*chat Container Helpers

messages

*/

/*navbar Helpers
isLoggedIn

isDashboard

isTeamPage

teamRequests
*/
