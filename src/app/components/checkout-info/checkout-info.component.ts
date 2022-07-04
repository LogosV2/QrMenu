import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout-info',
  templateUrl: './checkout-info.component.html',
  styleUrls: ['./checkout-info.component.scss']
})
export class CheckoutInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backHome() {
    this.router.navigate(['home'])
  }
}
