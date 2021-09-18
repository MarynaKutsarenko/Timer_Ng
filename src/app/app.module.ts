import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForTimerModule } from './modules/for-timer/for-timer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ForTimerModule
  ],
  providers: [ForTimerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
