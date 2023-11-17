import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  ngOnInit(): void {
    AOS.init();
  }
}
