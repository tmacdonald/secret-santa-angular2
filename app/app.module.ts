import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ParticipantsComponent } from './participants.component';
import { RelationshipsComponent } from './relationships.component';
import { ResultsComponent } from './results.component';
import { PastResultsComponent } from "./past.results.component";
import {ParticipantsService} from "./participants.service";
import {ResultsService} from "./results.service";

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
                path: 'past-results',
                component: PastResultsComponent
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
        PastResultsComponent,
        ResultsComponent
    ],
    providers: [ ParticipantsService, ResultsService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}