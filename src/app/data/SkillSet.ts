import {Skill} from './Skill';

export class SkillSet {

  name: string;

  skills: {

    languages: Skill[],

    frameworks: Skill[];
  };
}
