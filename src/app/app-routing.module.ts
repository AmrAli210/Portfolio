import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './home/components/services/services.component';
import { WhyMeComponent } from './home/components/why-me/why-me.component';
import { SkillsComponent } from './home/components/skills/skills.component';
import { ProjectsComponent } from './home/components/projects/projects.component';
import { ContactComponent } from './home/components/contact/contact.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'why-me', component: WhyMeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo:'/home' , pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
