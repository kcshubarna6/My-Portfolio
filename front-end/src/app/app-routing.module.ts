import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'contact-about',component:FooterComponent},
  {path:'technology',component:FooterComponent},
  {path:'about-me',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

