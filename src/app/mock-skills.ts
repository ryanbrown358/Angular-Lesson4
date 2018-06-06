import { Skill } from '../app/skills/skill'
import { Level } from './level.enum';

export const SKILLS: Array<Skill> = [
    {
        id: 1,
        skill: 'Angular', 
        level: Level.Beginner
    },
    {
        id: 2, 
        skill: 'JavaScript',
        level: Level.Advance
    },
    {
        id: 3,
        skill: 'HTML',
        level: Level.Expert
    },
    {
        id: 4,
        skill: 'CSS',
        level: Level.Advance
    }

];