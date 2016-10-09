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
        this.participants = this.participantsService.getParticipants();
    }

    add(name: string): void {
        this.participantsService.addParticipant(name);
    }

    remove(participant: Participant): void {
        this.participantsService.removeParticipant(participant);
    }
}