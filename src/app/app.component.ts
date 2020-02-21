import { Component, ViewChild, OnInit, AfterViewInit, NgZone, ChangeDetectorRef  } from '@angular/core';
import { MyFormComponent } from './my-form/my-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit, AfterViewInit {
  public form: FormGroup;
  name = 'Angular';
  @ViewChild('myForm' , {static: false}) myForm: MyFormComponent;

  constructor(private _fb: FormBuilder,
      private _cd: ChangeDetectorRef,
      private zone: NgZone) {

  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    console.log(this.myForm.form.value)
    this.setForm();
    
  }

  setForm() {

    this.zone.run(() => {
        const { name }  = this.myForm.form.controls;
        // name.setValidators(Validators.required);
        name.setValidators(null);
        name.updateValueAndValidity();
    });

    this.form = this._fb.group({
        te: null,
        algo: this.myForm.form
    });

    
    

    this.form.valueChanges.subscribe(result => {
      console.log(`simbora`, this.form.getRawValue() );
    })
  }
}
