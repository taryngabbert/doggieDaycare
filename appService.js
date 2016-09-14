angular.module("noServerApp")
.service("appService", function($firebaseArray){
  var usersRef = new Firebase("https://doggiedaycare.firebaseio.com"+"/users");
  var authData = usersRef.getAuth();
  var customId = authData.uid;

  this.redirection= function() {
    if (!customId) {
      $state.go("login");
    }
  }


  this.findUser = function () {


      return $firebaseArray(usersRef).$loaded().then(function( res ) {
        for (var i=0; i<res.length; i++) {
          if (res[i].userId == customId ) {
            return res[i];
          }
        }
      })
      }

      // usersRef.once("value", function(snapshot) {
      //   // The callback function will get called twice, once for "fred" and once for "barney"
      //   snapshot.forEach(function(childSnapshot) {
      //     var childData = childSnapshot.val();
      //     if (customId == childData.userId) {
      //       var userData = childSnapshot.val();
      //       var userKey= childSnapshot.key();
      //       var usersRef = new Firebase("https://doggiedaycare.firebaseio.com"+"/users/"+userKey);
      //       console.log(userData);
      //       }
      //   });
      // });

// this function finds the object that is assigned to the user, and then creates a new path//
//this can be used for the dogProfile and the dogAppointment
  this.getNewRef = function (pathway) {
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
            console.log(userRef);

            }
        }); return userRef;
      });
  }





  })
