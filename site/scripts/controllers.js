// {{model.title}}  in the partials
app.controller("introductionContoller", function($scope){
  $scope.model = {
    title: "Introduction"
  }
});
app.controller("updatesContoller", function($scope){
  $scope.model = {
    title: "Updates"
  }
});
app.controller("webPerformanceContoller", function($scope){
  $scope.model = {
    title: "Web Performance"
  }
});
app.controller("RWDContoller", function($scope){
  $scope.model = {
    title: "Responsive Web Design"
  }
});
app.controller("bookmarksContoller", function($scope){
  $scope.model = {
    title: "Bookmarks"
  }
});
app.controller("widgetsContoller", ['$scope', function($scope){
  $scope.model = {
    title: "Widgets, web applications"
  }
}]);
app.controller("contactContoller", ['$scope',function($scope){
    $scope.model = {
        title: "Contact Me"
    };
    $scope.saveFrom = function(){
        var name = this.name;
        var email = this.email;
        var message = this.message;
        alert(name + ", "+ email + ", " + message);
    }
}]);


// this controller uses service $http to retrive data using JSONP
deliciousApp.controller('deliciousController', ['$scope', '$window', '$http', function ($scope, $window, $http) {
    $http({method: 'jsonp', url: 'http://feeds.delicious.com/v2/json/rokni?count=15&_=1416528178489&callback=JSON_CALLBACK'}).
        success(function (data) {
            $scope.deliciousEntry = data;
            $scope.theStatus = 'success';
    }).
        error(function (data) {
            $scope.theStatus = 'error';
    });
	
}]);

// this controller uses service $http to retrive data using JSONP
weatherApp.controller('weatherContoller', ['$scope', '$window', '$http', function ($scope, $window, $http) {
    $scope.clickme = function() {
        $http({method: 'jsonp', url: 'http://api.openweathermap.org/data/2.5/weather?q='+$scope.cityweather+'&APPID=4d3aaef3c8ef1cc9ffe7bf1c91665949&callback=JSON_CALLBACK'})
        .success(function (data) {
                $scope.weatherMap = data;
                if(!data.message){
                    $('#js-weather-report').removeClass('hidden');
                }
        })
        .error(function (data) {
                $scope.weatherMap = data;
        });
    }
}]);



