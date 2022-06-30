import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {shoppingBagItems$} from "../../store/app.selector";
import {AppState} from "../../store/store.reducer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-store-board',
  templateUrl: './store-board.component.html',
  styleUrls: ['./store-board.component.scss']
})
export class StoreBoardComponent implements OnInit {
  shoppingBagItems!: any[];
  totalPrice!: any[] | undefined;

  constructor(private router: Router, private store: Store<AppState>) {
  }

  backMenu() {
    this.router.navigate(['menu'])
  }

  ngOnInit(): void {
    this.store.select(shoppingBagItems$).subscribe(res => {
      console.log(res)
      this.shoppingBagItems = res;
      })
  }
}
