import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../models/blog.model';
import { HomeService } from '../home-page/home.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss'],
})
export class AllBlogsComponent implements OnInit {
  id: string = '';
  blog: any;
  blogs: Blog[] = [];
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.homeService.getBlogs().subscribe((res) => {
      console.log(res);
      this.blogs = res;
    });

    this.route.queryParams.subscribe((res) => {
      this.id = res['blogId'];
      if (this.id) {
        this.homeService
          .getBlogById(this.id)
          .subscribe((res) => ((this.blog = res), console.log(this.blog)));
      }
    });
  }
}
