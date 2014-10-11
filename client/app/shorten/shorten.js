angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(link){
    // $scope.link.push(link);
    console.log("Link is: ", $scope.link);
    Links.addLink($scope.link)
    .then(function(link){
      console.log("Link added?");
    });
  };
});
