'use strict';

angular
  .module('bensiteApp')
    .controller('PortfolioCtrl', function ($scope, TextService) {


      TextService.getText('portfolio.json').success(function(data){
        $scope.header = data[0]["header"];
        $scope.workList = data[0]["workList"];
      });




      $scope.carouselInterval = 5000;
      var slides = $scope.slides = [];
      
      //need to update with picutres of projects
      for (var i=1; i<9; i++) {
        slides.push({
          image: 'https://s3.amazonaws.com/BenWinter.co/about_' + i + '.jpg',
          text: ['Picture ' + i]
        });
      }
    });
