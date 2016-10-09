import {Injectable} from "@angular/core";
export class ResultPair {
    participant1Id: number;
    participant2Id: number;
}

export class Results {
    pairings: ResultPair[] = [];
}

@Injectable()
export class ResultsService {
    private results: Results[];

    public constructor() {
        this.results = JSON.parse(localStorage.getItem('secret-santa.results')) as Results[] || [];
    }

    public getResults(): Results[] {
        return this.results;
    }

    public addResults(results: Results): void {
        this.results.push(results);
        this.updateStore();
    }

    private updateStore(): void {
        localStorage.setItem('secret-santa.results', JSON.stringify(this.results));
    }
}