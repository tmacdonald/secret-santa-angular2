import {Component, OnInit } from '@angular/core';

import { Participant, ParticipantsService } from './participants.service';

@Component({
    selector: 'relationships',
    template: `
        <h2>Relationships</h2>
        <ul>
            <li 
                *ngFor="let participant of participants" 
                [class.active]="selectedParticipant === participant"
                (click)="selectParticipant(participant)">
                {{participant.name}}
            </li>
        </ul>
        
        <div *ngIf="selectedParticipant">
            <ul>
                <li
                    *ngFor="let participant of availableParticipants"
                    [class.selected]="isParticipantSelected(participant)"
                    (click)="toggleRelationship(participant)">
                    {{participant.name}}    
                </li>
            </ul>
        </div>
    `,
    styles: [
        `
            .active {
                background: yellow;
            }
            
            .selected {
                background: red;
            }
        `
    ],
    providers: [ ParticipantsService ]
})
export class RelationshipsComponent implements OnInit {
    private selectedParticipant: Participant;
    private participants: Participant[];
    private availableParticipants: Participant[];

    constructor(private participantsService : ParticipantsService) {
    }

    ngOnInit(): void {
        this.participants = this.participantsService.getParticipants();
    }

    selectParticipant(participant: Participant): void {
        this.selectedParticipant = participant;
        this.availableParticipants = this.participants.filter(p => p !== this.selectedParticipant);

    }

    isParticipantSelected(participant: Participant): boolean {
        return this.selectedParticipant.relationshipIds.some(id => id === participant.id);
    }

    toggleRelationship(participant: Participant): void {
        if (this.selectedParticipant.relationshipIds.find(id => id === participant.id)) {
            this.selectedParticipant.relationshipIds = this.selectedParticipant.relationshipIds.filter(id => id !== participant.id);
        } else {
            this.selectedParticipant.relationshipIds.push(participant.id);
        }

        this.participantsService.updateParticipant(this.selectedParticipant);
    }
}