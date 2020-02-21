import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ControlValueAccessor, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }

  public form: FormGroup;
  ngOnInit() {
    this.setForm();
  }

  private setForm() {
    this.form = this._fb.group({
        name: [null, Validators.required],
        obs: null
    });

    this.form.valueChanges.subscribe(resuilt => {
      console.log(`dentro`, resuilt);
    })
  }

}