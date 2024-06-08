

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NavBarComponentComponent } from './core/nav-bar-component/nav-bar-component.component';
import { AboutUsComponentComponent } from './components/about-us-component/about-us-component.component';
import { ChatComponentComponent } from './components/chat-component/chat-component.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './interceptors/loading.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    AboutUsComponentComponent,
    ChatComponentComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([loadingInterceptor]))
  ],
  bootstrap: [AppComponent]

})

export class AppModule {

}