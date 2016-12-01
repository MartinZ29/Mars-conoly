export class NewColonist {
    constructor(
        public name : string,
        public job_id : string,
        public age : number
    ){}
}

export interface Colonist {
    name:string;
    id:number;
    age:number;
    job:Job;
}

export interface Job {
    name : string;
    id : number;
    description : string;
}

export interface Aliens {
        type : string;
        submitted_by : string;
        id : number;
        description : string;
}

export class newEncounter {
    constructor (
        public atype: string,
        public action: string,
        public date: string,
        public colonist_id: string,
    ) {}
}

export interface Encounter {
        atype: string,
        date: string,
        action: string,
        colonist_id: number,
        id: number,
}