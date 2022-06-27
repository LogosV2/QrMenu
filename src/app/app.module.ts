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
import {storeReducer} from "./components/store-board/menu-store/store.reducer";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    WaiterInfoComponent,
    StoreBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    StoreModule.forRoot({storeReducer},{}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
