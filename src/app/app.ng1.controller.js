import angular from 'angular';

import '../style/app.css';

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

angular.module('app')
       .controller('AppCtrl', AppCtrl);
