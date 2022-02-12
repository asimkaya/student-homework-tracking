import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTypePipe } from './helpers/user-type.pipe';
import { HomeWorkStatusPipe } from './helpers/home-work-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserTypePipe,
    HomeWorkStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
