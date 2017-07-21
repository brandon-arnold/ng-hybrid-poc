import angular from 'angular';
import thunkMiddleware from 'redux-thunk';
import 'ng-redux';
import { helloWorlds } from '../reducers';

angular.module('app', ['ngRedux'])
       .config(config);

config.$inject = ['$ngReduxProvider'];

function config($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(
    { helloWorlds },
    [ thunkMiddleware ]
  );
}

require('./app.controller.js');
require('./app.directive.js');
require('./home/home.directive.js');
require('./home/home.controller.js');
