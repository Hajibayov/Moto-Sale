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
      createdBy: new FormControl('', Validators.required),
      comments: new FormArray([]),
    });
  }

  onSubmit() {
    this.homeService.addBlog(this.blogForm.value).subscribe((res) => {});
    this.blogForm.reset();
  }
}
