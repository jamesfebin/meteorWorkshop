Template.navbar.events({
        'click #createTeam':function(event)
        {

                $('#createTeamModal').modal('show');
        },
        'click #joinTeam':function(event)
        {
                $('#joinTeamModal').modal('show');
        }
});

Template.dashboard.events({
        'click #btnCreateTeam':function()
        {
                var teamName = $('#teamName').val();

                $('.alert').remove();

                if(teamName!="")
                {
                        Teams.insert({name:teamName});
                        $('#createTeamModal').modal('hide');

                }
                else
                {
                        $('#createTeamModalBody').append('<p class="alert alert-warning"> Please input team name</p>');
                }
        }
});

Template.navbar.events({
'click #updateStatus':function()
{

        $('#updateStatusModal').modal('show');

},
'click #addMission' :function()
{

        $('#addMissionModal').modal('show');

}
});

Template.missionsContainer.events({
'click #addTasks':function(event)
{

               $('#addTasksModal').modal('show');
               Session.set('currentMissionId',event.currentTarget.value);


}
});

Template.teamWall.events({
'click #btnUpdateStatus':function()
{

 var status = $('#statusTextBox').val();

        $('.error').remove();
        if(status!="")
        {
                var time = Math.round(+new Date()/1000);
                Status.insert({userId:1,userProPic:"https://pbs.twimg.com/profile_images/480193194982776832/4ON0k7xg_bigger.jpeg",status:status,time:time,fullName:"Febin"});
                $('#updateStatusModal').modal('hide');


        }
        else
        {

                $('#updateStatusModalBody').append('<p class="alert alert-danger error"> Please input  status</p>');

        }

},
'click #btnAddMission':function()
{

        $('.error').remove();
        var missionName = $("#missionTextBox").val();

        var day = $('#day').val();
        var month = $('#month').val();
        var year = $('#year').val();

        var time = Math.round(new Date(year+"-"+month+"-"+day).getTime()/1000);

        if(time)
        {
           if(missionName!="")
                  {

                        Missions.insert({name:missionName,time:time});
                        $('#addMissionModal').modal('hide');

                  }
           else
                   {

                        $('#addMissionModalBody').append('<p class="alert alert-danger error"> Please input  mission name</p>');

                   }
        }
        else
                {
                        $('#addMissionModalBody').append('<p class="alert alert-danger error"> Please input  valid date</p>');

                }

},
'click #btnAddTasks':function()
{
        $('.error').remove();

        var task = $('#taskTextBox').val();
        if(task!="")
        {
                var currentMissionId =  Session.get('currentMissionId');
                Tasks.insert({task:task,missionId:currentMissionId,completed:false});
                $('#addTasksModalBody').modal('hide');
        }
        else
        {
                $('#addTasksModalBody').append('<p class="alert alert-danger error"> Please input  task</p>');


        }
}
});
