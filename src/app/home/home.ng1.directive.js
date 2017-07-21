import angular from 'angular';

let home = () => {
  return {
    template: require('./home.ng1.html'),
    controller: 'HomeCtrl',
    controllerAs: 'home'
  }
}

angular.module('app').directive('home', home);
