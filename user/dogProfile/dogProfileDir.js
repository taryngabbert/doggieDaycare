angular.module("noServerApp")
.directive("dogProfileDir", function(){
  return {
    templateUrl: "user/dogProfile/dogProfile.html",
    controller: function ($firebaseArray, $scope) {
        var usersRef = new Firebase("https://doggiedaycare.firebaseio.com"+"/users");
        var authData = usersRef.getAuth();
        var customId = authData.uid;
        var dogProfileArr=[];

        return $firebaseArray(usersRef).$loaded().then(function( res ) {
          for (var i=0; i<res.length; i++) {
            if (res[i].userId == customId ) {
              dogProfileArr.push(res[i].dogProfile);
            }
            $scope.userData = [];
          } for (var key in dogProfileArr[0]) {
            $scope.userData.push(dogProfileArr[0][key]);

          }

        })
        }
  }
})
