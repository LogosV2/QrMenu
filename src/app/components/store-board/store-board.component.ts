import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {login} from "../../store/app.actions";
import {selectFeature2, shoppingBagItems$} from "../../store/app.selector";
import {AppState} from "../../store/store.reducer";

@Component({
  selector: 'app-store-board',
  templateUrl: './store-board.component.html',
  styleUrls: ['./store-board.component.scss']
})
export class StoreBoardComponent implements OnInit {
  shoppingBagItems!: any[];

  constructor(private store: Store<AppState>) {
  }

  polishMessage() {
    this.store.dispatch(login({password: '', username: ''}))
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'})
  }

  ngOnInit(): void {
    this.store.select(shoppingBagItems$).subscribe(res => {
      console.log(res)
      this.shoppingBagItems = res;
    })

  }

}
