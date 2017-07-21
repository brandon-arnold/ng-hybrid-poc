import angular from 'angular';

let home = () => {
  return {
    template: require('./home.html'),
    controller: 'HomeCtrl',
    controllerAs: 'home'
  }
}

angular.module('app').directive('home', home);
