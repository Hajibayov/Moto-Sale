import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CabinetService } from '../cabinet.service';
import { ProductDTO } from '../products/product-dto.model';
import { error } from 'jquery';
@Component({
  selector: 'app-new-product-dialog',
  templateUrl: './new-product-dialog.component.html',
  styleUrls: ['./new-product-dialog.component.scss'],
})
export class NewProductDialogComponent implements OnInit {
  faXmark = faXmark;
  formData: any;
  myForm: any;
  id: number;
  brandList: any;
  categoriesList: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cabinetService: CabinetService
  ) {}
  ngOnInit(): void {
    this.getBrands();
    this.getCategories();
    if (this.data) {
      this.formData = this.data.form;
      console.log(this.formData);
      this.myForm = new FormGroup({
        name: new FormControl(this.formData.name, Validators.required),
        description: new FormControl(
          this.formData.description,
          Validators.required
        ),
        imageUrl: new FormControl(this.formData.imageUrl, Validators.required),
        brandId: new FormControl(this.formData.brandId, Validators.required),
        categoryId: new FormControl(
          this.formData.categoryId,
          Validators.required
        ),
        color: new FormControl(this.formData.color, Validators.required),
        stock_quantity: new FormControl(
          this.formData.stockQuantity,
          Validators.required
        ),
        price: new FormControl(this.formData.price, Validators.required),
      });
    } else {
      this.myForm = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        imageUrl: new FormControl('', Validators.required),
        brandId: new FormControl('', Validators.required),
        categoryId: new FormControl('', Validators.required),
        color: new FormControl('', Validators.required),
        stock_quantity: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
      });
    }
  }

  onSubmit() {
    if (this.data) {
      let productData = new ProductDTO(
        this.myForm.value.name,
        this.myForm.value.description,
        this.myForm.value.imageUrl,
        this.myForm.value.brandId,
        this.myForm.value.categoryId,
        this.myForm.value.color,
        this.myForm.value.stock_quantity,
        this.myForm.value.price
      );
      this.cabinetService
        .updateProducts(productData, this.formData.id)
        .subscribe(
          (res) => {
            console.log(this.formData.id);
            alert(res);
          },
          (error) => {
            alert(error.message);
          }
        );
    } else {
      let productData = new ProductDTO(
        this.myForm.value.name,
        this.myForm.value.description,
        this.myForm.value.imageUrl,
        this.myForm.value.brandId,
        this.myForm.value.categoryId,
        this.myForm.value.color,
        this.myForm.value.stock_quantity,
        this.myForm.value.price
      );
      console.log(productData);
      this.cabinetService.createProducts(productData).subscribe(
        (res) => {
          alert(res);
        },
        (error) => {
          alert(error.message);
        }
      );
    }
    window.location.reload();
  }

  getBrands() {
    this.cabinetService.getBrands().subscribe((res) => {
      console.log(res.data);
      this.brandList = res.data;
    });
  }
  getCategories() {
    this.cabinetService.getCategories().subscribe((res) => {
      console.log(res.data);
      this.categoriesList = res.data;
    });
  }
}
