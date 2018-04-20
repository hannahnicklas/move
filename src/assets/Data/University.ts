import { Experience } from './Experience';

export class University {
    id: number;
    name: string;
    country: string;
    city: string;
    descriptionText: string;
    pictures: string[];
    experiences: Experience[
    ];
  }
