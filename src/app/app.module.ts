import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IntroComponent } from './shared/intro/intro.component';
import { CommonModule } from '@angular/common';
import { TeamsListComponent } from './components/teams-list/teams-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    TeamsListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
