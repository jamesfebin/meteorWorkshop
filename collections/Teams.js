Teams = new Meteor.Collection('teams');

Meteor.methods({
teamJoinRequest:function(teamId)
{


        var associated = Teams.find({_id:teamId,requests:{$in:[Meteor.user()._id]}}).count();

        if(!associated)
        return Teams.update({_id:teamId},{$push:{requests:Meteor.user()._id}});
        else
        return 0;
},
acceptUserRequest:function(userId,teamId)
{

        if(Teams.find({_id:teamId,users:{$in:[this.userId]}}).count())
        {

        var associated = Teams.find({_id:teamId,users:{$in:[Meteor.user()._id]}}).count();

        if(!associated)
        Teams.update({_id:teamId},{$push:{users:Meteor.user()._id}});

        Teams.update({_id:teamId},{$pull:{requests:Meteor.user()._id}});

        return 1;


        }
        else
        return 0;

},
rejectUserRequest:function(userId,teamId)
{

        if(Teams.find({_id:teamId,users:{$in:[this.userId]}}).count())
        {

        var associated = Teams.find({_id:teamId,requests:{$in:[Meteor.user()._id]}}).count();

        if(associated)
        return Teams.update({_id:teamId},{$pull:{requests:Meteor.user()._id}});

        }

}
});
