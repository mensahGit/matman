import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app/material/material.module';
import { SidemenComponent } from './sidemen/sidemen.component';
import { MenbunComponent } from './menbun/menbun.component';
import { DatakanComponent } from './datakan/datakan.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenComponent,
    MenbunComponent,
    DatakanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
