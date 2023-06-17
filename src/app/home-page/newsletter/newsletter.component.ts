import { Component, OnInit } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    AOS.init();
  }
}
