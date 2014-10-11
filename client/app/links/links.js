angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function(){

    Links.getLinks()
    .then(function(data){
      console.log("Inside Links.getLinks()", data);
      $scope.data.links = data;
    });
  };

  
  $scope.getLinks();
});
