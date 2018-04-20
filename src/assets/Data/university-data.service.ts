import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UniversityDataService implements InMemoryDbService {
  createDb() {
    const unis = [
        { id: 1, name: 'University of Technology', country: 'Australia', city: 'Sydney', descriptionText: 'Lorem Ipsum', pictures: [
          {path: '../../sadsa' },
          {path: '../../sadsad' }
        ] , experiences: [
          {student: 'John Doe1', course: 'DB (THI)', text: 'I hated it!'},
          {student: 'Dora Delighted1', course: 'UXD (THI)', text: 'I loved it!'}
        ] , facts: [
          {icon: 'far fa-square', title: 'Visa', description: 'Student visa. Visa needed.'},
          {icon: 'far fa-square', title: 'Left driving traffic', description: 'Like in Great Britain'}
        ] },
        { id: 2, name: 'Technische Hochschule Ingolstadt', country: 'Germany', city: 'Ingolstadt',
        descriptionText: 'Lorem Ipsum2', pictures: [
          {path: '../../sadsa2' },
          {path: '../../sadsad2' }
        ] , experiences: [
          {student: 'John Doe2', course: 'DB (THI)', text: 'I hated it!'},
          {student: 'Dora Delighted', course: 'UXD (THI)', text: 'I loved it!'}
        ] , facts: [
          {icon: 'far fa-square', title: 'No Visa', description: 'No Visa needed.'},
          {icon: 'far fa-square', title: 'No Left driving traffic', description: 'Its Germany'}
        ] }
    ];

    const students = [
      { id: 1, forename: 'Anna', name: 'Adventurous',
      mobile: '0157512345', studyProgress: '3. Semester',
      goingAbroad: '5. Semester', email: 'anna1234@thi.de', }];

    return {unis, students};
  }
}
