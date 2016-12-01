import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Colonist, NewColonist } from '../models';
import 'rxjs/add/operator/map';

@Injectable()
export default class ColonistsService {
COLONIST_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

  constructor( private http: Http) { }

  submitColonist(colonist: NewColonist): Observable<Colonist> {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.COLONIST_JSON, {colonist}, {headers})
                      .map((res: Response) => res.json().colonist);
  }
}
