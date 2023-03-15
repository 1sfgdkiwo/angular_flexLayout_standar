import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel'; // ini komen dari branch langsung
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FlexLayoutModule,IvyCarouselModule,MatIconModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
