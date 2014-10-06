'use strict';

angular
  .module('bensiteApp')
    .controller('ResumeModalCtrl', function ($scope, $modalInstance) {

      $scope.resumeImageUrl = "https://s3.amazonaws.com/BenWinter.co/resume.jpg";

      $scope.closeResume = function () {
        $modalInstance.dismiss('cancel');
      };

    });