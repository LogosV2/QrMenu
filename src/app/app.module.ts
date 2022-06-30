import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { WaiterInfoComponent } from './components/waiter-info/waiter-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import { StoreModule } from '@ngrx/store';
import { StoreBoardComponent } from './components/store-board/store-board.component';
import {app} from "./store/store.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { HeaderComponent } from './components/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    WaiterInfoComponent,
    StoreBoardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    StoreModule.forRoot({app}),
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
