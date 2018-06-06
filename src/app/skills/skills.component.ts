import { Component, OnInit } from '@angular/core';

import { Level } from '../level.enum';
import { Skill } from './skill';
import { SKILLS } from '../mock-skills';
import { SkillServiceService } from '../skill-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];

  constructor(private skillService: SkillServiceService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void{
    this.skillService.getSkills().subscribe(skills => this.skills = skills);
  }
}



