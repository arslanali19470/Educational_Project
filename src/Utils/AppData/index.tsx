import {useState} from 'react';
import {ComsetIMG, Profile, PUIMG} from '../../Assets';

export interface Program {
  name: string;
  feeStructure: string;
  facilitiesMembers: {
    ProfessorName: string;
    Rank: string;
    profImg?: string;
  }[];
  LastYearMerit?: string;
  AdmissionPortal?: string;
  Website?: string;
  UniIMG?: string;
}

export interface Department {
  name: string;
  programs: Program[];
}

export interface Degree {
  degreeType: string;
  departments: Department[];
}

export interface University {
  name: string;
  degrees: Degree[];
  UniIMG?: string;
  AdmissionPortal?: string;
  Website?: string;
}

export interface ProgramDetails {
  name: string;
  feeStructure: string;
  facilitiesMembers: {ProfessorName: string; Rank: string; profImg?: string}[];
  LastYearMerit: string;
  profImg?: string;
}
// const [AllUniversities, setAllUniversities] = useState([]);
// console.log(data.universities);
// List of universities for the first dropdown
export const universitiesInPakistan = [
  'Punjab University',
  'COMSATS University',
  // 'LUMS',
  // 'NUST',
  // 'Aga Khan University',
  // 'Quaid-i-Azam University',
  // 'IBA',
  // 'University of Karachi',
  // 'PIEAS',
  // 'GIKI',
];

