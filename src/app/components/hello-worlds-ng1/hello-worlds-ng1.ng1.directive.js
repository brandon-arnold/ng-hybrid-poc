import angular from 'angular';

let helloWorldsNg1 = () => {
  return {
    template: require('./hello-worlds-ng1.ng1.html'),
    controller: 'HelloWorldsNg1Ctrl',
    controllerAs: 'hw'
  }
}

angular.module('app').directive('hello-worlds-ng1', helloWorldsNg1);
