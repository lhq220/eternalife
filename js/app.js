var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when ('/', {
        templateUrl : 'https://rawgit.com/lhq220/eternalife/master/page/index.html',
        controller: 'IndexController'
    }).when ('/trang2', {
        templateUrl : 'https://rawgit.com/lhq220/eternalife/master/page/trang2.html',
        controller : 'Trang2Controller'
    }).otherwise({
        redirectTo: '/'
    });
});
myApp.factory('GetPost', function ($http) {
    var factory = [];
    factory.getTodos =  function () {
        return $http.get('http://gellife.blogspot.com/feeds/posts/default');  
    }
    return factory;
})
myApp.controller('MasterController', ['$scope', function ($scope) {
    'use strict';
  
}]);
myApp.controller('IndexController', ['$scope', '$http', 'GetPost', function ($scope, $http, GetPost) {
    'use strict';
    //data
    $scope.baivietmoi = [];
    loadbaiviet();
    function loadbaiviet () {
        var x2js = new X2JS();
        GetPost.getTodos().success( function(data) {
            courses =x2js.xml_str2json(data);
            console.log(courses);
        })
    }
    //$http.get('http://gellife.blogspot.com/feeds/posts/default')
    //    .success( function (result) {
    //        $scope.danhmucxe = result;
    //    })
    //    .error( function () {
    //        $scope.danhmucxe  = '{ "ID" : "Lỗi" }';
    //    });
}]);
myApp.controller('Trang2Controller', ['$scope', function ($scope) {
    'use strict';

}]);