import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { SetproductComponent } from './admin/setproduct/setproduct.component';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { ProductComponent } from './user/product/product.component';
import { LoginComponent } from './user/login/login.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
	{path: '', redirectTo: '/aboutus', pathMatch:'full'},
	{path: 'settings', component: SettingsComponent},
	{path: 'products', component: ProductComponent},
	{path: 'admin', component: AdmintabComponent},
	{path: 'aboutus', component: AboutusComponent},
	{path: 'setproduct', component: SetproductComponent},
	{path: 'login', component: LoginComponent},
	{path: 'updateuser', component: UpdateuserComponent},
	{path: 'signup', component: SignupComponent},
	{path: '**', redirectTo: 'products', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
