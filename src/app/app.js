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

require('./app.ng1.controller.js');
require('./app.ng1.directive.js');
require('./home/home.ng1.directive.js');
require('./home/home.ng1.controller.js');