// Data structure to be compared with the university selected from the dropdown
export const data: {universities: University[]} = {
  universities: [
    {
      name: 'Punjab University',
      UniIMG: PUIMG,
      AdmissionPortal: 'https://admissions.pu.edu.pk/admissions/',
      Website: 'https://www.pu.edu.pk/',
      degrees: [
        {
          degreeType: 'BACHELOR',
          departments: [
            {
              name: 'CS & IT',
              programs: [
                {
                  name: 'SOFTWARE ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',

                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                      profImg: Profile,
                    },
                    {
                      ProfessorName: 'Usman Zabit',
                      Rank: 'Associate Professor',
                      profImg: Profile,
                    },
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                      profImg: Profile,
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Computer Science',
                  feeStructure: 'PKR 480,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'DATA SCIENCE',
                  feeStructure: 'PKR 480,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ARTIFICIAL INTELLIGENCE',
                  feeStructure: 'PKR 480,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Civil & Environmental',
              programs: [
                {
                  name: 'BE Geoinformatics Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Environmental Engineering',
                  feeStructure: 'PKR 480,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'CIVIL ENGINEERING',
                  feeStructure: 'PKR 480,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'CHEMICAL & MATERIALS',
              programs: [
                {
                  name: 'CHEMICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'METALLURGY & MATERIALS',
                  feeStructure: 'PKR 480,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
              ],
            },
            {
              name: 'ELECTRICAL ENGINEERING ',
              programs: [
                {
                  name: 'ELECTRICAL ENGINEERING ',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
              ],
            },
            {
              name: 'INTERDISCIPLINARY ENGINEERING & SCIENCES',
              programs: [
                {
                  name: 'BS BIOINFORMATICS ',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
              ],
            },
            {
              name: 'APPLIED BIO SCIENCES',
              programs: [
                {
                  name: 'BS Biotechnology ',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'Food Science and Technology',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'Science in Agriculture',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'APPLIED BIOSCIENCES',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Basic Sciences',
              programs: [
                {
                  name: 'Bachelor Mathematics ',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'Bachelor Physics ',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'Bachelor Chemistry ',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
              ],
            },
            {
              name: 'LAW SCHOOL',
              programs: [
                {
                  name: 'Bachelor of Laws',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
              ],
            },
            {
              name: 'SOCIAL SCIENCES',
              programs: [
                {
                  name: 'BS Economics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'Mass Communication',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'Public Administration',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'BS Psychology',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
              ],
            },
            {
              name: 'ART, DESIGN & ARCHITECTURE',
              programs: [
                {
                  name: 'Industrial Design for FALL 2023 Onwards ',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'Architecture Studies',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
              ],
            },
            {
              name: 'BUSINESS',
              programs: [
                {
                  name: 'BUSINESS ADMINISTRATION ',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'Accounting & Finance',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'Tourism and Hospitality Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
              ],
            },
            {
              name: 'MECHANICAL & MANUFACTURING',
              programs: [
                {
                  name: 'BS  MECHANICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
                {
                  name: 'AEROSPACE ENGINEERING',
                  feeStructure: 'PKR 480,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          degreeType: 'MASTERS',
          departments: [
            {
              name: 'Civil & Environmental Engineering',
              programs: [
                {
                  name: 'CONSTRUCTION ENGINEERING AND MANAGEMENT',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'URBAN & REGIONAL PLANNING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'REMOTE SENSING AND GEOGRAPHICAL INFORMATION SYSTEMS',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ENVIRONMENTAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ENVIRONMENTAL SCIENCE',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'WATER RESOURCES ENGINEERING & MANAGEMENT',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'STRUCTURAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'TRANSPORTATION ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'GEOTECHNICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Chemical & Materials Engineering',
              programs: [
                {
                  name: 'MATERIALS AND SURFACE ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'CHEMICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'NANOSCIENCE & ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Electrical Engineering & Computer Science',
              programs: [
                {
                  name: 'INFORMATION TECHNOLOGY',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'COMPUTER SCIENCE',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'INNOVATIVE TECHNOLOGIES IN LEARNING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ELECTRICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'INFORMATION SECURITY',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'DATA SCIENCE',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ARTIFICIAL INTELLIGENCE',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Mechanical & Manufacturing Engineering',
              programs: [
                {
                  name: 'BIOMEDICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'BIOMEDICAL SCIENCES',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'DESIGN AND MANUFACTURING ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ROBOTICS AND INTELLIGENT MACHINE ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MECHANICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'US-Pakistan Center for Advanced Studies in Energy',
              programs: [
                {
                  name: 'ELECTRICAL ENGINEERING (POWER)',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'THERMAL ENERGY ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ENERGY SYSTEMS ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'RENEWABLE ENERGY',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: ' Balochistan Campus, Quetta',
              programs: [
                {
                  name: 'COMPUTER SCIENCE',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MINING ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'CIVIL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'College of Aeronautical Engineering',
              programs: [
                {
                  name: 'ELECTRICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MECHANICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ENGINEERING MANAGEMENT',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'AEROSPACE ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'AVIONICS ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'AVIATION MANAGEMENT',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'INDUSTRIAL AND MANUFACTURING ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'College of Electrical & Mechanical Engineering',
              programs: [
                {
                  name: 'ELECTRICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MECHANICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'COMPUTER ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MECHATRONICS ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ENGINEERING MANAGEMENT',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'SOFTWARE ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ARTIFICIAL INTELLIGENCE',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'APPLIED MATHEMATICS',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Military College of Engineering',
              programs: [
                {
                  name: 'CONSTRUCTION ENGINEERING AND MANAGEMENT',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'WATER RESOURCES ENGINEERING & MANAGEMENT',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MATHEMATICS',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'DISASTER MANAGEMENT',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'STRUCTURAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'TRANSPORTATION ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'GEOTECHNICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MINING ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Military College of Signals',
              programs: [
                {
                  name: 'COMPUTER SCIENCE',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ELECTRICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'INFORMATION SECURITY',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'SOFTWARE ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Pakistan Navy Engineering College',
              programs: [
                {
                  name: 'ELECTRICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MECHANICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MANUFACTURING ENGINEERING & MANAGEMENT',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'NAVAL ARCHITECTURE',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'CYBER SECURITY',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ARTIFICIAL INTELLIGENCE',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'National Institute of Transportation',
              programs: [
                {
                  name: 'STRUCTURAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'TRANSPORTATION ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'GEOTECHNICAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Institute of Environmental Sciences & Engineering',
              programs: [
                {
                  name: 'ENVIRONMENTAL ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'ENVIRONMENTAL SCIENCE',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Institute of Civil Engineering',
              programs: [
                {
                  name: 'MS Construction Engineering and Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Urban & Regional Planning',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Water Resources Engineering & Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Structural Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Transportation Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Geotechnical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Institute of Geographical Information Systems',
              programs: [
                {
                  name: 'MS Remote Sensing and Geographical Information Systems',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Business School',
              programs: [
                {
                  name: 'Masters in Business Administration (MBA)',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Executive MBA',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Human Resource Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Innovation and Entrepreneurship',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Logistics & Supply Chain Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Marketing',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'School of Art, Design & Architecture',
              programs: [
                {
                  name: 'Masters in Architectural Design',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Centre for International Peace & Stability',
              programs: [
                {
                  name: 'MS Peace & Conflict Studies',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Strategic Studies',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Institute of Peace & Conflict Studies',
              programs: [
                {
                  name: 'MS Peace & Conflict Studies',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'School of Social Sciences & Humanities',
              programs: [
                {
                  name: 'MS Innovative Technologies in Learning',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Career Counseling and Education',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Economics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Clinical Psychology',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Mass Communication',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Development Studies',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Governance & Public Policy',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Law School',
              programs: [
                {
                  name: 'Currently no programme offered for Masters.',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Atta-ur-Rahman School of Applied Bio Sciences',
              programs: [
                {
                  name: 'MS Healthcare Biotechnology',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Industrial Biotechnology',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Plant Biotechnology',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Agribusiness Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Molecular Medicine',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'School of Natural Sciences',
              programs: [
                {
                  name: 'MS Mathematics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Mathematics for Fall 2018 and prior',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Physics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Chemistry',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Statistics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'School of Health Sciences',
              programs: [
                {
                  name: 'Currently no programme offered for Masters.',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'School of Interdisciplinary Engineering & Sciences',
              programs: [
                {
                  name: 'MS Computational Science and Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Bioinformatics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Systems Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'MS Climate Change & Sustainable Development',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
          ],
        },
        {
          degreeType: 'PHD',
          departments: [
            {
              name: 'School of Civil & Environmental Engineering',
              programs: [
                {
                  name: 'PhD Urban & Regional Planning',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Construction Engineering and Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Remote Sensing and Geographical Information Systems',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Environmental Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Environmental Science',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Structural Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Water Resources Engineering & Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Geotechnical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Transportation Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'School of Chemical & Materials Engineering',
              programs: [
                {
                  name: 'PhD Materials and Surface Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Chemical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Nanoscience & Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'School of Electrical Engineering & Computer Science',
              programs: [
                {
                  name: 'PhD Information Technology',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Electrical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Information Security',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Computer Science',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Artificial Intelligence',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'School of Mechanical & Manufacturing Engineering',
              programs: [
                {
                  name: 'PhD Design and Manufacturing Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Robotics and Intelligent Machine Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Mechanical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Biomedical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Biomedical Sciences',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'US-Pakistan Center for Advanced Studies in Energy',
              programs: [
                {
                  name: 'PhD Energy Systems Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Thermal Energy Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Electrical Engineering (Power)',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Balochistan Campus, Quetta',
              programs: [
                {
                  name: 'PhD Computer Science',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Civil Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'College of Aeronautical Engineering',
              programs: [
                {
                  name: 'PhD Electrical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Mechanical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Aerospace Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Avionics Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'College of Electrical & Mechanical Engineering',
              programs: [
                {
                  name: 'PhD Electrical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Mechanical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Computer Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Mechatronics Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Engineering Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Software Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Applied Mathematics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Military College of Engineering',
              programs: [
                {
                  name: 'PhD Construction Engineering and Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Structural Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Water Resources Engineering & Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Mathematics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Geotechnical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Transportation Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Mining Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Military College of Signals',
              programs: [
                {
                  name: 'PhD Electrical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Information Security',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Computer Science',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Software Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Pakistan Navy Engineering College',
              programs: [
                {
                  name: 'PhD Electrical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Mechanical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Manufacturing Engineering & Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'National Institute of Transportation',
              programs: [
                {
                  name: 'PhD Structural Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Geotechnical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Transportation Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Institute of Environmental Sciences & Engineering',
              programs: [
                {
                  name: 'PhD Environmental Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Environmental Science',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Institute of Civil Engineering',
              programs: [
                {
                  name: 'PhD Urban & Regional Planning',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Construction Engineering and Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Structural Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Water Resources Engineering & Management',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Geotechnical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Transportation Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Institute of Geographical Information Systems',
              programs: [
                {
                  name: 'PhD Remote Sensing and Geographical Information Systems',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Business School',
              programs: [
                {
                  name: 'PhD Business Administration',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Centre for International Peace & Stability',
              programs: [
                {
                  name: 'PhD Peace & Conflict Studies',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Institute of Peace & Conflict Studies',
              programs: [
                {
                  name: 'PhD Peace & Conflict Studies',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'School of Social Sciences & Humanities',
              programs: [
                {
                  name: 'PhD Psychology',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Economics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Atta-ur-Rahman School of Applied Bio Sciences',
              programs: [
                {
                  name: 'PhD Applied Biosciences',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'School of Natural Sciences',
              programs: [
                {
                  name: 'PhD Mathematics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Physics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Chemistry',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Statistics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'School of Interdisciplinary Engineering & Sciences',
              programs: [
                {
                  name: 'PhD Computational Science and Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Bioinformatics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'PhD Climate Change & Sustainable Development',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'COMSATS University',
      UniIMG: ComsetIMG,
      AdmissionPortal: 'https://admissions.comsats.edu.pk/home/login',
      Website: 'https://www.comsats.edu.pk/',
      degrees: [
        {
          degreeType: 'BACHELOR',
          departments: [
            {
              name: 'Accounting & Finance',
              programs: [
                {
                  name: 'Accounting & Finance',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Business Administration',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'CS & IT',
              programs: [
                {
                  name: 'SOFTWARE ENGINEERING',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                      profImg: Profile,
                    },
                    {
                      ProfessorName: 'Usman Zabit',
                      Rank: 'Associate Professor',
                      profImg: Profile,
                    },
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                      profImg: Profile,
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Computer Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Computer Science',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Cyber Security',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Software Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Data Sciences',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Civil',
              programs: [
                {
                  name: 'Civil Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'BioTech',
              programs: [
                {
                  name: 'Pharmacy (Pharm-D)',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Bioinformatics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Biotechnology',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Biosciences',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Mechanical Engineering',
              programs: [
                {
                  name: 'Mechanical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Chemical',
              programs: [
                {
                  name: 'Chemical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Social Science/ Environmental Sciences',
              programs: [
                {
                  name: 'Environmental Sciences',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Food Sciences and Nutrition',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Development Studies',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'International Relations',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Media and Communication Studies',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Economics',
              programs: [
                {
                  name: 'Economics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Economics with Data Science',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Electrical',
              programs: [
                {
                  name: 'Electronics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Electrical Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Electrical (Power) Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Electrical (Electronics) Engineering',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Geophysics',
              programs: [
                {
                  name: 'Geophysics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Geology',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Basic Sciences',
              programs: [
                {
                  name: 'Mathematics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Mathematics with Data Science',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Physics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Statistics',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'English',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Psychology',
              programs: [
                {
                  name: 'Psychology',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
            {
              name: 'Art and Design',
              programs: [
                {
                  name: 'Architecture',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Design',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Interior Design',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
                {
                  name: 'Fine Arts',
                  feeStructure: 'PKR 500,000 per semester',
                  facilitiesMembers: [
                    {
                      ProfessorName: 'SEEMAB LATIF',
                      Rank: 'Associate Professor',
                    },
                    {ProfessorName: 'Usman Zabit', Rank: 'Associate Professor'},
                    {
                      ProfessorName: 'Hassaan Khaliq Qureshi',
                      Rank: 'Associate Professor',
                    },
                  ],
                  LastYearMerit: 'The Merit was Close on 95.2%',
                },
              ],
            },
          ],
        },
      ],
    },
    // Other universities can be added similarly
  ],
};
