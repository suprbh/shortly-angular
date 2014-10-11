angular.module('shortly.services', [])


// .directive('password', function () {
//   return {
//     template: '<input type="password" ng-model='user.password' name="pswd" minlength="3" ng-maxlength="8" required="true">',
//     restrict: 'E',
//     scope: true,
//     link: function (scope, element, attrs) {
//       scope.$watch('pswd', function () {
//         if (scope.pswd.length > 3){

//         }
//       });
//     }
//   };
// })

.factory('Links', function ($http) {
  var getLinks = function(){
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var addLink = function(link){
    var sendLink = {url: link};
    return $http({
      method: 'POST',
      url: '/api/links',
      data: sendLink
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getLinks: getLinks,
    addLink: addLink
  };
})

.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    console.log("Signin", user);
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    console.log("Signup");

    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    })
   .catch(function (error) {
      console.error(error);
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
