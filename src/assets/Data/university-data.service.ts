import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './Student';
import { University } from './University';

export class UniversityDataService implements InMemoryDbService {
  createDb() {
    const unis = [
      {
        id: 1, name: 'University of Technology', country: 'Australia', city: 'Sydney', descriptionText: 'Lorem Ipsum',
        picturePath: '../../images/app-component/university-general',
        experiences: [
          { student: 'John Doe1', course: 'DB (THI)', text: 'I hated it!' },
          { student: 'Dora Delighted1', course: 'UXD (THI)', text: 'I loved it!' }
        ], facts: [
          { icon: 'far fa-square', title: 'Visa', description: 'Student visa. Visa needed.' },
          { icon: 'far fa-square', title: 'Left driving traffic', description: 'Like in Great Britain' }
        ], courses: [
          {
            id: '1', title: 'Bachelor of Design in User Centered Design',
            description: 'This is the description of the course', are: '4', been: '11'
          },
          {
            id: '2', title: 'Bachelor of Design in Visual Communication',
            description: 'This is the description of the course', are: '2', been: '8'
          },
          {
            id: '3', title: 'Bachelor of Science in Game Developement',
            description: 'This is the description of the course', are: '1', been: '13'
          },
          {
            id: '4', title: 'Bachelor of Information Technology',
            description: 'This is the description of the course', are: '0', been: '6'
          }
        ]
      },
      {
        id: 2, name: 'Technische Hochschule Ingolstadt', country: 'Germany', city: 'Ingolstadt',
        descriptionText: 'Lorem Ipsum2', pictures: [
          { path: '../../sadsa2' },
          { path: '../../sadsad2' }
        ], experiences: [
          {
            student: 'Dora Delighted', course: 'User Experience Design (THI)',
            text: 'WiSe, 24.07.2016 – 18.12.2016 Visual Communication (UTS)'
          },
          {
            student: 'Felix Fortunate', course: 'Software Engineering (THI)',
            text: 'WiSe, 24.07.2016 – 18.12.2016 Software Development (UTS)'
          },
          {
            student: 'Tanja Bayer', course: 'User Experience Design (THI)',
            text: 'WiSe, 24.07.2016 – 18.12.2016 Software Development (UTS)'
          },
          {
            student: 'Hillarious Happy', course: 'Engineering (THI)',
            text: 'WiSe, 24.07.2016 – 18.12.2016 Engineering (UTS)'
          }
        ], facts: [
          { icon: 'far fa-square', title: 'No Visa', description: 'No Visa needed.' },
          { icon: 'far fa-square', title: 'No Left driving traffic', description: 'Its Germany' }
        ], courses: [
          {
            id: '5', title: 'Bachelor of Science in User Experience Design',
            description: 'This is the description of the course', are: '3', been: '6'
          },
          {
            id: '6', title: 'Bachelor of Science in Computer Science',
            description: 'This is the description of the course', are: '6', been: '7'
          },
          {
            id: '7', title: 'Bachelor of Engineering in Mechatronics',
            description: 'This is the description of the course', are: '2', been: '9'
          },
          {
            id: '8', title: 'Bachelor of Science in Aircraft and Vehicle Informatics',
            description: 'This is the description of the course', are: '1', been: '5'
          }
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


    return { unis, students };
  }
  getDBUnis() {
    const uni = this.createDb();
    return uni;
  }
}
