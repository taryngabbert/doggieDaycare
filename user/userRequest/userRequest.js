angular.module("noServerApp")

.controller("userRequestCtrl", function($scope, $firebaseArray, $state) {
  var usersRef = new Firebase("https://doggiedaycare.firebaseio.com"+"/users");
  var authData = usersRef.getAuth();
  var customId =authData.uid;
  console.log(customId);


      $scope.serviceType= ["Doggie Daycare", "Boarding", "Grooming: Bath", "Grooming: Bath and Cut"]

        $scope.submitServiceReq = function(){
            var appInfo= {
              serviceType: $scope.typeService,
              serviceFor: $scope.serviceDog,
              date: $scope.serviceDate.toString(),
              notes: $scope.serviceNotes,
              status: "Pending",
              payment: "Pending",
              userid: customId
            }
          var userRef= new Firebase("https://doggiedaycare.firebaseio.com/request");
          userRef.push(appInfo);
          $state.go("userHome");
      };


  })
