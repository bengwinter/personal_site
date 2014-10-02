'use strict';

angular
  .module('bensiteApp')
    .controller('HomeCtrl', function ($scope, TextService) {

      TextService.getText('home.json').success(function(data){        
        $scope.rightHeader = data[0]["rightHeader"]
        $scope.bullets = data[0]["subheaderList"]
        $scope.leftHeader = data[0]["leftHeader"]
        $scope.homePicUrl = data[0]["homePicUrl"]
      });
    });


