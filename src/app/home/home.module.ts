import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyMeComponent } from './components/why-me/why-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ServicesComponent,
    WhyMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxTypedJsModule,
    FontAwesomeModule
  ],

})
export class HomeModule { }
