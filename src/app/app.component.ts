import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form';
  apply_form: FormGroup;
  constructor(public formbilder: FormBuilder) {
    this.apply_form = this.formbilder.group({
      name: ['',Validators.required],
      surname: ['',Validators.required],
      experience: ['',Validators.required]
    });
  }
}
