import { Component, OnInit } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}
