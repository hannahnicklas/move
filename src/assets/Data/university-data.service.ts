import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UniversityDataService implements InMemoryDbService {
  createDb() {
    const unis = [
        { id: 1, name: 'University of Technology' },
        { id: 2, name: 'Technische Hochschule Ingolstadt' }
    ];
    return {unis};
  }
}
