import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {addToBasket} from "../../store/app.actions";


type Menu = Array<{
  price: number;
  name: string;
  img: string;
  alt: string,
  btnVal: string
}>;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private basket: any = []
  menus: Menu = [
    {
      price: 22,
      name: "Sernik",
      img: '#',
      alt: 'ciasto1',
      btnVal: 'Dodaj do koszyka'
    },
    {
      price: 15,
      name: "ApplePie",
      img: '#',
      alt: 'ciasto2',
      btnVal: 'Dodaj do koszyka'
    },
    {
      price: 23,
      name: "Rolada owocowa",
      img: '#',
      alt: 'ciasto3',
      btnVal: 'Dodaj do koszyka'
    },
  ];


  constructor(private router: Router, private store: Store) {
  }

  ngOnInit(): void {
  }

  backHome() {
    this.router.navigate(['home'])
  }

  addToBasket(i: number) {
    this.basket = this.menus[i];
    console.log(this.basket)
    this.menus[i].btnVal = 'Kupione'
    this.store.dispatch(addToBasket({item:this.menus[i]}));
  }

  goStore() {
    this.router.navigate(['store'])
  }
}
