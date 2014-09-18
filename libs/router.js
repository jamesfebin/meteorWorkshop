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
