import angular from 'angular';

import { fetchNewHelloWorld } from '../../actions';

class HomeCtrl {
  constructor($ngRedux) {
    this.url = 'https://github.com/preboot/angular-webpack';
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

HomeCtrl.$inject = ['$ngRedux'];

angular.module('app').controller('HomeCtrl', HomeCtrl);
