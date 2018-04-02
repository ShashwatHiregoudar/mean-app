import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LawyerComponent } from './lawyer/lawyer.component';
import { LawyerService } from './lawyer.service';

@NgModule({
  declarations: [
    AppComponent,
    LawyerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ LawyerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
