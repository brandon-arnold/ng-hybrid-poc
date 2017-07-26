import angular from 'angular';
import 'ng-redux';
import './app.css';
import '@uirouter/angularjs';
import { sharedReduxEnhancer } from './sharedReduxEnhancer';

angular.module('app', ['ngRedux', 'ui.router'])
       .config(config);

config.$inject = ['$ngReduxProvider', '$locationProvider', '$stateProvider'];

function config($ngReduxProvider, $locationProvider, $stateProvider) {
  $ngReduxProvider.createStoreWith(state => state, [], sharedReduxEnhancer);
  
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });

  $locationProvider.hashPrefix('!');
}

require('./home/home.ng1.js');
require('./home/home.ng1.directive.js');
require('./home/home.ng1.controller.js');
