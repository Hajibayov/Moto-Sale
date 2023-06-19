import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent {
  ngOnInit(): void {
    AOS.init();
  }
}
