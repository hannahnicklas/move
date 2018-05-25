import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './Student';
import { University } from './University';

export class UniversityDataService implements InMemoryDbService {
  createDb() {
    const unis = [
        { id: 1, name: 'University of Technology', country: 'Australia', city: 'Sydney', descriptionText: 'Lorem Ipsum',
        picturePath: '../../images/app-component/university-general',
          experiences: [
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
            {student: 'Dora Delighted', course: 'User Experience Design (THI)',
              text: 'WiSe, 24.07.2016 – 18.12.2016 Visual Communication (UTS)'},
            {student: 'Felix Fortunate', course: 'Software Engineering (THI)',
              text: 'WiSe, 24.07.2016 – 18.12.2016 Software Development (UTS)'},
            {student: 'Tanja Bayer', course: 'User Experience Design (THI)',
              text: 'WiSe, 24.07.2016 – 18.12.2016 Software Development (UTS)'},
            {student: 'Hillarious Happy', course: 'Engineering (THI)',
              text: 'WiSe, 24.07.2016 – 18.12.2016 Engineering (UTS)'}
          ] , facts: [
            {icon: 'far fa-square', title: 'No Visa', description: 'No Visa needed.'},
            {icon: 'far fa-square', title: 'No Left driving traffic', description: 'Its Germany'}
          ]
        }
    ];

    const students = [
      { id: 1, forename: 'Anna', name: 'Adventurous', subject: 'User Experience Design',
      mobile: '0157512345', studyProgress: '3. Semester', bday: '17.09.1996',
      goingAbroad: '5. Semester', email: 'anna1234@thi.de', password: '1234', username: 'anna1234',
      favoritesID: [1, 2, 3], universityIDs: [1] },
      { id: 2, forename: 'Susi', name: 'Sorglos', subject: 'User Experience Design',
      mobile: '0157512545', studyProgress: '4. Semester', bday: '11.07.1995',
      goingAbroad: '6. Semester', email: 'susi1234@thi.de', password: '1234', username: 'susi1234'}];

    return {unis, students};
  }
  getDBUnis() {
    const uni = this.createDb();
    return uni;
  }
}
