import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NiitComponent } from './niit/niit.component';
import { SoftwareComponent } from './software/software.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CardViewComponent } from './card-view/card-view.component';
import { LoginComponent } from './login/login.component';
import { CourseMaterialComponent } from './course-material/course-material.component';
import { CanActivateGuard } from './services/can-activate.guard';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { CanDeactivatedTeam } from './services/can-deactivated.service';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
{path:'home', component:NiitComponent},
{path:'software', component:SoftwareComponent},
{path:'product', component:ProductComponent},
{path: 'card-view/:url', component:CardViewComponent},
{path: 'login', component:LoginComponent},
{path: 'coursematerial', component:CourseMaterialComponent, canActivate:[CanActivateGuard]},
{path: 'enquiry', component:EnquiryComponent, canDeactivate:[CanDeactivatedTeam]},
{path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
