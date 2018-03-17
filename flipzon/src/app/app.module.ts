import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FlipserviceService } from './flipservice.service';
import{HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FlipserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
