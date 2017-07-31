import angular from 'angular';

let helloWorldsNg1 = () => {
  return {
    restrict: 'E',
    template: require('./hello-worlds-ng1.ng1.html'),
    controller: 'HelloWorldsNg1Ctrl',
    controllerAs: 'hw1'
  };
}

angular.module('app').directive('helloWorldsNg1', helloWorldsNg1);
