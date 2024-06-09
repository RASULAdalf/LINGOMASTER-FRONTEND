import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import {  timeout } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class LessonsService {
   LessonsData:any[] = []
  constructor(private httpService:HttpService) { }
  public generateLessons(lang:any='English'){
    if (this.LessonsData.length>0) return;
    this.httpService.get('lesson/suggest?prefLang='+lang).pipe(timeout({ each: 60_000 })).subscribe(data=>{
      this.LessonsData = data.data;
      console.log(this.LessonsData);
      
    })
  }
}
