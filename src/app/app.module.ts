import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatIconModule } from '@angular/material/icon';
import {
  MatButtonModule,
  MatBadgeModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';

// import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

import { VisaComponent } from './visa/visa.component';
import { HousingComponent } from './housing/housing.component';
import { FacilityReportComponent } from './housing/facility-report/facility-report.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    ToolbarComponent,
    SidenavListComponent,
    FacilityReportComponent,
    VisaComponent,
    HousingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
