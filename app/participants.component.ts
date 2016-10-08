import { Component, OnInit } from '@angular/core';

import { ParticipantsService } from './participants.service';

@Component({
    selector: 'participants',
    template: `
        <h2>Participants</h2>
        <ul *ngIf="participants">
            <li *ngFor="let participant of participants">
                {{participant}}
                <button (click)="remove(participant)">Remove</button>
            </li>
        </ul>
        <div>
            <label>Name:</label>
            <input #name />
            <button (click)="add(name.value); name.value=''">Add</button>
        </div>
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

    add(name: string): void {
        this.participantsService.addParticipant(name)
            .then(() => {
                this.participantsService.getParticipants()
                    .then(participants => this.participants = participants);
            });
    }

    remove(name: string): void {
        this.participantsService.removeParticipant(name)
            .then(() => {
                this.participantsService.getParticipants()
                    .then(participants => this.participants = participants);
            })
    }
}