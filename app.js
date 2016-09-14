angular.module("noServerApp", ['ui.router','firebase', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider){

  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "home/home.html",
    controller: "homeCtrl"
  })

  .state("login", {
    url: "/login",
    templateUrl: "login/login.html",
    controller: "loginCtrl"
  })
  .state("registration", {
    url: "/register",
    templateUrl: "login/registration.html",
    controller: "registrationCtrl"
  })

// // begining of user pages
  .state("userHome", {
    url: "/userHome",
    templateUrl: "user/userHome/userHome.html",
    controller: "userHomeCtrl"
  })
      .state("createDogProfile", {
        url: "/createDogProfile",
        templateUrl: "user/createDogProfile/createProfile.html",
        controller: "createDogProfileCtrl"
      })
      .state("userRequest", {
        url: "/userRequest",
        templateUrl: "user/userRequest/userRequest.html",
        controller: "userRequestCtrl"
      })

  // beg of admin pages
  .state("adminHome", {
    url: "/adminHome",
    templateUrl: "admin/adminHome/adminHome.html",
    controller: "adminHomeCtrl"
    })

    $urlRouterProvider.otherwise('/')

    $mdThemingProvider.theme('docs-dark', 'default')
  .primaryPalette('yellow')
  .dark();

})
