angular.module("noServerApp")

.directive("requestDir", function(){
  return {
    templateUrl: "admin/request/request.html",
    controller: function ($scope, $firebaseArray, $firebaseObject){
      var requestRef = new Firebase("https://doggiedaycare.firebaseio.com"+"/request");
      var findRequest = function () {
          return $firebaseArray(requestRef).$loaded().then(function( res ) {
            $scope.requests= res;

            console.log($scope.requests);
          })
          }
          findRequest();

          // $scope.saveIt = function(){
          //   $save()
          // }

          $scope.approve = function(request){
            // request.status= "Approved";
            requestRef.child(request.$id).child("status").set("Approved");
          }

          $scope.decline= function(request) {
            // request.status= "Approved";
            requestRef.child(request.$id).child("status").set("Declined");
          }
    }



}
});
