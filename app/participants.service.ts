import { Injectable } from '@angular/core';

export class Participant {
    name: string
}

@Injectable()
export class ParticipantsService {
    getParticipants(): Promise<string[]> {
        return Promise.resolve(JSON.parse(localStorage.getItem('secret-santa.participants')) as string[]);
    }

    addParticipant(participant: string): Promise<void> {
        return this.getParticipants()
            .then((participants: string[]) => {
                participants.push(participant);
                this.saveParticipants(participants);
            }) 
    }

    private saveParticipants(participants: string[]): void {
        localStorage.setItem('secret-santa.participants', JSON.stringify(participants));
    }
}