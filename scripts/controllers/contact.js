'use strict';

angular
  .module('bensiteApp')
    .controller('ContactCtrl', function ($scope) {
      $scope.rightWellHeader = "Contact Me Yay";
      $scope.rightWellText = "Placeholder Text";
      $scope.leftWellHeader = "Contact Form Header";
      $scope.leftWellText = "Contact Me Form";
    });
