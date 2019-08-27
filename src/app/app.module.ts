import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ApiService} from './api.service'
import { HttpModule } from '@angular/http';
import { NgxLoadingModule } from 'ngx-loading';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
