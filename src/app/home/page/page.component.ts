import { Component, OnInit } from '@angular/core';

import { PersonalDataService } from '../../data/personal-data.service';

import {PersonalData} from '../../data/PersonalData';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  personalData: PersonalData;

  constructor(private personalDataService: PersonalDataService) { }

  ngOnInit() {
    this.personalDataService.getData()
      .subscribe(data => this.personalData = data);
  }

}
