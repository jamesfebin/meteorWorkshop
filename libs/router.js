Router.map(function(){

this.route("home",{

        path:'/'

});
});

Router.map(function(){

this.route("dashboard",{

        path:'/dashboard',
        waitOn:function()
        {
                this.subscribe('teamsData',5);
        }

});
});

Router.map(function(){

this.route("teamWall",{

        path:'/teams/:id',
        waitOn:function()
        {
                Session.set('teamId',this.params.id);
        }

});
});





/*
Sample Route
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
*/

/*
        Subscribe user data
*/

/*
        Dashboard
        Subscribe teamsData
*/

/*
        Teams Wall Page
        Subscribe messagesData,statusData,missionsData,tasksData,teamsData,teamRequestUsersData,teamUserData
*/
