import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http'
import { RaceCourseDataComponent } from './race-course-data/race-course-data.component';
import {AngularMaterialModule} from './angular-material-module';
import {RaceCourseService} from './shared/race.service';

@NgModule({
  declarations: [
    AppComponent,
    RaceCourseDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
