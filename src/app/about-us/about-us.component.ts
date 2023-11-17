import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  ngOnInit(): void {
    AOS.init();
  }
}
