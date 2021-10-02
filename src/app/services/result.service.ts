import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL_SERVICE } from '../config/url-service-result';

import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Result } from '../models/result';


@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  saveResult(result:Result) : Observable<any>{

    let url = `${URL_SERVICE}/guardarResultado`

    const AUTH_DATA = {
      ...result
    }

    return this.http.post(url, AUTH_DATA)
    .pipe(
      map((res: any) => {
        return res
      }))
  }
  
  getResult(): Observable<any> {

    let url = `${URL_SERVICE}/obtenerResultados`

    return this.http.get<string>(url).pipe(
      map((res: any) => {
        return res['resultados']
      }))

  }

  deleteResults(): Observable<any>  {
    let url = `${URL_SERVICE}/borrarResultados`
    return this.http.delete(url);
  }

}
