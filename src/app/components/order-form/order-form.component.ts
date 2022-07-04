import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  public form: FormGroup | any;
  constructor(private fb: FormBuilder, private fire: AngularFirestore,private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    this.form = this.fb.group({
      name:  ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
      cake: ['', Validators.required],
      cream: ['', Validators.required],
      topping: ['', Validators.required],
      size: ['', Validators.required],
      data: ['', Validators.required],
      orderTextInfo: ['', Validators.required],


    });
  }

  sendForm() {
    if (this.form.valid) {
      this.fire.collection('order-cake-form').add(this.form.getRawValue())
      console.log(this.form.getRawValue());
      this.form.reset();
      this.router.navigate(['order-cake-info'])
    }
  }
  resetForm() {
    this.form.reset();
  }
  backHome() {
    this.router.navigate(['home'])
  }
}
