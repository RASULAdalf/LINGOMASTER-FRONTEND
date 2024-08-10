import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { LoadingService } from './loading.service';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private BaseUrl = 'http://localhost:8080';
  private socket:any;
  constructor(private loadingService:LoadingService) { 
    this.socket = io.connect(this.BaseUrl);

    
  }

  public listen(eventName:any):Observable<any>{
    return new Observable((subscriber)=>{
      this.socket.on(eventName,(data: any)=>{
        console.log(data);
        
        subscriber.next(data);
      })
    })
  }

  public emit(eventName:string,data:any){
    this.socket.emit(eventName,data);
  }
}
