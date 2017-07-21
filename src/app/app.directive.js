import angular from 'angular';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

angular.module('app').directive('app', app);
