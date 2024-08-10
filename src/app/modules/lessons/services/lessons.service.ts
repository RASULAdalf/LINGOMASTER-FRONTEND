import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import {  timeout } from 'rxjs';
import { WebSocketService } from '../../../services/web-socket.service';
import { LoadingService } from '../../../services/loading.service';
@Injectable({
  providedIn: 'root'
})

export class LessonsService {
   LessonsData:any[] = []
  constructor(private httpService:HttpService,private webSocketService:WebSocketService,private loadingService:LoadingService) { }
  public generateLessons(lang:any='English'){
    return new Promise((reject,resolve)=>{
      if (this.LessonsData.length>0) {
        resolve;

      }
      this.loadingService.progrssBarLoadingState.next(true);
      this.webSocketService.emit('lessonGen',{prefLang:lang});
      this.webSocketService.listen('lessonResp').subscribe((data)=>{
       this.LessonsData = data?.data;
       this.loadingService.progrssBarLoadingState.next(false);
       resolve;
      },(error)=>{
        reject(error);
      })
    })
    
    
    }
  
}


