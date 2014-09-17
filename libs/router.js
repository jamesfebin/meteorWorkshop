
Router.map(function(){

        this.route("home",{

                path:'/',
                onAfterAction:function()
                {

                        Session.set('currentPage','index');
                        if(Meteor.user())
                                Router.go('/dashboard');
                }

        });

});
if(Meteor.isClient)
{
Meteor.subscribe('userData');
}


Router.map(function(){

        this.route("dashboard",{

                path:'/dashboard',
                waitOn:function()
                {
                        Session.set('currentPage','dashboard');

                        Meteor.subscribe('teamsData');
                },
                onBeforeAction: function () {
                if (! Meteor.user()) {

                      if (Meteor.loggingIn()) {
                        }
                      else{
                        Router.go('/');
                      }
                    }
                }
        });

});

Router.map(function(){

        this.route("teamWall",{

                path:'/team/:id',
                waitOn:function()
                {
                        Session.set('currentPage','team');

                        Session.set('teamId',this.params.id);
                        this.subscribe('messagesData',this.params.id,10);
                        this.subscribe('statusData',this.params.id,10);
                        this.subscribe('missionsData',this.params.id,10);
                        this.subscribe('tasksData',this.params.id,10);
                        this.subscribe('teamsData');
                        this.subscribe('teamRequestUsersData',this.params.id);
                        this.subscribe('teamUserData',this.params.id,50);


                },
                onBeforeAction: function () {
                if (! Meteor.user()) {

                      if (Meteor.loggingIn()) {
                        }
                      else{
                        Router.go('/');
                      }
                    }
                }
        });

});
