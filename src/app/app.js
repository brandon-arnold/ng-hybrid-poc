import angular from 'angular';
import { UpgradeAdapter } from '@angular/upgrade';
import thunkMiddleware from 'redux-thunk';
import 'ng-redux';
import 'angular-ui-router';
import './app.css';
import { helloWorlds } from '../reducers';

var adapter = new UpgradeAdapter();

angular.module('app', ['ngRedux', 'ui.router'])
       .config(config);

config.$inject = ['$ngReduxProvider', '$locationProvider', '$stateProvider'];

function config($ngReduxProvider, $locationProvider, $stateProvider) {
  $ngReduxProvider.createStoreWith(
    { helloWorlds },
    [ thunkMiddleware ]
  );
  
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });

  $locationProvider.hashPrefix('!');
}

require('./home/home.ng1.js');
require('./home/home.ng1.directive.js');
require('./home/home.ng1.controller.js');

adapter.bootstrap(document.body, ['app']);
