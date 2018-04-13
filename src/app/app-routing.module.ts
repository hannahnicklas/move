import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InternshipComponent } from './internship/internship.component';
import { StudyAbroadComponent } from './study-abroad/study-abroad.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUserComponent } from './profile/profile-user/profile-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'internship', component: InternshipComponent},
  { path: 'studyAbroad', component: StudyAbroadComponent},
  { path: 'profile', component: ProfileComponent,
  children: [
    {path: '', redirectTo: '/profile/user', pathMatch: 'full'},
    { path: 'user', component: ProfileUserComponent}
  ]


}
];


@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
