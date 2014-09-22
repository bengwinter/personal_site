'use strict';

angular
  .module('bensiteApp')
    .controller('AboutCtrl', function ($scope) {
      $scope.carouselInterval = 3000;
      $scope.rightWellHeader = "About Me";
      $scope.rightWellText = "Placeholder Text";
      $scope.leftWellHeader = "About Me Carousel";
      var slides = $scope.slides = [];
      
      for (var i=1; i<9; i++) {
        slides.push({
          image: 'https://s3.amazonaws.com/BenWinter.co/about_' + i + '.jpg',
          text: ['Picture ' + i]
        });
      }
      
    });