var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
        templateUrl: "firstpage.html"
        , controller: "mainController"
    })

    .when('/secondpage', {
        templateUrl: "secondpage.html"
        , controller: "secondController"
    })

    .otherwise({
        redirectTo: "/"
    });


});

app.factory("myService", function () {
    var items = ['Controllers', 'Scopes', 'Services'
                 , 'Directives', 'Model', 'Routings'
                 , 'Views', 'Data Binding', 'Filters'];

    return {
        getItems: function () {
            return items;
        },
        
        addItem: function(item) {
			items.push(item);
		}          
    }
});


app.directive("myDirective", function(){

    return{
        restrict:'E',
        templateUrl:"customdirective.html",
        replace: true,
        scope:{
            item: '=itemData'
        }
    }
    
});


app.controller("mainController", function ($scope, myService) {
    $scope.items = myService.getItems();

});

app.controller("secondController", function ($scope, myService) {
 $scope.addItem = function(item) {
		myService.addItem(item);
	}
});