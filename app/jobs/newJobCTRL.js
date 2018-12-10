
app.controller("newJobCtrl", function($scope, recipes, $location, user) {
    
    // Checking if the user is currently logged in,
    // if not redirecting to the home page
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.createRecipe = function () {
        recipes.createRecipe($scope.name, $scope.description, 
            $scope.ingrediants, $scope.steps,  $scope.image).then(function () {
            $location.path("/jobs")
        }, function (err) {
            console.log(err);
        })
    }
})