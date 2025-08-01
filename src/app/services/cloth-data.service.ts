import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clothes } from '../clothes-list/Clothes';

const URL = 'https://my-json-server.typicode.com/joacohevia/Api-Angular/clothes';

@Injectable({
  providedIn: 'root'
})
export class ClothDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Clothes[]>{
    //consume la api del componente clothe list
    return this.http.get<Clothes[]>(URL)//devuelve un OBSERVABLE

  }
}
