import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './settings/settings.component';
import { SetproductComponent } from './admin/setproduct/setproduct.component';
import { AdmintabComponent } from './admin/admintab/admintab.component';

const routes: Routes = [
	{path: '', redirectTo: '/aboutus', pathMatch:'full'},
	{path: 'settings', component: SettingsComponent},
	{path: 'admin', component: AdmintabComponent},
	{path: 'aboutus', component: AboutusComponent},
	{path: 'setproduct', component: SetproductComponent},
	{path: '**', redirectTo: '/aboutus', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
