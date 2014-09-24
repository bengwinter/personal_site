'use strict';

angular
  .module('bensiteApp')
    .controller('ContactCtrl', function ($scope, $http) {
      $scope.WellHeader = "Contact Me";
      $scope.WellText = "Placeholder Text";
      $scope.submitMessage = "";

      $scope.save = function() {
        $scope.$broadcast('show-errors-check-validity');
        
        if ($scope.contactForm.$valid) {
          $scope.reset();

          var contactFirst = $scope.contactForm.firstName.$viewValue;
          var contactLast = $scope.contactForm.lastName.$viewValue;
          var contactEmail = $scope.contactForm.email.$viewValue;
          var contactMessage = $scope.contactForm.message.$viewValue;

          var data = {firstName: contactFirst, lastName: contactLast, email: contactEmail, message: contactMessage};
          //http://localhost:4567/mail
          $http({
              method  : "POST",
              url     : "http://sendgrind-sinatra.herokuapp.com/mail",
              data    : $.param(data),
              headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
          }).success(function() {
            console.log("success");
            $scope.submitMessage = 'Thank you for contacting me. I will get back to you within the next 48 hours.';
          }).error(function() {
            console.log("error");
            $scope.submitMessage = 'Error';
 
          });
        };
      }

      $scope.reset = function() {
        $scope.$broadcast('show-errors-reset');
        $scope.contact = { firstName: '', lastName: '', email: '', message: '' };
      }

    });
