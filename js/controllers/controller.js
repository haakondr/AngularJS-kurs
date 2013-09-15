'use strict'


function homeController($scope) {

    $scope.tweet = function() {
        console.log($scope.message);
    };

};

function dataBindingsController($scope) {
    $scope.items = [{
        color: "blue"
    }, {
        color: "red"
    }, {
        color: "green"
    }];

    $scope.login = function() {
        console.log($scope.user);
    };
}

function controllersController($scope, $http,  $location) {
    var api = 'http://absint.online.ntnu.no:8989/api/v1';

    $http.get(api + "/tweets").success(function(response) {
        $scope.tweets = response.tweets;
    }).error(function(error) {
        $scope.error = error.data.message;
    });

    $scope.tweet = function() {
        $http.post(api + "/tweets", {
            user: $scope.user,
            text: $scope.message
        }).success(function(response) {
            $scope.tweets.push(response.tweet);
        }).error(function(response) {
            console.log(response);
        });
    };

    $scope.register = function() {
        var user = {
            username: $scope.username,
            password: $scope.password,
            full_name: $scope.fullname
        };

        $http.post(api + "/users", {
            user: user
        }).success(function(response) {
            $scope.user = user;
        }).error(function(response) {
            console.log(response);
        });
    };

    $scope.login = function() {
        var user = {
            username: $scope.username,
            password: $scope.password
        }
        $http.post(api + "/login", {
            user: user
        }).success(function(response) {
            $scope.user = user;
        });
    }

};

