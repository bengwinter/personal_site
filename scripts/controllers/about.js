'use strict';

/**
 * @ngdoc function
 * @name bensiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bensiteApp
 */
angular.module('bensiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
