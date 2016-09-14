angular.module("noServerApp")
.directive("adminNavBar", function(){
  return {
    templateUrl: "navBars/navBarAdmin/navBarAdmin.html",
    controller: function ($scope) {
      $scope.logout = function () {
        var ref= new Firebase ("https://doggiedaycare.firebaseio.com/");
        ref.unauth();
        console.log("successfully logged out of account");
      }
    }
  }
})
