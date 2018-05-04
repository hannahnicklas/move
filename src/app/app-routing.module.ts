import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InternshipComponent } from './internship/internship.component';


import { StudyAbroadComponent } from './study-abroad/study-abroad.component';
import { MapComponent } from './study-abroad/map/map.component';
import { UniversityComponent } from './study-abroad/university/university.component';
import { UniversityGeneralComponent } from './study-abroad/university/university-general/university-general.component';
import { UniversityConsiderComponent } from './study-abroad/university/university-consider/university-consider.component';
import { UniversityExperiencesComponent } from './study-abroad/university/university-experiences/university-experiences.component';
// tslint:disable-next-line:max-line-length
import { UniversityExperienceDetailComponent } from './study-abroad/university/university-experience-detail/university-experience-detail.component';
import { UniversityCoursesComponent } from './study-abroad/university/university-courses/university-courses.component';
import { UniversityCourseDetailComponent } from './study-abroad/university/university-course-detail/university-course-detail.component';


import { ProfileComponent } from './profile/profile.component';
import { ProfileUserComponent } from './profile/profile-user/profile-user.component';
import { ProfileApplicationComponent } from './profile/profile-application/profile-application.component';
import { ProfileContactComponent } from './profile/profile-contact/profile-contact.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'internship', component: InternshipComponent },
  { path: 'studyAbroad', component: StudyAbroadComponent,
    children: [
      { path: '', redirectTo: '/studyAbroad/map', pathMatch: 'full' },
      { path: 'map', component: MapComponent },
      { path: ':id', component: UniversityComponent,
        children: [
          { path: 'general', component: UniversityGeneralComponent},
          { path: 'consider', component: UniversityConsiderComponent},
          { path: 'experiences', component: UniversityExperiencesComponent},
          { path: 'experiences-detail', component: UniversityExperienceDetailComponent},
          { path: 'courses', component: UniversityCoursesComponent},
          { path: 'course-detail', component: UniversityCourseDetailComponent}
        ]
      }
    ]
  },
  { path: 'profile', component: ProfileComponent,
  children: [
      { path: '', redirectTo: '/profile/user', pathMatch: 'full' },
      { path: 'user', component: ProfileUserComponent },
      { path: 'application', component: ProfileApplicationComponent },
      { path: 'contact', component: ProfileContactComponent }
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
