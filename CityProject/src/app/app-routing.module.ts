import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitysComponent } from './citys/citys.component';
import { CityNamesComponent } from './city-names/city-names.component';
import { BaselComponent } from './city-names/basel/basel.component';
import { LuzernComponent } from './city-names/luzern/luzern.component';
import { ZurichComponent } from './city-names/zurich/zurich.component';
import { LuzernDetailsComponent } from './luzern-details/luzern-details.component';
import { ZurichDetailsComponent } from './zurich-details/zurich-details.component';
import { BaselnDetailsComponent } from './baseln-details/baseln-details.component';

const routes: Routes = [
  {path: '', component: CitysComponent, pathMatch: 'full'},
  {path: 'citys', component: CityNamesComponent, 
    children: [{path: 'basel', component: BaselComponent, pathMatch: 'full'},
    {path: 'luzern', component: LuzernComponent, pathMatch: 'full'},
    {path: 'zurich', component: ZurichComponent, pathMatch: 'full'},]},
    {path: 'luzern', redirectTo: 'luzernDetails'},
    {path: 'basel', redirectTo: 'baselDetails'},
    {path: 'zurich', redirectTo: 'zurichDetails'},
    {path: 'luzernDetails', component: LuzernDetailsComponent },
    {path: 'zurichDetails', component: ZurichDetailsComponent },
    {path: 'baselDetails', component: BaselnDetailsComponent },

      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
