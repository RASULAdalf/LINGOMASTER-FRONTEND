import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponentComponent} from './components/about-us-component/about-us-component.component'
import { ChatComponentComponent } from './components/chat-component/chat-component.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'home',component:AppComponent},
  {path: 'about', component:AboutUsComponentComponent},
  {path: 'chat', component:ChatComponentComponent},
  { path: 'lessons', loadChildren: () => import('./modules/lessons/lessons.module').then(m => m.LessonsModule) },
  { path: 'games', loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule) },
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
