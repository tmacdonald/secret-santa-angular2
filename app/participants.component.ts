import { Component, OnInit } from '@angular/core';

import {ParticipantsService, Participant} from './participants.service';

@Component({
    selector: 'participants',
    template: `
        <h2>Participants</h2>
        <ul *ngIf="participants">
            <li *ngFor="let participant of participants">
                {{participant.name}}
                <button (click)="remove(participant)">Remove</button>
            </li>
        </ul>
        <div>
            <label>Name:</label>
            <input #name (keyup.enter)="add(name.value); name.value=''" />
            <button (click)="add(name.value); name.value=''">Add</button>
        </div>
    `,
    providers: [ ParticipantsService ]
})
export class ParticipantsComponent implements OnInit {
    private participants: Participant[];

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

    remove(participant: Participant): void {
        this.participantsService.removeParticipant(participant)
            .then(() => {
                this.participantsService.getParticipants()
                    .then(participants => this.participants = participants);
            })
    }
}