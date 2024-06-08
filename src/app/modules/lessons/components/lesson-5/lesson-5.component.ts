import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../../../../services/lessons.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson-5',
  templateUrl: './lesson-5.component.html',
  styleUrl: './lesson-5.component.scss'
})
export class Lesson5Component {
  public code:any = '';
  index:any;
  iframeSrc: any;
    constructor(private activatedRoute:ActivatedRoute, private lessonService:LessonsService,private sanitizer:DomSanitizer){
      this.activatedRoute.paramMap.subscribe(data=>{
        
        this.index = Number(data?.get('index'));
        console.log(this.index);
        
      })
  
      this.code = this.lessonService.LessonsData[this.index];
      const blob = new Blob([this.code], { type: 'text/html' });
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
      console.log(this.lessonService.LessonsData);
    }
  
}
