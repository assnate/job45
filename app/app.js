
var app = angular.module("job45BookApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html",
        controller: "homeCtrl"
    }).when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    }).when("/signup", {

    }).when("/jobs", {
        templateUrl: "app/jobs/jobGallery.html",
        controller: "jobGalleryCtrl"
    }).when("/new" , {
        templateUrl: "app/jobs/newJob.html",
        controller: "newJobCtrl"
    }).when("/job/:id" , {

    })
})