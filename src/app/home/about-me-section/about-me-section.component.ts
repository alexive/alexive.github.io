import { Component, OnInit } from '@angular/core';
import {SkillSet} from '../../data/SkillSet';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeSectionComponent implements OnInit {

  skills: SkillSet[] = [
    {
      name: 'Web/Frontend',
      skills: {
        languages: [
          {
            name: 'HTML5',
          },
          {
            name: 'CSS3'
          },
          {
            name: 'javascript'
          },
          {
            name: 'TypeScript'
          }
        ],
        frameworks: [
          {
            name: 'React'
          },
          {
            name: 'Angular'
          },
          {
            name: 'Sass'
          },
          {
            name: 'Bootstrap'
          },
          {
            name: 'jQuery'
          }
        ]
      }
    },
    {
      name: 'Desktop/Backend',
      skills: {
        languages: [
          {
            name: 'Java'
          },
          {
            name: 'Python'
          }
        ],
        frameworks: [
          {
            name: 'SpringBoot'
          }
        ]
      }
    },
    {
      name: 'Mobile',
      skills: {
        languages: [
          {
            name: 'Java'
          },
          {
            name: 'Kotlin'
          }
        ],
        frameworks: [
          {
            name: 'Android'
          }
        ]
      }
    }
  ];

  facts: string[] = [
    'Wrote my first line of code when I was only 17',
    'Currently reading: Scrum Body Of Knowledge & The Unbearable Lightness of Being',
    'Passionate about UI/UX',
    'Passionate about software architecture',
    'Listens to Pink Floyd 24/7',
    'Love photography, painting and arts in general'
  ];

  currentFact = 0;


  constructor() {
    this.facts = this.facts.sort(() => Math.random() - 0.5);
  }

  nextFact() {
    if (this.hasMoreFacts()) {
      this.currentFact++;
    }
  }

  previousFact() {
    if (this.currentFact > 0) {
      this.currentFact--;
    }
  }

  hasMoreFacts() {
    return this.currentFact + 1 < this.facts.length;
  }

  ngOnInit() {
  }

}
