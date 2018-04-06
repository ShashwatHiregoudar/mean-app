// import { Injectable } from '@angular/core';
import { Injectable } from '../../node_modules/@angular/core';
import { Http, Headers } from '@angular/http';
import { Lawyer } from './lawyer';
import 'rxjs/add/operator/map';
@Injectable()
export class LawyerService {

  constructor(private http: Http) { }

  getLawyers() {
    return this.http.get('http://localhost:3000/api/lawyers_get')
          .map(res => res.json());
  }
  addLawyer(newLawyer) {
    const headers = new Headers();
    headers.append('Content-type', 'appliction/json');
    return this.http.post('http://localhost:3000/api/lawyer_add', newLawyer, {headers: headers})
          .map(res => res.json());
  }
  deleteLawyer(id){
    return this.http.delete('http://localhost:3000/api/lawyer_del/'+ id)
          .map(res => res.json());
  }

}
