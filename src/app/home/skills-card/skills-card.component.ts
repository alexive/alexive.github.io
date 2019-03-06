import { Component, OnInit } from '@angular/core';
import {SkillSet} from '../../data/SkillSet';
import {Input} from '@angular/core';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss']
})
export class SkillsCardComponent implements OnInit {

  @Input() skills: SkillSet[];

  selectedTab: number;

  constructor() { }

  ngOnInit() {

    this.selectedTab = 0;
  }

}
