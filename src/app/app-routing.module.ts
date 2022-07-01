import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MenuComponent} from "./components/menu/menu.component";
import {WaiterInfoComponent} from "./components/waiter-info/waiter-info.component";
import {StoreBoardComponent} from "./components/store-board/store-board.component";
import {FinalyOrderCakeInfoComponent} from "./components/finaly-order-cake-info/finaly-order-cake-info.component";
import {OrderFormComponent} from "./components/order-form/order-form.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'waiter-info', component: WaiterInfoComponent},
  {path: 'store', component: StoreBoardComponent},
  {path: 'order-cake-info', component: FinalyOrderCakeInfoComponent},
  {path: 'order-form', component: OrderFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
