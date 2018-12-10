
app.controller("jobGalleryCtrl", function($scope, jobs, user, $location) {

    // Checking if the user is currently logged in,
    // if not redirecting to the home page
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }

    jobs.getActiveUserRecipes().then(function (jobs) {
        $scope.jobs = jobs;
    }, function(error) {
        
    })
})