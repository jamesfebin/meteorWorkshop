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
