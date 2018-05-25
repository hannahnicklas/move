import { Experience } from './Experience';
import { Fact } from './Fact';

export class University {
    id: number;
    name: string;
    country: string;
    city: string;
    descriptionText: string;
    picturePath: String;
    experiences: Experience[];
    facts: Fact[];
  }
