import { University } from './University';

export class Student {
    id: number;
    name: string;
    forename: string;
    mobile: string;
    email: string;
    subject: string;
    studyProgress: string;
    goingAbroad: string;
    // favoritesID: [number];
    // selectedUnisID: [number];
    favorites: string[];
    password: string;
    username: string;
    universities: University[];
    emergFirstName: string;
    emergLastName: string;
    emergEmail: string;
    emergMobile: string;
  }
