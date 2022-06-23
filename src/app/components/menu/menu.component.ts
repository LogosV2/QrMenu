import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

type Menu = Array<{ price: number; name: string; img: string; alt: string, btnVal: string }>;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private basket: any = []
  menus: Menu = [
    {price: 22, name: "Sernik", img: '#', alt: 'ciasto1', btnVal: 'Dodaj do koszyka'},
    {price: 15, name: "ApplePie", img: '#', alt: 'ciasto2', btnVal: 'Dodaj do koszyka'},
    {price: 23, name: "Rolada owocowa", img: '#', alt: 'ciasto3', btnVal: 'Dodaj do koszyka'},
  ];


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  backHome() {
    this.router.navigate(['home'])
  }

  addToBasket(i: any) {
    this.basket = this.menus[i];
    console.log(this.basket)
    this.menus[i].btnVal = 'Kupione'
  }
}
