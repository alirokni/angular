// global functions

app.directive('templateHeader', function () {
    return {
        restrict : 'E',
        templateUrl: 'partials/template-header.html',
    };
});

app.directive('templateSubHeader', function () {
    return {
        restrict : 'E',
        templateUrl: 'partials/template-sub-header.html',
    };
});

app.directive('templateFooter', function () {
    return {
        restrict : 'E',
        templateUrl: 'partials/template-footer.html',
    };
});

app.directive('external', function() {
    return {
        compile: function(element) {
            var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
            elems.attr({
                target: "_blank",
                "class": "external"
            });
        }
    }
});

app.directive('pageTitle', function() {
    return {
        link: function($scope, element, attrs) {
            element.on('click', function(e){
                document.title= "Rokni.net > " + element.text();
                $('html').attr('class', "vcard "+element.attr("data-nav"))
            });
        }
    }
});

app.directive('updateClickEvent', function () {
    return {
        link: function($scope, element, attrs) {
            element.on('click oninput change', function(e){
                $('#tabs-5').addClass('selected-tab');
                var tab = element.attr('class'),
                    range = parseInt($("#range").val()),
                    oVal = '', myTab = '';
                    if( !element.text()){
                        var oVal = element.val();
                    }else{
                        var myTab = (element.attr('class')).substring( (element.attr('class')).indexOf('tabs-') , 6);
                        var oVal = myTab.substring((myTab.length) - 1) - 1;
                    }
                    window.location.href='#/updates#'+$('p.content-txt').eq( oVal ).attr('id');
                    $('p.content-txt').eq( oVal ).addClass('selected-tab');
                    $("#range").val(oVal);
                    $('.input-range li').removeClass('light-color');
                    $('.input-range li').eq( oVal ).addClass('light-color');
            })
        }
    }
});


/* onclick event handlers
        $scope.showForm = function () {
          $('.contactRow').slideToggle();
        };
        $scope.closeForm = function () {
          $('.contactRow').slideUp();
        };

*/
// local functions

deliciousApp.directive('deliciousTags', function () {
    return {
        restrict : 'E',
        templateUrl: 'partials/delicious-tags.html'
    };
});

weatherApp.directive('weatherMap', function () {
    return {
        restrict : 'E',
        replace: 'true',
        templateUrl: 'partials/weather.html'
    }
});

contactApp.directive('contactMe', function(){
  return {
      restrict : 'EA',
      transclude: false,
      templateUrl: 'partials/contact-form.html'
    }
});
