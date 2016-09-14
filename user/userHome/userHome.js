angular.module("noServerApp")

.controller("userHomeCtrl", function(appService, $scope, $firebaseObject, $firebaseArray) {


  var usersRef = new Firebase("https://doggiedaycare.firebaseio.com"+"/users");
  var authData = usersRef.getAuth();

  if (authData) {
    console.log("Authenticated user with uid:", authData.uid);
  }
  // THE CUSTOM ID IS THE DATA YOU WANT TO MATCH THE OBJECT WITH
    var customId = authData.uid;
    console.log(authData);

    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function(state) {
            return {abbrev: state};
          });

// this should only be run once, when the used first signs in. It should
// never never be shown again, the ability to edit it though would be nice.
    $scope.submitUserProfile =function () {
      var userProfile = {
        userId: customId,
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        fullName: $scope.firstName+ " " +$scope.lastName,
        address: {
          street: $scope.streetName,
          street2: $scope.streetName2,
          city: $scope.city,
          zip: $scope.zip,
          city: $scope.city
        },
        phoneNumber: $scope.phoneNumber,
      }
      console.log(userProfile);
      usersRef.push(userProfile);
}

 appService.findUser();

   var requestRef = new Firebase("https://doggiedaycare.firebaseio.com"+"/request");
   var findRequest = function () {
     $scope.myRequest = [];
       return $firebaseArray(requestRef).$loaded().then(function( res ) {
         for (var i = 0; i < res.length; i++) {
           if (customId == res[i].userid) {
             $scope.myRequest.push(res[i]);
           };
         }
       })
       }
       findRequest();

 });
