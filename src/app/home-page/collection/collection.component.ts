import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],

})
export class CollectionComponent implements OnInit {
  ary = [0, 1, 2, 3, 4, 5, 6, 7,8,9];
  slicedArrays: any[] = [];
  currentIndex = 0;
  iterate: Function | undefined;

  constructor() {}

  ngOnInit() {
    this.iterate = this.iterator(this.ary, 4);
    this.updateSlicedArrays();
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
}
