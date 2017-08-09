import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PersianaService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getPersianas(): Observable<any> {
    // return this.http.get('/api/persianas').map(res => res.json());
    console.log(typeof(this.http.get('/api/persianas').map(res => res.json())));
    return [
      {
        name:"enrollable", 
        descripcion:"Esto es una prueba", 
        galeria: [{foto: "../assets/img/bg2.jpeg"}, {foto: "../assets/img/bg3.jpeg"}, {foto: "../assets/img/bg4.jpeg"}]
      }
    ];
  }

  countPersianas(): Observable<any> {
    return this.http.get('/api/persianas/count').map(res => res.json());
  }

  addPersiana(persiana): Observable<any> {
    return this.http.post('/api/persiana', JSON.stringify(persiana), this.options);
  }

  getPersiana(persiana): Observable<any> {
    return this.http.get(`/api/persiana/${persiana._id}`).map(res => res.json());
  }

  editPersiana(persiana): Observable<any> {
    return this.http.put(`/api/persiana/${persiana._id}`, JSON.stringify(persiana), this.options);
  }

  deletePersiana(persiana): Observable<any> {
    return this.http.delete(`/api/persiana/${persiana._id}`, this.options);
  }

}
