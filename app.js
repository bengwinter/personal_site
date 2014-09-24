'use strict';

angular
  .module('bensiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $httpProvider) {

    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'about/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'contact/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'portfolio/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });