angular.module("noServerApp")
.directive("userNavBar", function(){
  return {
    templateUrl: "navBars/navBarUsers/navBarsUser.html",
    function ($scope) {
      $scope.logout = function () {
        var ref= new Firebase ("https://doggiedaycare.firebaseio.com/");
        ref.unauth();
        console.log("successfully logged out of account");
      }
    }
    }
});
