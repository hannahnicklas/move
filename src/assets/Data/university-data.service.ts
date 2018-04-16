import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UniversityDataService implements InMemoryDbService {
  createDb() {
    const unis = [
        { id: 1, name: 'University of Technology', experiences: [
          {student: 'John Doe', text: 'I hated it!'},
          {student: 'Max Mustermann', text: 'I loved it!'}
        ] },
        { id: 2, name: 'Technische Hochschule Ingolstadt' }
    ];
    return {unis};
  }
}
