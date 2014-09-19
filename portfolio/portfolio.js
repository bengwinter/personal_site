'use strict';

angular
  .module('bensiteApp')
    .controller('PortfolioCtrl', function ($scope) {
      $scope.carouselInterval = 5000;
      $scope.rightWellHeader = "Portfolio";
      $scope.rightWellText = "Placeholder Text";
      $scope.leftWellHeader = "Porfolio Carousel";
      var slides = $scope.slides = [];
      
      //need to update with picutres of projects
      for (var i=1; i<9; i++) {
        slides.push({
          image: 'https://s3.amazonaws.com/BenWinter.co/about_' + i + '.jpg',
          text: ['Picture ' + i]
        });
      }
    });
