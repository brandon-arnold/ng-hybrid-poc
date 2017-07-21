import angular from 'angular';

import './app.css';

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

angular.module('app')
       .controller('AppCtrl', AppCtrl);
