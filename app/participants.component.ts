import { Component, OnInit } from '@angular/core';

import { ParticipantsService } from './participants.service';

@Component({
    selector: 'participants',
    template: `
        <h2>Participants</h2>
        <ul *ngIf="participants">
            <li *ngFor="let participant of participants">
                {{participant}}
            </li>
        </ul>
    `,
    providers: [ ParticipantsService ]
})
export class ParticipantsComponent implements OnInit {
    private participants: string[];

    constructor(private participantsService: ParticipantsService) {
    }

    ngOnInit(): void {
        this.participantsService.getParticipants()
            .then(participants => this.participants = participants);
    }
}