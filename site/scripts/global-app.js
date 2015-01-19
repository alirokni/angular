// defining globalApp module which requires delicious-app.js and ngRoute to be present
var app = angular.module('globalApp', ['deliciousApp', 'contactApp', 'ui.router', 'weatherApp']);

    app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

        // catch all route and send users to the intro page
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('introduction', {
                url: '/',
                templateUrl: './partials/introduction.html',
                controller: 'IntroductionContoller'
            })
            .state('updates', {
                url: '/updates',
                templateUrl: './partials/updates.html',
                controller: 'UpdatesContoller',
                controllerAs: 'updates'
            })
            .state('features', {
                url: '/features',
                templateUrl: './partials/features.html',
                controller: 'FeaturesContoller',
                controllerAs: 'features'
            })
            .state('bookmarks', {
                url: '/bookmarks',
                templateUrl: './partials/bookmarks.html',
                controller: 'BookmarksContoller',
                controllerAs: 'bookmarks'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: './partials/contact.html',
                controller: 'ContactContoller',
                controllerAs: 'contact'
            })
            .state('widgets', {
                url: '/widgets',
                templateUrl: './partials/widgets.html',
                controller: 'WidgetsContoller',
                controllerAs: 'widgets'
            })
    }]).run(['$rootScope', '$http', '$browser', '$timeout', function ($scope, $http, $browser, $timeout) {
        // onclick event handlers
        $scope.showForm = function () {
            if( $('.form-group').hasClass('ng-hide') == true ){
                $('.form-group').removeClass('ng-hide');
                $('.form-group').slideDown();
            } else {
                $('.form-group').slideToggle();
            }
        };
        $scope.closeForm = function () {
          $('.form-group').slideUp();
        };

  }]);


// define deliciousApp module for bookmarks page
var deliciousApp = angular.module('deliciousApp', []);

// define contactApp module for contact page
var contactApp = angular.module('contactApp', []);

// define contactApp module for weahter app
var weatherApp = angular.module('weatherApp', []);
