'use strict';

angular
  .module('bensiteApp')
    .controller('AboutCtrl', function ($scope, $timeout, $modal, TextService) {

      $scope.carouselInterval = 8000;
      $scope.slides = [];

      TextService.getText('about.json').success(function(data){
        $scope.rightHeader = data[0]["rightHeader"];
        $scope.rightText = data[0]["rightText"];
        $scope.slides = data[0]["carouselSlides"];
        // $scope.facts = data[0]["funFacts"];
        // $scope.funFact = $scope.facts[0]["fact"];
      });

      
      // var factNumber = 0;

      // $scope.onTimeout = function(){
      //   if (factNumber < ($scope.facts.length - 1)){
      //     factNumber++;
      //   } else {
      //     factNumber = 0;
      //   }

      //   $scope.funFact = $scope.facts[factNumber]["fact"];
      //   factTimeout = $timeout($scope.onTimeout,5000);
      // }

      // var factTimeout = $timeout($scope.onTimeout,5000);

      $scope.openResume = function (size) {
        var resumeModal = $modal.open({
          templateUrl: 'resume/resume.html',
          controller: 'ResumeModalCtrl',
          size: size
        });
      };
      
    });