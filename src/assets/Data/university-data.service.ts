import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './Student';
import { University } from './University';
import { Favorite } from './Favorite';

export class UniversityDataService implements InMemoryDbService {
  createDb() {
    const unis = [
      {
        id: 1, name: 'University of Technology', country: 'Australia', city: 'Sydney', descriptionText: 'Lorem Ipsum',
        picturePath: '../../images/app-component/university-general',
        experiences: [
          { student: 'Luke Lucky', course: 'User Experience Design (THI)',
          text: 'WiSe, 24.07.2016 – 18.12.2016 Visual Communication (UTS)' },
          { student: 'Thomas Thrilled', course: 'Engineering (THI)',
          text: 'WiSe, 24.07.2016 – 18.12.2016 Engineering (UTS)' },
          { student: 'Lea Ditrich', course: 'Engineering (THI)',
          text: 'WiSe, 24.07.2016 – 18.12.2016  Engineering (UTS)' },
          { student: 'Thomas Gottlieb', course: 'User Experience Design (THI)',
          text: 'WiSe, 24.07.2016 – 18.12.2016 Online Economics (UTS)' },
          { student: 'Simone Fuchs', course: 'User Experience Design (THI)',
          text: 'WiSe, 24.07.2016 – 18.12.2016 Visual Communication (UTS)' }
        ], factsRegion: [
          { icon: 'VISA.svg', title: 'Visa', description: 'Student visa. For your application you need a visa 6 months before the semester starts.' },
          { icon: 'Traffic.svg', title: 'Left driving traffic', description: 'Like in Great Britain cars drive on the left side of the street.' },
          { icon: 'Climate.svg', title: 'Regional temperature differences', description: 'Very cold winters in the south of Australia. Warm climate in the north througout the year.' },
          { icon: 'Rainfall.svg', title: 'Rainfall', description: 'Australian is one of the dryest countries of the earth.' },
          { icon: 'OppositeSeasons.svg', title: 'Opposite seasons', description: 'Since Australia is on the southern hemisphere the seasons are reversed to the German seasons.' },
          { icon: 'FlightCosts.svg', title: 'Flight cost', description: 'Flights to Australia are usually very expensive. So make sure to look for cheaper deals.' }
        ], factsCity: [
          { icon: 'LivingCosts.svg', title: 'Living costs', description: 'The livings costs in Australia and exspecially around Sydney are very high.' },
          { icon: 'Power.svg', title: 'Power adapter', description: 'Voltage is 220, so a outlet adapter and a voltage converter are needed.' },
          { icon: 'PublicTransport.svg', title: 'Public transport', description: 'Transport for NSW public transport services use the Opal ticketing system.' }
        ], factsUni: [
          { icon: 'LanguageProficiency.svg', title: 'Entry requirements', description: 'A year of study at a recognized institution at the time of application and the UTS requirements.' },
          { icon: 'LanguageProficiency.svg', title: 'Language proficency', description: 'English level in accordance with the UTS English language requirements.' },
          { icon: 'Fees.svg', title: 'Study fees', description: 'The study fees differ from course to course and will cost about 5000-7000€ (2017).' },
          { icon: 'Deadlines.svg', title: 'Application deadlines', description: 'Commencement January - March 2018: 20.08.2017. Commencement July - August 2018: 15.02.2018.' }
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
        ],
        lat: '-33.883225',
        lang: '151.200478'
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
        ], factsRegion: [
          { icon: 'VISA.svg', title: 'Visa', description: 'If you are not from Europe you will need a Visum.' },
          { icon: 'Traffic.svg', title: 'Right driving traffic', description: 'Not like Great Britain.' },
          { icon: 'Climate.svg', title: 'Humid climate', description: 'Mixed weather, but mostly moderate.' },
          { icon: 'Rainfall.svg', title: 'Rainfall', description: 'Average rainfall.' },
          { icon: 'OppositeSeasons.svg', title: 'Opposite seasons', description: 'Winter is from November to March, summer from June to August.' },
          { icon: 'FlightCosts.svg', title: 'Flight cost', description: 'Depends from where you want to start. So make sure to look for cheaper deals.' }
        ], factsCity: [
          { icon: 'LivingCosts.svg', title: 'Living costs', description: 'The living costs in Ingolstadt are more expensive than in the suburban region.' },
          { icon: 'Power.svg', title: 'Power adapter', description: 'Voltage is 230.' },
          { icon: 'PublicTransport.svg', title: 'Public transport', description: 'There are buses and trains, but no subway.' }
        ], factsUni: [
          { icon: 'LanguageProficiency.svg', title: 'Entry requirements', description: 'A year of study at a recognized institution at the time of application and the UTS requirements.' },
          { icon: 'LanguageProficiency.svg', title: 'Language proficency', description: 'English or German level in accordance with the UTS English and German language requirements.' },
          { icon: 'Fees.svg', title: 'Study fees', description: 'If you are from Europe you do not need to pay study fees.' },
          { icon: 'Deadlines.svg', title: 'Application deadlines', description: 'Commencement January - March 2018: 20.08.2017. Commencement July - August 2018: 15.02.2018.' }
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
        ],
        lat: '48.767210',
        lang: '11.432368'
      }
    ];

    const students = [
      { id: 1, forename: 'Anna', name: 'Adventurous', subject: 'User Experience Design',
      mobile: '0157512345', studyProgress: '3. Semester', bday: '17.09.1996',
      goingAbroad: '5. Semester', email: 'anna1234@thi.de', password: '1234', username: 'anna1234',
      favoritesID: [1, 2], universityIDs: [1], universities: [],
      emergFirstName: 'My', emergLastName: 'daddy', emergEmail: 'daddy@dad.de', emergMobile: '01234567' },
      { id: 2, forename: 'Susi', name: 'Sorglos', subject: 'User Experience Design',
      mobile: '0157512545', studyProgress: '4. Semester', bday: '11.07.1995',
      goingAbroad: '6. Semester', email: 'susi1234@thi.de', password: '1234', username: 'susi1234'}];

      const favorites = [
        {id: 1, name: 'University of Technology', isFav: false},
        {id: 2, name: 'Technische Hochschule Ingolstadt', isFav: false},
        {id: 3, name: 'University of Nevada', isFav: false},
        {id: 4, name: 'University of Sydney', isFav: false},
        {id: 5, name: 'University of Cambridge', isFav: false},
        {id: 6, name: 'University of Dakota', isFav: false},
        {id: 7, name: 'University of Test', isFav: false},
      ];

      const favoritesOfStudent = [
        {id: 1, name: 'University of Technology'},
        {id: 2, name: 'Technische Hochschule Ingolstadt'},
      ];


    return { favorites, unis, students, favoritesOfStudent  };
  }
  getDBUnis() {
    const uni = this.createDb();
    return uni;
  }
}
