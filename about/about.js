'use strict';

angular
  .module('bensiteApp')
    .controller('AboutCtrl', function ($scope, $interval, TextService) {

      $scope.carouselInterval = 4000;
      $scope.slides = [];

      TextService.getText('about.json').success(function(data){
        $scope.rightHeader = data[0]["rightHeader"];
        $scope.rightText = data[0]["rightText"];
        $scope.slides = data[0]["carouselSlides"];
        $scope.facts = data[0]["funFacts"];
      });

      
    });