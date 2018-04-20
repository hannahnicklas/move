import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UniversityDataService implements InMemoryDbService {
  createDb() {
    const unis = [
        { id: 1, name: 'University of Technology', experiences: [
          {student: 'John Doe1', text: 'I hated it!'},
          {student: 'Max Mustermann1', text: 'I loved it!'}
        ] },
        { id: 2, name: 'Technische Hochschule Ingolstadt', experiences: [
          {student: 'John Doe2', text: 'I hated it!'},
          {student: 'Max Mustermann2', text: 'I loved it!'}
        ] }
    ];
    return {unis};
  }
}
