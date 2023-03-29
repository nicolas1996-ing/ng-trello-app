import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// angular material cdk 
import {OverlayModule} from '@angular/cdk/overlay'; 
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {DragDropModule} from '@angular/cdk/drag-drop'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnComponent } from './shared/btn/btn.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoardComponent } from './pages/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    BoardsComponent,
    NavbarComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    FontAwesomeModule, // cdk
    CdkAccordionModule, // cdk
    DragDropModule // cdk
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
