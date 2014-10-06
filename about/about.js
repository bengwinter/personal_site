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

      // $scope.value = 0;
      // $scope.funFact = $scope.facts[$scope.value]["fact"];

      // var intervalObj = $interval(function() {
      //   $scope.value += 1;
      //   if($scope.value == 10)
      //   {
      //     $interval.cancel(intervalObj);
      //   }
      // }, 500);

      // $scope.funFactRotation = function() {

      //   $scope.funFac
        
      // }

      
    });