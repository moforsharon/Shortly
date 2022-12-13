import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Link} from '../Links'

import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class LinkService {
 private apiUrl = 'api/'
  constructor(private http:HttpClient) { }
    postLink(link: string) {
    // return this.http.post<string>(this.apiUrl , `${link}`);
     return this.http.get<string>(this.apiUrl + '?url=' + link, httpOptions)
  }
}
