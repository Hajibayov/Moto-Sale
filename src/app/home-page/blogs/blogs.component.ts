import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Blog } from 'src/app/models/blog.model';
import { HomeService } from '../home.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition('* => next', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition('* => prev', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class BlogsComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faComments = faComments;
  faPen = faPen;
  ary: Blog[] = [];
  slicedArrays: any[] = [];
  currentIndex = 0;
  iterate: Function | undefined;
  animationState: string;

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.homeService.getBlogs().subscribe((res) => {
      console.log(res);
      this.ary = res;
      this.iterate = this.iterator(this.ary, 4);
      this.updateSlicedArrays();
    });
  }

  iterator(a: any[], n: number) {
    let current = 0,
      l = a.length;
    return function () {
      const end = current + n;
      const part = a.slice(current, end);
      current = end < l ? end : 0;
      return part;
    };
  }

  updateSlicedArrays() {
    this.slicedArrays = [];
    const sliced = this.iterate();
    this.slicedArrays.push(sliced);
  }

  onNextClick() {
    this.animationState = 'next';

    if (this.currentIndex + 4 < this.ary.length) {
      this.currentIndex += 4;
      this.iterate = this.iterator(this.ary.slice(this.currentIndex), 4);
    } else {
      this.currentIndex = 0;
      this.iterate = this.iterator(this.ary, 4);
    }
    this.updateSlicedArrays();
  }

  onPreviousClick() {
    this.animationState = 'prev';
    if (this.currentIndex >= 4) {
      this.currentIndex -= 4;
      this.iterate = this.iterator(this.ary.slice(this.currentIndex), 4);
    } else {
      const lastSetIndex = Math.max(
        this.ary.length - (this.ary.length % 4 || 4),
        0
      );
      this.currentIndex = lastSetIndex;
      this.iterate = this.iterator(this.ary.slice(this.currentIndex), 4);
    }
    this.updateSlicedArrays();
  }

  onClick(id: string) {
    let extras: NavigationExtras = {
      queryParams: {
        blogId: id,
      },
    };
    this.router.navigate(['Blogs'], extras);
  }
}
