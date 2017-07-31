import angular from 'angular';

import { fetchNewHelloWorld } from '../../../actions';

class HelloWorldsNg1Ctrl {
  constructor($ngRedux) {
    this.$ngRedux = $ngRedux;
  }

  $onInit() {
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToTarget, { fetchNewHelloWorld })(this);
    this.fetchNewHelloWorld();
  }

  mapStateToTarget(state) {
    return {
      helloWorlds: state.helloWorlds.collection
    };
  }
}

HelloWorldsNg1Ctrl.$inject = ['$ngRedux'];

angular.module('app').controller('HelloWorldsNg1Ctrl', HelloWorldsNg1Ctrl);
