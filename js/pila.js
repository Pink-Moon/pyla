// ANGULAR JS

    var pilaApp = angular.module('pilaApp', ['ngRoute']);

    // routes
    pilaApp.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController',
               
            })

           
            .when('/live', {
                templateUrl : 'pages/live.html',
                controller  : 'liveController',
               
            })

           
            .when('/audio', {
                templateUrl : 'pages/audio.html',
                controller  : 'audioController',
                
            })

            .when('/video', {
                templateUrl : 'pages/video.html',
                controller  : 'videoController',
        
            })

    });

    // controllers
    pilaApp.controller('mainController', function($scope,$timeout) {
                
                    $scope.bodyStyle = {background:"url(img/pattern.jpg)"};
                    $timeout(function() {
                    $scope.$apply(function() {
                    $scope.items[0].lateLoader = 'i just loaded';  
                    });
     }, 1000);
                   

    });

    pilaApp.controller('liveController', function($scope) {
    });

    pilaApp.controller('audioController', function($scope) {
      
    });

    pilaApp.controller('videoController', function($scope) {
        
    });




 
