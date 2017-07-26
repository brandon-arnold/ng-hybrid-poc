import './app.ng1';
import { UpgradeAdapter } from '@angular/upgrade';
import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
var adapter = new UpgradeAdapter(forwardRef(() => AppModule));

@NgModule({
 declarations: [],
 imports: [BrowserModule]
})
class AppModule {
}

adapter.bootstrap(document.body, ['app']);
