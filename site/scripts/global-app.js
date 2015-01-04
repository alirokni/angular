// defining globalApp module which requires delicious-app.js and ngRoute to be present
var app = angular.module('globalApp', ['deliciousApp', 'contactApp', 'ui.router', 'ngAnimate', 'weatherApp']);

    app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

        // catch all route and send users to the intro page
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('introduction', {
                url: '/',
                templateUrl: './partials/introduction.html',
                controller: 'introductionContoller'
            })
            .state('updates', {
                url: '/updates',
                templateUrl: './partials/updates.html',
                controller: 'updatesContoller',
                controllerAs: 'updates'
            })
            .state('performance', {
                url: '/performance',
                templateUrl: './partials/webPerformance.html',
                controller: 'webPerformanceContoller',
                controllerAs: 'performance'
            })
            .state('RWD', {
                url: '/RWD',
                templateUrl: './partials/ResponsiveWebDesign.html',
                controller: 'RWDContoller',
                controllerAs: 'RWD'
            })
            .state('bookmarks', {
                url: '/bookmarks',
                templateUrl: './partials/bookmarks.html',
                controller: 'bookmarksContoller',
                controllerAs: 'bookmarks'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: './partials/contact.html',
                controller: 'contactContoller',
                controllerAs: 'contact'
            })
            .state('widgets', {
                url: '/widgets',
                templateUrl: './partials/widgets.html',
                controller: 'widgetsContoller',
                controllerAs: 'widgets'
            })

    }]);

// define deliciousApp module for bookmarks page
var deliciousApp = angular.module('deliciousApp', []);

// define contactApp module for contact page
var contactApp = angular.module('contactApp', []);

// define contactApp module for weahter app
var weatherApp = angular.module('weatherApp', []);
