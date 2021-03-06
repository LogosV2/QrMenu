import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
  goToMenu() {
    this.router.navigate(['menu'])
  }

  callWaiter() {
    this.router.navigate(['waiter-info'])
    console.log('Kelner wezwany')
  }

  goToOrderForm() {
    this.router.navigate(['order-form'])
  }
}
