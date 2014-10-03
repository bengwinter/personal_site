'use strict';

angular
  .module('bensiteApp')
    .controller('PortfolioCtrl', function ($scope, TextService) {

      TextService.getText('portfolio.json').success(function(data){
        $scope.header = data[0]["header"];
        $scope.positionsHeader = data[0]["positionsHeader"];
        $scope.positions = data[0]["workList"];
        $scope.projectsHeader = data[0]["projectsHeader"];
        $scope.projects = data[0]["projectList"];
        $scope.selected = data[0]["projectList"][0];
      });

      $scope.display = function(position) {
        $scope.selected = position;
      };



    });
