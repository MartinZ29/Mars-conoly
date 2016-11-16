import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Encounter } from '../models';

@Injectable()
export default class EncountersService {


ENCOUNTER_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

  constructor() { }


}
