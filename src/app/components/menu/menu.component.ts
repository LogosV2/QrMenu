import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

type Menu = Array<{ price: string; name: string; img: string }>;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: Menu = [
    {price: '22zł', name: "Sernik", img: '#'},
    {price: '15zł', name: "ApplePie", img: '#'},
    {price: '23zł', name: "Rolada Owocowa", img: '#'},
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  backHome() {
    this.router.navigate(['home'])
  }
}
