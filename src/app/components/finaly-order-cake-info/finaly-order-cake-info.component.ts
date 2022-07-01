import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-finaly-order-cake-info',
  templateUrl: './finaly-order-cake-info.component.html',
  styleUrls: ['./finaly-order-cake-info.component.scss']
})
export class FinalyOrderCakeInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backHome() {
    this.router.navigate(['home'])
  }
}
