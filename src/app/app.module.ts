import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { InternshipComponent } from './internship/internship.component';
import { StudyAbroadComponent } from './study-abroad/study-abroad.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    InternshipComponent,
    StudyAbroadComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
