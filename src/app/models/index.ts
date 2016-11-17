// export class Encounter {
//     constructor(
//         public atype : string,
//         public id : number,
//         public date : string,
//         public colonist_id : number,
//         public action : string,
//     ) {}
// }

export class NewColonist {
    constructor(
        public name : string,
        public job_id : string,
        public age : number
    ){}
}

interface Colonist {
    name:string;
    id:number;
    age:number;
    job:Job;
}

export class Job {
    constructor(
        public name : string,
        public id : number,
        public description : string,
    ){}
}

export class Aliens {
    constructor (
        public type : string,
        public submitted_by : string,
        public id : number,
        public description : string,
    ){}
}



export class newEncounter {
    constructor (
        public atype: string,
        public date: string,
        public action: string,
        public colonist_id: number,
    ) {}
}

export interface Encounter {
    constructor (
        atype: string,
        date: string,
        action: string,
        colonist_id: number,
        id: number,
    )
}