'use strict';

angular
  .module('bensiteApp')
    .controller('ContactCtrl', function ($scope, $http, TextService) {

      TextService.getText('contact.json').success(function(data){
        $scope.header = data[0]["header"];
        $scope.subheader = data[0]["subheader"];
        $scope.submitMessageSuccess = data[0]["submitMessageSuccess"];
        $scope.submitMessageFailure = data[0]["submitMessageFailure"];
      });

      $scope.submitMessage = "";
      $scope.submitMessageClass = "no-message";

      $scope.save = function() {
        $scope.$broadcast('show-errors-check-validity');
        
        if ($scope.contactForm.$valid) {

          var contactFirst = $scope.contactForm.firstName.$viewValue;
          var contactLast = $scope.contactForm.lastName.$viewValue;
          var contactEmail = $scope.contactForm.email.$viewValue;
          var contactMessage = $scope.contactForm.message.$viewValue;

          var data = {firstName: contactFirst, lastName: contactLast, email: contactEmail, message: contactMessage};
          //http://localhost:4567/mail
          $http({
              method  : "POST",
              url     : CONTACT_DOMAIN,
              data    : $.param(data),
              headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
          }).success(function() {
            console.log("success");
            $scope.submitMessage = $scope.submitMessageSuccess;
            $scope.submitMessageClass = 'alert-success alert';
            $scope.reset();
          }).error(function() {
            console.log("error");
            $scope.submitMessageClass = 'alert-danger alert';
            $scope.submitMessage = $scope.submitMessageFailure;
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
