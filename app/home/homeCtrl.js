
app.controller("homeCtrl", function($scope, jobs) {
        debugger;
    // Checking if the user is currently logged in,
    // if not redirecting to the home page
  

    jobs.getAllJobs().then(function (jobs) {
        debugger;
        $scope.jobs = jobs;
    }, function(error) {
        
    });
})