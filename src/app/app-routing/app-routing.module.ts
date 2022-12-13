import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';

import { SignupComponent } from '../signup/signup.component';
import { FacilityReportComponent } from '../housing/facility-report/facility-report.component';
import { VisaComponent } from '../visa/visa.component';
import { HousingComponent } from '../housing/housing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'housing/report', component: FacilityReportComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'visastatus', component: VisaComponent },
  { path: 'housing', component: HousingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
