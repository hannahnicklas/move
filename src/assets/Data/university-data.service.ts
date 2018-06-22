import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './Student';
import { University } from './University';
import { Favorite } from './Favorite';

export class UniversityDataService implements InMemoryDbService {
  createDb() {
    const unis = [
      {
        id: 1, name: 'University of Technology', country: 'Australia', city: 'Sydney', 
        descriptionText: 'The University of Technology Sydney originates from the Sydney Mechanics School of Arts (the oldest continuously running Mechanics Institute in Australia), which was established in 1833.[5] In the 1870s, the School formed the Workingmans College, which was later taken over by the NSW government to form, in 1882, the Sydney Technical College.[1]In 1940 the NSW Parliament passes Act to establish an Institute of Technology, which in 1964 lead to the establishment of New South Wales Institute of Technology (NSWIT). In 1968, amalgamation of the NSW Institute of Business Studies and the NSW Institute of Technology took place. In 1976 NSWIT establishes the first law school in NSW outside the university sector. In 1985 the Haymarket Campus is officially opened. On 8 October 1987 university status is granted to NSWIT, which was followed by the passing of the University of Technology, Sydney, Act 1987. It was reconstituted as the University of Technology Sydney (UTS) in 1988, along with the incorporation of the School of Design of the former Sydney College of the Arts.',
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
        descriptionText: '1994 wurde die Bildungseinrichtung am Standort Hohe Schule gegründet. Gründungspräsident war Hartmut Sax. Das Studienangebot bestand aus dem Diplom-Studiengang Betriebswirtschaft. Es folgte 1995 die Unterzeichnung des Vertrags zum Grundstückkauf für den Neubau zwischen dem Freistaat Bayern und der Stadt Ingolstadt. Der Planungsauftrag wurde an das Architekturbüro Keiner, Fürstenfeldbruck, vergeben. 1996 kam der Diplom-Studiengang Wirtschaftsingenieurwesen hinzu. Das Richtfest auf dem neuen Campus an der Esplanade fand 1997 statt und es wurden die Diplom-Studiengänge Maschinenbau und Verbundstudium Wirtschaftsingenieurwesen/ Kfz-Mechatronik eingeführt. Zweiter Präsident wurde 1998 Gunter Schweiger, das Studienangebot wurde um Elektro- und Informationstechnik erweitert und es fand die erste Firmenkontaktmesse Contact statt.', 
        pictures: [
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
      },
      {
        id: 3, name: 'University of Nevada', country: 'USA', city: 'Nevada',
        descriptionText: 'The University of Nevada, Reno (also referred to as Nevada, the University of Nevada or UNR) is a public research university located in Reno, Nevada. Founded October 12, 1874, Nevada is the sole land grant institution for the state of Nevada. According to the Carnegie Classification of Institutions of Higher Education, the University of Nevada is a research university with high research activity (RU/H).[5] The campus is home to the large-scale structures laboratory in the College of Engineering, which has put Nevada researchers at the forefront nationally in a wide range of civil engineering, earthquake and large-scale structures testing and modeling.',
        pictures: [
          { path: '../../sadsa3' },
          { path: '../../sadsad3' }
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
          },
          {
            id: '7', title: 'Bachelor of Engineering in Mechatronics',
            description: 'This is the description of the course', are: '2', been: '9'
          },
          {
            id: '8', title: 'Bachelor of Science in Aircraft and Vehicle Informatics',
            description: 'This is the description of the course', are: '1', been: '5'
          }
        ],  factsRegion: [
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
        lat: '39.544192',
        lang: '-119.816397'
      },
      {
        id: 4, name: 'University of Mailand', country: 'Italy', city: 'Mailand',
        descriptionText: 'The University of Milan (Italian: Università degli Studi di Milano, Latin: Universitas Studiorum Mediolanensis), known colloquially as UniMi or Statale, is a higher education institution in Milan, Italy. It is one of the largest universities in Europe, with about 60,000 students,[3] a permanent teaching and research staff of about 2,000.[4] The University of Milan has 9 schools and offers 134 undergraduate and graduate courses, 21 Doctoral Schools and 92 Specialization Schools. The Universitys research and teaching activities have developed over the years and have received important international recognitions. The University is the only Italian member of the League of European Research Universities (LERU), a group of twenty-one research-intensive European Universities. It consistently ranks one of the best universities of Italy, both overall and in specific subject areas.',
        pictures: [
          { path: '../../sadsa3' },
          { path: '../../sadsad3' }
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
        lat: '45.460144',
        lang: '9.194584'
      },
      {
        id: 5, name: 'University of Cambridge', country: 'England', city: 'Cambridge',
        descriptionText: 'The University of Cambridge (informally Cambridge University)[note 1] is a collegiate public research university in Cambridge, England. Founded in 1209 and granted a Royal Charter by King Henry III in 1231, Cambridge is the second-oldest university in the English-speaking world and the worlds fourth-oldest surviving university.[8] The university grew out of an association of scholars who left the University of Oxford after a dispute with the townspeople.[9] The two medieval universities share many common features and are often referred to jointly as Oxbridge. The history and influence of the University of Cambridge has made it one of the most prestigious universities in the world.',
        pictures: [
          { path: '../../sadsa3' },
          { path: '../../sadsad3' }
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
        lat: '52.204267',
        lang: '0.114908'
      },
      {
        id: 6, name: 'University of Dakota', country: 'USA', city: 'Grand Forks',
        descriptionText: 'The University of North Dakota (also known as UND or North Dakota) is a public research university in Grand Forks, North Dakota. Established by the Dakota Territorial Assembly in 1883, six years before the establishment of the state of North Dakota, it is the states oldest. UND was founded with a strong liberal arts foundation, but has grown into a prominent scientific research university. It is classified by the Carnegie Foundation as having high research activity, and is considered one of the top academic and research institutions in the northern Midwest.[3][non-primary source needed] The University offers a variety of professional and specialized programs, including the only schools of law and medicine in the state of North Dakota. Its best known college is perhaps its John D. Odegard School of Aerospace Sciences, which is the first in the country to offer a degree in unmanned aircraft systems operations,[3][7] and programs in aviation and aerospace.',
        pictures: [
          { path: '../../sadsa3' },
          { path: '../../sadsad3' }
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
        lat: '47.922891',
        lang: '-97.076801'
      },
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
        {id: 4, name: 'University of Mailand', isFav: false},
        {id: 5, name: 'University of Cambridge', isFav: false},
        {id: 6, name: 'University of Dakota', isFav: false},
        // {id: 7, name: 'University of Test', isFav: false},
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
