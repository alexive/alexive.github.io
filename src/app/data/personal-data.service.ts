import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { PersonalData } from './PersonalData';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  // TODO "un-mock" this whole class
  data: PersonalData = {

    age: 22,

    name: 'J. Alexandre Oliveira',

    title: 'Full-stack software engineer',

    location: 'Lisbon, Portugal'
  };

  constructor() { }

  getData(): Observable<PersonalData> {
    return of(this.data);
  }
}
