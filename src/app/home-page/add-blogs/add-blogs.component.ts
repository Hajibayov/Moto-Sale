import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.scss'],
})
export class AddBlogsComponent implements OnInit {
  blogForm: FormGroup;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.blogForm = new FormGroup({
      name: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      createdBy: new FormControl('', Validators.required),
      createdAt: new FormControl(new Date(), Validators.required),
      comments: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.blogForm.value);
    const control = new FormControl('');
    (<FormArray>this.blogForm.get('comments')).push(control);
    this.homeService.addBlog(this.blogForm.value).subscribe((res) => {});
    this.blogForm.reset();
  }
}
