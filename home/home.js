'use strict';

angular
  .module('bensiteApp')
    .controller('HomeCtrl', function ($scope, TextService) {

      TextService.getText('home.json').success(function(data){
        $scope.leftHeader = data[0]["leftHeader"];
        $scope.leftSubheader = data[0]["leftSubheader"];
        $scope.leftText = data[0]["leftText"];
        $scope.rightHeader = data[0]["rightHeader"]
      });
    });
