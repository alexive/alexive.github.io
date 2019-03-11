import {Skill} from './Skill';

export class SkillSet {

  name: string;

  description?: string;

  skills: {

    languages: Skill[],

    frameworks: Skill[];
  };
}
