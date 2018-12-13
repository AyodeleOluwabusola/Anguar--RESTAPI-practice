import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpComponent } from './landingp/landingp.component';
import { HttpClientModule } from '@angular/common/http'; 
import { RestapiService } from './restapi.service';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LandingpComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
