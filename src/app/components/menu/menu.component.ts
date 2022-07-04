import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {addToBasket} from "../../store/app.actions";


type Menu = Array<{
  price: number;
  name: string;
  img: string;
  alt: string;
  btnVal: string;
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
      img: 'data:image/jpeg;base64,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',
      alt: 'ciasto1',
      btnVal: 'Dodaj do koszyka',
    },
    {
      price: 15,
      name: "ApplePie",
      img: 'data:image/jpeg;base64,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',
      alt: 'ciasto2',
      btnVal: 'Dodaj do koszyka',
    },
    {
      price: 23,
      name: "Rolada owocowa",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOZ2L00gkt2gLsechWmS9H589lPkfjM5PeA&usqp=CAU',
      alt: 'ciasto3',
      btnVal: 'Dodaj do koszyka',
    },
    {
      price: 16,
      name: "Bułka",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7ds_YqbYLQQT8vTAteRL7nhUVZYVx0P6ZQ&usqp=CAU',
      alt: 'ciasto3',
      btnVal: 'Dodaj do koszyka',
    },
    {
      price: 36,
      name: "Makówka",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7ds_YqbYLQQT8vTAteRL7nhUVZYVx0P6ZQ&usqp=CAU',
      alt: 'ciasto3',
      btnVal: 'Dodaj do koszyka',
    },
    {
      price: 6,
      name: "Ekler",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7ds_YqbYLQQT8vTAteRL7nhUVZYVx0P6ZQ&usqp=CAU',
      alt: 'ciasto3',
      btnVal: 'Dodaj do koszyka',
    },
    {
      price: 55,
      name: "Tort Owocowy",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOZ2L00gkt2gLsechWmS9H589lPkfjM5PeA&usqp=CAU',
      alt: 'ciasto3',
      btnVal: 'Dodaj do koszyka',
    },
    {
      price: 73,
      name: "Tort Kawowy",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7ds_YqbYLQQT8vTAteRL7nhUVZYVx0P6ZQ&usqp=CAU',
      alt: 'ciasto3',
      btnVal: 'Dodaj do koszyka',
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
    // console.log(this.basket)
    this.menus[i].btnVal = 'Kupione'
    this.store.dispatch(addToBasket({item:this.menus[i]}));
  }

  goStore() {
    this.router.navigate(['store'])
  }
}
