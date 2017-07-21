import angular from 'angular';

import { fetchHelloWorlds } from '../../actions';

class HomeCtrl {
  constructor($ngRedux) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.$ngRedux = $ngRedux;
  }

  $onInit() {
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToTarget, { fetchHelloWorlds })(this);
    this.fetchHelloWorlds();
  }

  mapStateToTarget(state) {
    return {
      helloWorlds: state.helloWorlds.collection
    };
  }
}

HomeCtrl.$inject = ['$ngRedux'];

angular.module('app').controller('HomeCtrl', HomeCtrl);
