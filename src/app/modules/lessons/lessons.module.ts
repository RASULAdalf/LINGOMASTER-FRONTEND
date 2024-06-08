import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';
import { Lesson1Component } from './components/lesson-1/lesson-1.component';
import { Lesson2Component } from './components/lesson-2/lesson-2.component';
import { Lesson3Component } from './components/lesson-3/lesson-3.component';
import { Lesson4Component } from './components/lesson-4/lesson-4.component';
import { Lesson5Component } from './components/lesson-5/lesson-5.component';
import { LessonExtraComponent } from './components/lesson-extra/lesson-extra.component';


@NgModule({
  declarations: [
    LessonsComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Lesson4Component,
    Lesson5Component,
    LessonExtraComponent
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    MatCardModule,

  ]
})
export class LessonsModule { }
