import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Link} from '../Links'

import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'text/plaintext'
  })
}
@Injectable({
  providedIn: 'root'
})
export class LinkService {
 private apiUrl = 'https://api.shrtco.de/v2/shorten'
  constructor(private http:HttpClient) { }
    postLink(link: string):Observable<string> {
    // return this.http.post<string>(this.apiUrl , `${link}`);
     return this.http.post<string>(this.apiUrl + '?url=' + link, httpOptions)
  }
}
