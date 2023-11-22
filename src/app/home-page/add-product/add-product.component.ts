import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  mainForm: FormGroup;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.mainForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      availability: new FormControl('', Validators.required),
      otherImages: new FormArray([], Validators.maxLength(4)),
    });
  }

  onSubmit() {
    this.homeService.addProducts(this.mainForm.value).subscribe((res) => {});
    this.mainForm.reset();
  }

  onAddImage() {
    const control = new FormControl('');
    (<FormArray>this.mainForm.get('otherImages')).push(control);
  }
  getImages() {
    return (<FormArray>this.mainForm.get('otherImages')).controls;
  }
}
