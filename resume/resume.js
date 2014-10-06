'use strict';

angular
  .module('bensiteApp')
    .controller('ResumeModalCtrl', function ($scope, $modalInstance) {

      $scope.closeResume = function () {
        $modalInstance.dismiss('cancel');
      };

    });