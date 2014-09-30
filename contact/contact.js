'use strict';

angular
  .module('bensiteApp')
    .controller('ContactCtrl', function ($scope, $http) {
      $scope.WellHeader = "Contact Me";
      $scope.WellText = "To contact me, please fill out the form below. I will respond within the next 24-48 hours.";
      $scope.submitMessage = "";
      $scope.submitMessageClass = "no-message";

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
            $scope.submitMessage = 'Thank you for contacting me. I will get back to you shortly.';
            $scope.submitMessageClass = 'alert-success alert';
          }).error(function() {
            console.log("error");
            $scope.submitMessageClass = 'alert-danger alert';
            $scope.submitMessage = 'There was an error submitting your request.';
            
          });
        };
      }

      $scope.reset = function() {
        $scope.$broadcast('show-errors-reset');
        $scope.contact = { firstName: '', lastName: '', email: '', message: '' };
        $scope.submitMessage = '';
        $scope.submitMessageClass = 'no-message';
      }

    });
