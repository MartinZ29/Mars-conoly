import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Encounter, newEncounter } from '../models';
import 'rxjs/add/operator/map';

@Injectable()
export default class EncountersService {


ENCOUNTER_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

  constructor( private http: Http) { }

    getEncounters():Observable<Encounter[]> {
      return this.http.get(this.ENCOUNTER_JSON)
                  .map((res: Response) => res.json().encounters);
    }

    submitRncounter(encounter: newEncounter) : Encounter()
}
