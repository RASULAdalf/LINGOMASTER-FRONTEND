import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private BaseUrl = 'https://lingomaster-backend-production.up.railway.app:8085/api/v1/';
  constructor(private http:HttpClient) { }

  public post(url:any,data:any):Observable<any>{
    return this.http.post(this.BaseUrl+url,data)
  }
  public put(url:any,data:any):Observable<any>{
    return this.http.put(this.BaseUrl+url,data)
  }

  public get(url: any):Observable<any> {
    return this.http.get(this.BaseUrl+url).pipe(timeout(60000))
}

  public delete(url: any):Observable<any> {
    return this.http.delete(this.BaseUrl+url);
  }
}

