import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { CardsBodyComponent } from './app/cards-body/cards-body.component';
import { NavToolComponent } from './app/nav-tool/nav-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsBodyComponent,
    NavToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
