'use strict'

var app = angular.module("AngularKurs", ['ng', 'ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: "pages/home.html",
        controller: "homeController"
    }).when('/data-bindings', {
        templateUrl: "/pages/databindings.html",
        controller: 'dataBindingsController'
    }).when('/controllers', {
        templateUrl: "pages/controllers.html",
        controller: 'controllersController'
    }).when('/services', {
        templateUrl: "pages/services.html"
    }).when('/filters', {
        templateUrl: "pages/filters.html"
    }).when('/routing', {
        templateUrl: "pages/routing.html"
    }).otherwise({
        redirectTo: '/'
    });
});
