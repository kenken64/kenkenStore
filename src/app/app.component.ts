import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'kenken64.store - d\'leedon';

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  eventList = new Array<string>();
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.eventList.push(`<strong>Free Delivery for neighbourhood</strong>`);
    this.eventList.push(`<strong>Cheaper than the groccery store downstair</strong>`);
    this.eventList.push(`<strong>Open 24/7</strong>`);
    
    this.firstFormGroup = this._formBuilder.group({
      quantity1: ['', Validators.required],
      quantity2: ['', Validators.required],
      quantity3: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      blkNoCtrl: ['', Validators.required],
      levelCtrl: ['', Validators.required],
      unitNoCtrl: ['', Validators.required]
    });
  }
}
