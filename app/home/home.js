'use strict';

angular
  .module('bensiteApp')
    .controller('HomeCtrl', function ($scope, TextService) {

      TextService.getText('home.json').success(function(data){        
        $scope.header = data[0]["header"]
        $scope.subHeader = data[0]["subHeader"]
        $scope.bullets = data[0]["subheaderList"]
        $scope.leftHeader = data[0]["leftHeader"]
        $scope.homePicUrl = data[0]["homePicUrl"]
      });
    });


