import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // test =  new FormControl();
  constructor() {
    // this.test = new FormControl();
    // this.test.valueChanges().subscribe
    // console.log(this.test)
  }

  ngOnInit(): void {

  }

}
