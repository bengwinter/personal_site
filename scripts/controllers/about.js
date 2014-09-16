'use strict';

angular
  .module('bensiteApp')
    .controller('AboutCtrl', function ($scope) {
      $scope.carouselInterval = 5000;
      var slides = $scope.slides = [];
      
      for (var i=1; i<9; i++) {
        slides.push({
          image: 'https://s3.amazonaws.com/BenWinter.co/about_' + i + '.jpg',
          text: ['Picture ' + i]
        });
      }
    });