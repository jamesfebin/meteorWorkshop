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
                        var users = [];
                        users.push(Meteor.user()._id);
                        var teamId = Teams.insert({name:teamName,users:users});
                        $('#createTeamModal').modal('hide');

                }
                else
                {
                        $('#createTeamModalBody').append('<p class="alert alert-warning"> Please input team name</p>');
                }
        },
        'click #btnGo':function(event)
        {
                Router.go('/team/'+event.currentTarget.value);
        },
        'input #joinTeamName':function()
        {
                var teamName = $('#joinTeamName').val();
                Session.set('searchValue',teamName);

                Meteor.subscribe('searchTeams',teamName);

        },
        'click #btnJoinTeam':function(event)
        {
                var teamId = event.currentTarget.value;
                Meteor.call('teamJoinRequest',teamId,function(err,success)
                {
                        if(err)
                        {
                                console.log(err);
                        }
                        else
                        {
                                console.log(success);
                        }
                });
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

},
'click #teamRequests':function()
{
        $('#teamRequestsModal').modal('show');

}
});

Template.missionsContainer.events({
'click #addTasks':function(event)
{

               $('#addTasksModal').modal('show');
               Session.set('currentMissionId',event.currentTarget.value);


},
'click #taskCheckBox':function(event)
{
        Tasks.update({_id:event.currentTarget.value},{$set:{completed:event.currentTarget.checked}});
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
                var teamId = Session.get('teamId');
                Status.insert({teamId:teamId,userId:1,userProPic:Meteor.user().services.twitter.profile_image_url,status:status,time:time,fullName:Meteor.user().profile.name});
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

                        var teamId = Session.get('teamId');
                        Missions.insert({name:missionName,time:time,teamId:teamId});
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
                var teamId = Session.get('teamId');
                Tasks.insert({task:task,missionId:currentMissionId,completed:false,teamId:teamId});
                $('#addTasksModalBody').modal('hide');
        }
        else
        {
                $('#addTasksModalBody').append('<p class="alert alert-danger error"> Please input  task</p>');


        }
},
'click #acceptUser':function(event)
{

        var userId = event.currentTarget.value;
        var teamId = Session.get('teamId');
        Meteor.call('acceptUserRequest',userId,teamId,function(err,success)
        {
                if(err)
                {
                        console.log(err);
                }
                else
                {
                        console.log(success);
                }
        });


},
'click #rejectUser':function(event)
{
        var userId = event.currentTarget.value;
        var teamId = Session.get('teamId');

        Meteor.call('rejectUserRequest',userId,teamId,function(err,success)
        {
                if(err)
                {
                        console.log(err);
                }
                else
                {
                        console.log(success);
                }
        });
}
});

Template.chatContainer.events({
        'click #sendMsg':function()
        {

        var time = Math.round(+new Date()/1000);

        var message = $('#txtBox').val();
        var teamId = Session.get('teamId');

        if(message!="")
        Messages.insert({name:Meteor.user().profile.name,message:message,time:time,teamId:teamId});
        }
})
