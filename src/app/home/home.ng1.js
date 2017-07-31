import angular from 'angular';

angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $stateProvider.state('home', {
      abstract: true,
      template: '<ui-view />',
    }).state('home.home', {
      url: '/',
      template: require('./home.ng1.html')
    });
  }]);
