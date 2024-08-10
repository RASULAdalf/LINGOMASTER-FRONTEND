import { Component } from '@angular/core';
import { LessonsService } from './services/lessons.service';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss'
})
export class LessonsComponent {
  constructor(public lessonService:LessonsService,private router:Router,public loadingService:LoadingService) {
    if (this.lessonService.LessonsData.length>0) return;
    
    this.lessonService.generateLessons(prompt("Enter your language"))
  }

  ngOnInit(): void {
    
  }

  
}
