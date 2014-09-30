'use strict';

angular
  .module('bensiteApp')
    .controller('HomeCtrl', function ($scope) {
      $scope.rightWellHeader = "Site Map";
      $scope.leftWellHeader = "Ben Winter";
      $scope.leftWellText = "Full Stack Web Developer, UI/UX Designer, Growth Hacker"
    });
