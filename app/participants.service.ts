import { Injectable } from '@angular/core';

export class Participant {
    id: number;
    name: string;
    relationshipIds: number[] = [];
}

@Injectable()
export class ParticipantsService {
    getParticipants(): Promise<Participant[]> {
        return Promise.resolve(JSON.parse(localStorage.getItem('secret-santa.participants')) as Participant[] || []);
    }

    addParticipant(name: string): Promise<void> {
        return this.getParticipants()
            .then((participants: Participant[]) => {
                let participant = new Participant();
                participant.name = name;
                participant.id = participants.length + 1;
                participants.push(participant);
                this.saveParticipants(participants);
            }) 
    }

    removeParticipant(participant: Participant): Promise<void> {
        return this.getParticipants()
            .then((participants: Participant[]) => {
                participants = participants.filter(p => p.id !== participant.id);
                this.saveParticipants(participants);
            });
    }

    private saveParticipants(participants: Participant[]): void {
        localStorage.setItem('secret-santa.participants', JSON.stringify(participants));
    }
}