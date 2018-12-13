
app.controller("jobGalleryCtrl", function($scope, jobs, user, $location) {

    // Checking if the user is currently logged in,
    // if not redirecting to the home page
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }

    jobs.getActiveUserJobs().then(function (jobs) {
        debugger;
        $scope.jobs = jobs;
    }, function(error) {
        
    })
})