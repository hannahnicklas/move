import { Experience } from './Experience';
import { Fact } from './Fact';
import { Course } from './Course';

export class University {
    id: number;
    name: string;
    country: string;
    city: string;
    descriptionText: string;
    picturePath: String;
    experiences: Experience[];
    facts: Fact[];
    courses: Course[];
  }
