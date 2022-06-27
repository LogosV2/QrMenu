import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {login} from "./menu-store/app.actions";
import {selectFeature, selectFeature2} from "./menu-store/app.selector";

interface AppState{
  message: string
}
@Component({
  selector: 'app-store-board',
  templateUrl: './store-board.component.html',
  styleUrls: ['./store-board.component.scss']
})


export class StoreBoardComponent implements OnInit {
  constructor( private store: Store){}

  polishMessage() {
    this.store.dispatch(login({password:'',username:''}))
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'})
  }

  ngOnInit(): void {
    // @ts-ignore
    this.store.select(selectFeature2).subscribe(res=>{
      console.log(res)
    })

  }


  // constructor(private router: Router) {
  // }
  // backHome() {
  //   this.router.navigate(['menu'])
  // }

}
