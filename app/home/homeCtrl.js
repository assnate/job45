
app.controller("homeCtrl", function($scope, jobs) {
        debugger;
        $scope.filteredJobs = [];
    // Checking if the user is currently logged in,
    // if not redirecting to the home page
    $scope.searchText = "";
  
    $scope.searchByName = function() {
                debugger;
                $scope.filteredJobs = [];
        for(var i=0;i<$scope.jobs.length;i++) {
            debugger;
                if ($scope.jobs[i].name.toLowerCase().includes($scope.searchText.toLowerCase()))
                {
                    $scope.filteredJobs.push($scope.jobs[i]);
                }
        }
    }

    jobs.getAllJobs().then(function (jobs) {
        $scope.filteredJobs = [];
        $scope.jobs = jobs;
        $scope.filteredJobs = jobs;
    }, function(error) {
        
    });
})