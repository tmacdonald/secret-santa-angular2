import { Injectable } from '@angular/core';

export class Participant {
    id: number;
    name: string;
    relationshipIds: number[] = [];
}

@Injectable()
export class ParticipantsService {
    private participants: Participant[];

    constructor() {
        this.participants = JSON.parse(localStorage.getItem('secret-santa.participants')) as Participant[] || [];
    }

    getParticipants(): Participant[] {
        return this.participants;
    }

    addParticipant(name: string): void {
        let participant = new Participant();
        participant.name = name;
        participant.id = this.participants.length + 1;
        this.participants.push(participant);

        this.updateStore();
    }

    updateParticipant(participant: Participant): void {
        this.updateStore();
    }

    removeParticipant(participant: Participant): void {
        this.participants = this.participants.filter(p => p.id !== participant.id);

        this.updateStore();
    }

    private updateStore(): void {
        localStorage.setItem('secret-santa.participants', JSON.stringify(this.participants));
    }
}