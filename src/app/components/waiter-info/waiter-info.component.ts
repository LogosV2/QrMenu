import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-waiter-info',
  templateUrl: './waiter-info.component.html',
  styleUrls: ['./waiter-info.component.scss']
})
export class WaiterInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backHome() {
    this.router.navigate(['home'])
  }
}
