'use strict';

angular
  .module('bensiteApp')
    .controller('PortfolioCtrl', function ($scope) {
      $scope.carouselInterval = 5000;
      $scope.rightWellHeader = "My Portfolio";
      $scope.rightWellText = "I have been in the startup space for the last 4 years. During that time, I have been involved in a wide variety of functional areas which include marketing, UI/UX design, web analytics, growth hacking. Additionally, I have also become a full stack web developer with a focus in RoR and AngularJS. I am currently working as a freelance consultant and below are a list of the projects I am currently working on.";
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
