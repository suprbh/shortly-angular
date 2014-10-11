angular.module('shortly.links', [])

// .config(function($routeProvider))

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function(){

    Links.getLinks()
    .then(function(data){
      console.log("Inside Links.getLinks()", data);
      $scope.data.links = data;
    });
  };
  console.log("foo");
  $scope.getLinks();
});
