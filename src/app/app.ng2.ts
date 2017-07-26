import './app.ng1';
import * as angular from 'angular';
import '../polyfills.ts';
import { UpgradeModule } from '@angular/upgrade/static';
import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
    declarations: [],
    imports: [BrowserModule, UpgradeModule]
})
class AppModule {
    constructor(private upgrade: UpgradeModule) { }
    ngDoBootstrap() { }
}

angular.element(document).ready(function () {
  platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    const injector = platformRef.injector;
    const upgrade = injector.get(UpgradeModule) as UpgradeModule;

    upgrade.bootstrap(document.body, ['app']);

    // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
    //const url: UrlService = injector.get(UrlService);

    // Instruct UIRouter to listen to URL changes
    // url.listen();
    // url.sync();
  });
});
