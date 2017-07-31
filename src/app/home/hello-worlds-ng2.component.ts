import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../reduxTypes';
import { fetchNewHelloWorld } from '../../actions';

class HelloWorlds {
    collection: Array<String>;
}

@Component({
    selector: 'hello-worlds-ng2',
    template: require('./hello-worlds-ng2.ng2.html')
})
export class HelloWorldsComponent {

    helloWorlds: HelloWorlds;

    constructor(private ngRedux: NgRedux<IAppState>) {
        fetchNewHelloWorld()(this.ngRedux.dispatch);
        this.ngRedux.select<HelloWorlds>('helloWorlds')
            .subscribe(helloWorlds => this.helloWorlds = helloWorlds);
    }

    fetchNewHelloWorld() {
        fetchNewHelloWorld()(this.ngRedux.dispatch);
        let state = this.ngRedux.getState();
    }
}
