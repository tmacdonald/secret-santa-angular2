import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ParticipantsComponent } from './participants.component';
import { RelationshipsComponent } from './relationships.component';
import { ResultsComponent } from './results.component';

@NgModule({
    imports: [ 
        BrowserModule,
        RouterModule.forRoot([
            {
                path: 'participants',
                component: ParticipantsComponent
            },
            {
                path: 'relationships',
                component: RelationshipsComponent
            },
            {
                path: 'results',
                component: ResultsComponent
            }
        ])
    ],
    declarations: [ 
        AppComponent,
        ParticipantsComponent,
        RelationshipsComponent,
        ResultsComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}