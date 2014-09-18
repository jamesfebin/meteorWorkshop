/*
Navbar Click Events

click #createTeam
        #createTeamModal
click #joinTeam
        #joinTeamModal
click #updateStatus
        #updateStatusModal
click #addMission
        #addMissionModal
click #teamRequests
        #teamRequestsModal
*/
Template.navbar.events({
        'click #updateStatus':function(event)
        {
                $('#updateStatusModal').modal('show');
        },
        'click #addMission':function(event)
        {
                $('#addMissionModal').modal('show');
        }
});

Template.dashboard.events({
        'click #btnGo':function(event)
        {
                Router.go('/teams/'+event.currentTarget.value);
        }
})
/*
Dashboard Events

click #btnCreateTeam

        click #teamName

        #createTeamModal

click #btnGo

input #joinTeamName
        subscribe

click #btnJoinTeam
        #joinTeamModal

*/


/*

missionsContainer events
click #addTasks
        #addTasksModal

click #taskCheckBox

*/



Template.teamWall.events({
  'click #btnUpdateStatus':function()
  {
          var status = $("#statusTextBox").val();
          var time = Math.round(+new Date()/1000);
          var teamId = Session.get('teamId');
         console.log(Status.insert({fullName:"Febin John James",statusUpdate:status,time:time,teamId:teamId}));
         $('#updateStatusModal').modal('hide');
 },
 'click #btnAddMission':function()
 {

        var day = $('#day').val();
        var month = $('#month').val();
        var year = $('#year').val();
        var time = Math.round(new Date(year+"-"+month+"-"+day).getTime()/1000);
        var mission = $('#missionTextBox').val();
        var teamId = Session.get('teamId');

        console.log(Missions.insert({name:mission,deadline:time,teamId:teamId}));
        $('#addMissionModal').modal('hide');

},
'click #btnAddTasks':function(event)
{
        var missionId = Session.get('currentMissionId');
        var task = $('#taskTextBox').val();
        if(task!="")
        {
                var teamId = Session.get('teamId');

                console.log(Tasks.insert({missionId:missionId,task:task,teamId:teamId}));
                $('#addTasksModal').modal('hide');
        }
}

});

Template.missionsContainer.events({
        'click #addTasks':function(event)
        {
                Session.set('currentMissionId',event.currentTarget.value);
                $('#addTasksModal').modal('show');
        },
        'click #taskCheckBox':function(event)
        {
                var taskId = event.currentTarget.value;
                Tasks.update({_id:taskId},{$set:{completed:event.currentTarget.checked}})
        }
})
Template.chatContainer.events({
        'click #sendMsg':function()
        {

                var message = $("#txtBox").val();

                if(message!="")
                {
                        var teamId = Session.get('teamId');

                        Messages.insert({fullName:"Febin",message:message,teamId:teamId});
                }
        }
})
/*
TeamWall Events
click #btnUpdateStatus

        #statusTextBox

        Hint
        Get current time in unixtime
        Math.round(+new Date()/1000);
        updateStatusModal


click btnAddMission
        #day
        #month
        #year

        Hint
        Convert String date to unixtime
        Math.round(new Date(year+"-"+month+"-"+day).getTime()/1000);

        #addMissionModal


click #btnAddTasks
                #addTasksModalBody

click #acceptUser

click #rejectUser

*/

/*

ChatContainer.events
        click #sendMsg

        Hint
        Get current unixtime
        var time = Math.round(+new Date()/1000);

        #txtBox

*/
