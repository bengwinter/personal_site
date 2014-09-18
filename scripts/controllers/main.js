'use strict';

angular
  .module('bensiteApp')
    .controller('MainCtrl', function ($scope) {
      $scope.rightWellHeader = "Navigation Bar";
      $scope.rightWellText = "Placeholder text";
      $scope.leftWellHeader = "Ben Winter";
      $scope.leftWellText = "Web Developer, placeholder text, insert headshot photo too";
    });
