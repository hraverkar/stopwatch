import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { DisplayScreenComponent } from './display-screen/display-screen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NumberFormatPipe } from './number-format.pipe';
import { StylizeNumberDirective } from './stylize-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    ActionButtonsComponent,
    DisplayScreenComponent,
    NumberFormatPipe,
    StylizeNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
