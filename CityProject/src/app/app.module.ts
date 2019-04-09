import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitysComponent } from './citys/citys.component';
import { CityNamesComponent } from './city-names/city-names.component';
import { PictureComponent } from './picture/picture.component';
import { LuzernComponent } from './city-names/luzern/luzern.component';
import { ZurichComponent } from './city-names/zurich/zurich.component';
import { BaselComponent } from './city-names/basel/basel.component';
import { LuzernDetailsComponent } from './luzern-details/luzern-details.component';
import { BaselnDetailsComponent } from './baseln-details/baseln-details.component';
import { ZurichDetailsComponent } from './zurich-details/zurich-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CitysComponent,
    CityNamesComponent,
    PictureComponent,
    LuzernComponent,
    ZurichComponent,
    BaselComponent,
    LuzernDetailsComponent,
    BaselnDetailsComponent,
    ZurichDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
