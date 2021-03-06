import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {shoppingBagItems$} from "../../store/app.selector";
import {AppState} from "../../store/store.reducer";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {removeFromBasket} from "../../store/app.actions";

@Component({
  selector: 'app-store-board',
  templateUrl: './store-board.component.html',
  styleUrls: ['./store-board.component.scss']
})
export class StoreBoardComponent implements OnInit {
  shoppingBagItems!: any[];
  totalPrice!: any[] | undefined;


  constructor(private router: Router, private store: Store<AppState>, private fire: AngularFirestore) {
  }

  backMenu() {
    this.router.navigate(['menu'])
  }

  ngOnInit(): void {
    this.store.select(shoppingBagItems$).subscribe(res => {
      console.log(res);
      this.shoppingBagItems = res;
    })
  }

  goCheckout() {
    this.fire.collection('menu-order').doc().set(Object.assign({}, this.shoppingBagItems));
    this.router.navigate(['checkout']);
    console.log('wyslano zamowienie');
    console.log(this.shoppingBagItems);
  }

  deleteItem(index:number) {
    // this.shoppingBagItems = this.shoppingBagItems.filter(item => item !== obj);
    this.store.dispatch(removeFromBasket({index}))
  }
}
