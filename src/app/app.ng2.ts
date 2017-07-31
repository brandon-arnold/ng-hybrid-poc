import './app.ng1';
import * as angular from 'angular';
import { store, sharedReduxEnhancer } from './sharedReduxEnhancer';
import '../polyfills.ts';
import { UpgradeModule } from '@angular/upgrade/static';
import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { Store } from 'redux';
import { downgradeComponent } from '@angular/upgrade/static';
import { IAppState } from './reduxTypes';
import { HelloWorldsNg2Component } from './components/hello-worlds-ng2/hello-worlds-ng2.component';
import { initialState } from '../reducers';

let ng2Redux: any;

@NgModule({
    entryComponents: [HelloWorldsNg2Component],
    declarations: [HelloWorldsNg2Component],
    imports: [BrowserModule, UpgradeModule, NgReduxModule ]
})
class AppModule {
  constructor(
    private upgrade: UpgradeModule,
    private ngRedux: NgRedux<IAppState>
  ) {
      ng2Redux = this.ngRedux;
      ng2Redux.provideStore(store as Store<IAppState>);
  }
  ngDoBootstrap() { }
}


angular.element(document).ready(function () {
  platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    const injector = platformRef.injector;
    const upgrade = injector.get(UpgradeModule) as UpgradeModule;

    upgrade.bootstrap(document.body, ['app']);

    // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
    // const url: UrlService = injector.get(UrlService);

    // Instruct UIRouter to listen to URL changes
    // url.listen();
    // url.sync();
  });
});

angular.module('app')
  .directive('helloWorldsNg2',
             downgradeComponent({component: HelloWorldsNg2Component}) as angular.IDirectiveFactory);
