import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieAppService {
  constructor(
    private http: HttpClient
  ) { }

  public getNowPlaying(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/15755be7-cee3-4b74-4382-08da496bf5f2");
  }
}
