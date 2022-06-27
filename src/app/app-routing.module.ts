import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MenuComponent} from "./components/menu/menu.component";
import {WaiterInfoComponent} from "./components/waiter-info/waiter-info.component";
import {StoreBoardComponent} from "./components/store-board/store-board.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'waiter-info', component: WaiterInfoComponent},
  {path: 'store', component: StoreBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
