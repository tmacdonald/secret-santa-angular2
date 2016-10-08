import { Injectable } from '@angular/core';

export class Participant {
    name: string
}

@Injectable()
export class ParticipantsService {
    getParticipants(): Promise<string[]> {
        return Promise.resolve(JSON.parse(localStorage.getItem('secret-santa.participants')) as string[]);
    }

    saveParticipants(participants: string[]): void {
        localStorage.setItem('secret-santa.participants', JSON.stringify(participants));
    }
}