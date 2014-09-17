Meteor.methods({
'updateStatus':function(status)
{
        if(Meteor.user())
        {
        var time = Math.round(+new Date()/1000);
        Meteor.users.update({_id:Meteor.user()._id},{$set:{"profile.status":status,lastUpdated:time}});
        }
}
});
