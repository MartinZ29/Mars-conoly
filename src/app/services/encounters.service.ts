import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
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

    submitRncounter(encounter: newEncounter) : Observable<Encounter> {

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.ENCOUNTER_JSON, encounter, { headers})
                    .map((res: Response) => res.json().encounter);
    }
}
