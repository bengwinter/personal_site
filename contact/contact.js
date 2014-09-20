'use strict';

angular
  .module('bensiteApp')
    .controller('ContactCtrl', function ($scope) {
      $scope.WellHeader = "Contact Me";
      $scope.WellText = "Placeholder Text";
      $scope.submitMessage = "";

      $scope.save = function() {
          $scope.$broadcast('show-errors-check-validity');
          
          if ($scope.contactForm.$valid) {
            $scope.submitMessage = 'Thank you for contacting me. I will get back to you within the next 48 hours.';
            $scope.reset();
          }
        };
        
      $scope.reset = function() {
        $scope.$broadcast('show-errors-reset');
        $scope.contact = { firstName: '', lastName: '', email: '', message: '' };
      }

    });
