'use strict';

angular
  .module('bensiteApp')
    .controller('NavbarCtrl', function ($scope, $location) {
      $scope.isActive = function (viewLocation) { 
        var viewLocationString = viewLocation.substring(1);
        return viewLocationString === $location.path();
      };
    });
