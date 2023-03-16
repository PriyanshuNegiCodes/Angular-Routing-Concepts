import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { NiitComponent } from './niit/niit.component';
import { SoftwareComponent } from './software/software.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CardViewComponent } from './card-view/card-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { CourseMaterialComponent } from './course-material/course-material.component';

@NgModule({
  declarations: [
    AppComponent,
    NiitComponent,
    SoftwareComponent,
    ProductComponent,
    PagenotfoundComponent,
    CardViewComponent,
    NavigationComponent,
    NavigationBarComponent,
    LoginComponent,
    CourseMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    LayoutModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
