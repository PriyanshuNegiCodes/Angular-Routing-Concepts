import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NiitComponent } from './niit/niit.component';
import { SoftwareComponent } from './software/software.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CardViewComponent } from './card-view/card-view.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
{path:'home', component:NiitComponent},
{path:'software', component:SoftwareComponent},
{path:'product', component:ProductComponent},
{path: 'card-view/:url', component:CardViewComponent},

{path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
