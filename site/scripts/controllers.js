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
    $scope.sendForm = function(){
        $.ajax({
            type: "POST",
            url: "contactform.php",
            data: ({
                "name": $scope.model.name,
                "email": $scope.model.email,
                "message": $scope.model.message
            }),
            success: function(msg,textStatus,xhr){
                $('#js-email-response').removeClass('warning danger success');
                if(msg == "-1"){
                    $('#js-email-response').text("Valid Email required").addClass('email-response warning');
                    $('input[type="email"]').focus().select();
                }else if(msg == "1"){
                    $('#js-email-response').text("Delivered successfully").addClass('email-response success');
                    $('textarea[name = "message"]').val('');
                }else{
                    $('#js-email-response').text("There is an issue!!!").addClass('email-response danger');
                }
            },
            error: function(msg,textStatus,xhr){
                $('#js-email-response').removeClass('warning danger success')
                $('#js-email-response').text("There is an issue!!!").addClass('email-response danger');
            }
        }); /* closing ajax call */
    };
    $scope.clearForm = function(){
        $('input[name = "name"]').val('');$
        $('input[name = "email"]').val('');
        $('textarea[name = "message"]').val('');
        $('#js-email-response').text('').removeClass('email-response warning danger success');
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



