import {Component, HostListener, OnInit, ViewChild} from '@angular/core';

import { PersonalDataService } from '../../data/personal-data.service';

import {PersonalData} from '../../data/PersonalData';
import {BusinessCardComponent} from '../business-card/business-card.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  personalData: PersonalData;

  @ViewChild(BusinessCardComponent) aboutMeContainer: BusinessCardComponent;

  @ViewChild(NavBarComponent) navbarComponent: NavBarComponent;

  constructor(private personalDataService: PersonalDataService) { }

  ngOnInit() {
    this.personalDataService.getData()
      .subscribe(data => this.personalData = data);
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.navbarComponent.el.nativeElement.getBoundingClientRect().top - 100 <= 0) {
      this.navbarComponent.isExpanded = false;
    } else {
      this.navbarComponent.isExpanded = true;
    }
  }

}
