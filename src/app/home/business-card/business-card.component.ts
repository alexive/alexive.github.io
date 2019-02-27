import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {

  @Input() name: string;

  @Input() title: string;

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const height = this.el.nativeElement.offsetHeight;
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    // console.log(componentPosition);
    // console.log((componentPosition + height) / scrollPosition);
    if (scrollPosition >= componentPosition) {
    } else {
      // this.state = 'hide'
    }
  }

}
