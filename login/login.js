angular.module("noServerApp")

.controller("loginCtrl", function($scope, $state){

var ref = new Firebase('https://doggiedaycare.firebaseio.com');


//this will create the account
$scope.createAccount = function () {
ref.createUser({
    email: $scope.newUsername,
    password: $scope.newPassword
  }, function(error, userData) {
    if (error) {
      switch (error.code) {
        case "EMAIL_TAKEN":
          console.log("The new user account cannot be created because the email is already in use.");
          break;
        case "INVALID_EMAIL":
          console.log("The specified email is not a valid email.");
          break;
        default:
          console.log("Error creating user:", error);
      }
    } else {
      console.log("Successfully created user account with uid:", userData.uid);

    }
});

}


 // this will login the account
$scope.loginAccount = function () {
  ref.authWithPassword({
    "email": $scope.Username,
    "password": $scope.Password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      $state.go("userHome");
    }
  });
  // ref.authWithOAuthRedirect("userHome", function(error) {
  // if (error) {
  //   console.log("Authentication Failed!", error);
  // } else {
  //   // We'll never get here, as the page will redirect on success.
//   // }
// });
}

//logout of account
$scope.logout = function () {
  ref.unauth();
  console.log("successfully logged out of account");
}



})
