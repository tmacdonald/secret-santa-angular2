import { Component } from '@angular/core';

@Component({
    selector: 'secret-santa-app',
    template: `
        <h1>Secret Santa</h1>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}