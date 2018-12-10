
app.factory("jobs", function($q, $http, user) {

    var jobs = {};
    var wasEverLoaded = {};

    function Job(job) {
        this.id = job.id;
        this.name = job.name;
        this.description = job.description;
        this.ingredients = job.ingredients;
        this.steps = job.steps;
        this.imgUrl = job.imgUrl;
        this.userId = job.userId;
    }

    function getActiveUserJobs() {
        var async = $q.defer();

        var userId = user.getActiveUser().id;

        // This is a hack since we don't really have a persistant server.
        // So I want to get all recipes only once.
        if (wasEverLoaded[userId]) {
            async.resolve(jobs[userId]);
        } else {
            jobs[userId] = [];
            var getjobURL = "http://my-json-server.typicode.com/assnate/Job45/recipes?userId=" + userId;
            
            $http.get(getjobURL).then(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    var job= new Job(response.data[i]);
                    jobs[userId].push(job);
                }
                wasEverLoaded[userId] = true;
                async.resolve(jobs[userId]);
            }, function(error) {
                async.reject(error);
            });
        }

        return async.promise;
    }


    function createJob(name, description, ingredients, steps, imgUrl) {
        var async = $q.defer();

        var userId = user.getActiveUser().id;

        var newJob = new Job({id:-1, name: name, description: description,
            ingredients: ingredients, steps: steps, imgUrl: imgUrl, 
            userId: userId});

        // if working with real server:
        //$http.post("http://my-json-server.typicode.com/nirch/recipe-book-v3/recipes", newRecipe).then.....

        jobs[userId].push(newJob);
        async.resolve(newJob);

        return async.promise;
    }


    return {
        getActiveUserRecipes: getActiveUserJobs,
        createJob: createJob
    }
})