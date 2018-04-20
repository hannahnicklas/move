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
        ] },
        { id: 2, name: 'Technische Hochschule Ingolstadt', country: 'Germany', city: 'Ingolstadt',
        descriptionText: 'Lorem Ipsum2', pictures: [
          {path: '../../sadsa2' },
          {path: '../../sadsad2' }
        ] ,  experiences: [
          {student: 'John Doe2', course: 'DB (THI)', text: 'I hated it!'},
          {student: 'Dora Delighted', course: 'UXD (THI)', text: 'I loved it!'}
        ] }
    ];
    return {unis};
  }
}
