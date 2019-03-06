import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillsCardComponent } from './skills-card/skills-card.component';

@NgModule({
  declarations: [PageComponent, BusinessCardComponent, NavBarComponent, AboutMeSectionComponent, SkillsCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent
  ]
})
export class HomeModule { }
