export class Card {
    firstname:string;
    lastname:string;
    votes : number;
    constructor(
        firstname: string,
        lastname:string,
        votes:number
    )
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.votes=votes;
    }
    get name(): string{
        return this.firstname + ' ' + this.lastname;
    }
}
