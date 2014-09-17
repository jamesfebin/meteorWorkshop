Teams.allow({
        insert:function()
        {
                if(Meteor.user())
                return true;
                else
                return false;
        },
        update:function()
        {

                if(Meteor.user(userId,doc))
                {

                        if(Teams.find({_id:doc.teamId,users:{$in:[Meteor.user()._id]}}).count())
                        return true;
                        else
                        return false;
                }


        }
});

Messages.allow({
        insert:function(userId,doc)
        {
                if(Meteor.user())
                {
                        if(Teams.find({_id:doc.teamId,users:{$in:[Meteor.user()._id]}}).count())
                        return true;
                        else
                        return false;
                }
        }
});


Tasks.allow({
        insert:function(userId,doc)
        {
                if(Meteor.user())
                {
                        if(Teams.find({_id:doc.teamId,users:{$in:[Meteor.user()._id]}}).count())
                        return true;
                        else
                        return false;
                }
        },
        update:function(userId,doc)
        {
                if(Meteor.user())
                {
                        if(Teams.find({_id:doc.teamId,users:{$in:[Meteor.user()._id]}}).count())
                        return true;
                        else
                        return false;
                }
        }
});

Missions.allow({
        insert:function(userId,doc)
        {
                if(Meteor.user())
                {
                        if(Teams.find({_id:doc.teamId,users:{$in:[Meteor.user()._id]}}).count())
                        return true;
                        else
                        return false;
                }
        }
});


Status.allow({
        insert:function(userId,doc)
        {
                if(Meteor.user())
                {
                        if(Teams.find({_id:doc.teamId,users:{$in:[Meteor.user()._id]}}).count())
                        return true;
                        else
                        return false;
                }
        }
});
