import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsComponent } from './lessons.component';
import { Lesson1Component } from './components/lesson-1/lesson-1.component';
import { Lesson2Component } from './components/lesson-2/lesson-2.component';
import { Lesson3Component } from './components/lesson-3/lesson-3.component';
import { Lesson4Component } from './components/lesson-4/lesson-4.component';
import { Lesson5Component } from './components/lesson-5/lesson-5.component';

const routes: Routes = [
  { path: '', component: LessonsComponent },
  { path: '0/:index', component: Lesson1Component },
  { path: '1/:index', component: Lesson2Component },
  { path: '2/:index', component: Lesson3Component },
  { path: '3/:index', component: Lesson4Component },
  { path: '4/:index', component: Lesson5Component },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
