angular.module("noServerApp")

.controller("createDogProfileCtrl", function($scope, appService, $state) {

var link=[];

  $scope.getNewRef = function (pathway) {
      var usersRef = new Firebase("https://doggiedaycare.firebaseio.com"+"/users");
      var authData = usersRef.getAuth();
      var customId = authData.uid;

      return usersRef.once("value", function(snapshot) {
        var userRef= "";
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          if (customId == childData.userId) {
            var userData = childSnapshot.val();
            var userKey= childSnapshot.key();
            userRef ="https://doggiedaycare.firebaseio.com/users/"+userKey+"/"+pathway;
            link.push(userRef);

            }
        }); return userRef;
      });
  }
  var dogRef=$scope.getNewRef("dogProfile/");

  $scope.genders= ["Male", "Female"]

  $scope.addDogProfile = function(){
      var dogInfo= {
        dogName: $scope.dogName,
        breed: $scope.breed,
        birthday: $scope.birthday,
        weight: $scope.weight,
        gender: $scope.gender,
        description: $scope.description,
        imageUrl: $scope.imageUrl,
        specialNotes: $scope.specialDetails,
        vet: $scope.vet,
        vaccinations: "Pending"
      }

    var userRef= new Firebase(link[0]);
    userRef.push(dogInfo);
    $state.go("userHome");

};






})
