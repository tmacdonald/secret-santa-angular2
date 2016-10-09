import {Component, OnInit} from "@angular/core";
import {Results, ResultPair, ResultsService} from "./results.service";
import {ParticipantsService, Participant} from "./participants.service";

@Component({
    template: `
        <h2>Past Results</h2>
        
        <table>
            <thead>
                <tr>
                    <th>Gifter</th>
                    <th>Recipient</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let pair of currentResults.pairings">
                    <td>{{getParticipantNameFor(pair.participant1Id)}}</td>
                    <td>{{getParticipantNameFor(pair.participant2Id)}}</td>
                </tr>    
            </tbody>
        </table>
        
        <select #gifter>
            <option *ngFor="let participant of participants" [value]="participant.id">{{participant.name}}</option>
        </select>
        <select #recipient>
            <option *ngFor="let participant of participants" [value]="participant.id">{{participant.name}}</option>
        </select>
        <button (click)="addPairing(gifter.value, recipient.value)">Add pairing</button>
        <button (click)="saveResults()">Save Results</button>
    `
})
export class PastResultsComponent implements OnInit {
    private currentResults: Results;
    private participants: Participant[];

    constructor(private participantsService: ParticipantsService, private resultsService: ResultsService) {}

    ngOnInit(): void {
        this.participants = this.participantsService.getParticipants();
        this.currentResults = new Results();
    }

    addPairing(gifterId: number, recipientId: number): void {
        let resultPair = new ResultPair();
        resultPair.participant1Id = gifterId;
        resultPair.participant2Id = recipientId;
        this.currentResults.pairings.push(resultPair);
    }

    saveResults(): void {
        this.resultsService.addResults(this.currentResults);
        this.currentResults = new Results();
    }

    getParticipantNameFor(id: number): string {
        return this.participants.find(p => p.id == id).name;
    }
}