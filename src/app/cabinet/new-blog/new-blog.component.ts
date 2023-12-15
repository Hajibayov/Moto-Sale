import { Component, Inject, OnInit } from '@angular/core';
import { CabinetService } from '../cabinet.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogDTO } from '../blogs/blogDto.model';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss'],
})
export class NewBlogComponent implements OnInit {
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
    });
  } else {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
    });
  }
}

onSubmit() {
  if (this.data) {
    let blogData = new BlogDTO(
      this.myForm.value.name,
      this.myForm.value.description,
      this.myForm.value.imageUrl
    );
    this.cabinetService
      .updateBlog(blogData, this.formData.id)
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
    let blogData = new BlogDTO(
      this.myForm.value.name,
      this.myForm.value.description,
      this.myForm.value.imageUrl,
    );
    console.log(blogData);
    this.cabinetService.createBlog(blogData).subscribe(
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
}