import { Injectable } from '@angular/core';

import { Skill } from '../app/skills/skill';
import { Level } from '../app/level.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {
  skillsArray: Skill[] = [
      {
          id: 0,
          skill: 'Anuglar',
          level: Level.Advance
      },
      {
          id: 1,
          skill: 'Eating cat food',
          level: Level.Expert
      },
      {
          id: 2,
          skill: 'Sitting on laps',
          level: Level.Intermediate
      }
  ];

  getSkills = (): Observable<Skill[]> => {
      return of(this.skillsArray);
  };

}