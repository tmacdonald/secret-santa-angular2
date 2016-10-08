import { Component, OnInit } from '@angular/core';

import {ParticipantsService, Participant} from './participants.service';

@Component({
    selector: 'participants',
    templateUrl: 'app/participants.template.html',
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