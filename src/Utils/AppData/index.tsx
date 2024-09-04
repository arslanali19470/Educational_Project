import {useState} from 'react';

export interface Program {
  name: string;
  feeStructure: string;
  facilitiesMembers: {
    ProfessorName: string;
    Rank: string;
  }[];
  LastYearMerit?: string;
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
}

export interface ProgramDetails {
  name: string;
  feeStructure: string;
  facilitiesMembers: string[];
  LastYearMerit: string;
}
// const [AllUniversities, setAllUniversities] = useState([]);
// console.log(data.universities);
// List of universities for the first dropdown
export const universitiesInPakistan = [
  // 'LUMS',
  'NUST',
  // 'Punjab University',
  // 'Aga Khan University',
  // 'Quaid-i-Azam University',
  // 'IBA',
  'COMSATS University',
  // 'University of Karachi',
  // 'PIEAS',
  // 'GIKI',
];

// Data structure to be compared with the university selected from the dropdown
export const data: {universities: University[]} = {
  universities: [
    {
      name: 'NUST',
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
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'URBAN & REGIONAL PLANNING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'REMOTE SENSING AND GEOGRAPHICAL INFORMATION SYSTEMS',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'ENVIRONMENTAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'ENVIRONMENTAL SCIENCE',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'WATER RESOURCES ENGINEERING & MANAGEMENT',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'STRUCTURAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'TRANSPORTATION ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'GEOTECHNICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Chemical & Materials Engineering',
              programs: [
                {
                  name: 'MATERIALS AND SURFACE ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'CHEMICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'NANOSCIENCE & ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Electrical Engineering & Computer Science',
              programs: [
                {
                  name: 'INFORMATION TECHNOLOGY',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'COMPUTER SCIENCE',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'INNOVATIVE TECHNOLOGIES IN LEARNING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'ELECTRICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'INFORMATION SECURITY',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'DATA SCIENCE',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'ARTIFICIAL INTELLIGENCE',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Mechanical & Manufacturing Engineering',
              programs: [
                {
                  name: 'BIOMEDICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'BIOMEDICAL SCIENCES',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'DESIGN AND MANUFACTURING ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'ROBOTICS AND INTELLIGENT MACHINE ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MECHANICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'US-Pakistan Center for Advanced Studies in Energy',
              programs: [
                {
                  name: 'ELECTRICAL ENGINEERING (POWER)',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'THERMAL ENERGY ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'ENERGY SYSTEMS ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'RENEWABLE ENERGY',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'NUST Balochistan Campus, Quetta',
              programs: [
                {
                  name: 'COMPUTER SCIENCE',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MINING ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'CIVIL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'College of Aeronautical Engineering',
              programs: [
                {
                  name: 'ELECTRICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MECHANICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'ENGINEERING MANAGEMENT',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'AEROSPACE ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'AVIONICS ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'AVIATION MANAGEMENT',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'INDUSTRIAL AND MANUFACTURING ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'College of Electrical & Mechanical Engineering',
              programs: [
                {
                  name: 'ELECTRICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MECHANICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'COMPUTER ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MECHATRONICS ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'ENGINEERING MANAGEMENT',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'SOFTWARE ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'ARTIFICIAL INTELLIGENCE',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'APPLIED MATHEMATICS',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Military College of Engineering',
              programs: [
                {
                  name: 'CONSTRUCTION ENGINEERING AND MANAGEMENT',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'WATER RESOURCES ENGINEERING & MANAGEMENT',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MATHEMATICS',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'DISASTER MANAGEMENT',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'STRUCTURAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'TRANSPORTATION ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'GEOTECHNICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MINING ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Military College of Signals',
              programs: [
                {
                  name: 'COMPUTER SCIENCE',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'ELECTRICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'INFORMATION SECURITY',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'SOFTWARE ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Pakistan Navy Engineering College',
              programs: [
                {
                  name: 'ELECTRICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MECHANICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MANUFACTURING ENGINEERING & MANAGEMENT',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'NAVAL ARCHITECTURE',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'CYBER SECURITY',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'ARTIFICIAL INTELLIGENCE',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'National Institute of Transportation',
              programs: [
                {
                  name: 'STRUCTURAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'TRANSPORTATION ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'GEOTECHNICAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Institute of Environmental Sciences & Engineering',
              programs: [
                {
                  name: 'ENVIRONMENTAL ENGINEERING',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'ENVIRONMENTAL SCIENCE',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'NUST Institute of Civil Engineering',
              programs: [
                {
                  name: 'MS Construction Engineering and Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Urban & Regional Planning',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Water Resources Engineering & Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Structural Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Transportation Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Geotechnical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Institute of Geographical Information Systems',
              programs: [
                {
                  name: 'MS Remote Sensing and Geographical Information Systems',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'NUST Business School',
              programs: [
                {
                  name: 'Masters in Business Administration (MBA)',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Executive MBA',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Human Resource Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Innovation and Entrepreneurship',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Logistics & Supply Chain Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Marketing',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'School of Art, Design & Architecture',
              programs: [
                {
                  name: 'Masters in Architectural Design',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Centre for International Peace & Stability',
              programs: [
                {
                  name: 'MS Peace & Conflict Studies',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Strategic Studies',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'NUST Institute of Peace & Conflict Studies',
              programs: [
                {
                  name: 'MS Peace & Conflict Studies',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'School of Social Sciences & Humanities',
              programs: [
                {
                  name: 'MS Innovative Technologies in Learning',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Career Counseling and Education',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Economics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Clinical Psychology',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Mass Communication',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Development Studies',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Governance & Public Policy',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'NUST Law School',
              programs: [
                {
                  name: 'Currently no programme offered for Masters.',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Atta-ur-Rahman School of Applied Bio Sciences',
              programs: [
                {
                  name: 'MS Healthcare Biotechnology',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Industrial Biotechnology',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Plant Biotechnology',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Agribusiness Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Molecular Medicine',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'School of Natural Sciences',
              programs: [
                {
                  name: 'MS Mathematics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Mathematics for Fall 2018 and prior',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Physics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Chemistry',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Statistics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'NUST School of Health Sciences',
              programs: [
                {
                  name: 'Currently no programme offered for Masters.',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'School of Interdisciplinary Engineering & Sciences',
              programs: [
                {
                  name: 'MS Computational Science and Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Bioinformatics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Systems Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'MS Climate Change & Sustainable Development',
                  feeStructure: '',
                  facilitiesMembers: [],
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
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Construction Engineering and Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Remote Sensing and Geographical Information Systems',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Environmental Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Environmental Science',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Structural Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Water Resources Engineering & Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Geotechnical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Transportation Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'School of Chemical & Materials Engineering',
              programs: [
                {
                  name: 'PhD Materials and Surface Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Chemical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Nanoscience & Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'School of Electrical Engineering & Computer Science',
              programs: [
                {
                  name: 'PhD Information Technology',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Electrical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Information Security',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Computer Science',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Artificial Intelligence',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'School of Mechanical & Manufacturing Engineering',
              programs: [
                {
                  name: 'PhD Design and Manufacturing Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Robotics and Intelligent Machine Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Mechanical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Biomedical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Biomedical Sciences',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'US-Pakistan Center for Advanced Studies in Energy',
              programs: [
                {
                  name: 'PhD Energy Systems Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Thermal Energy Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Electrical Engineering (Power)',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'NUST Balochistan Campus, Quetta',
              programs: [
                {
                  name: 'PhD Computer Science',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Civil Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'College of Aeronautical Engineering',
              programs: [
                {
                  name: 'PhD Electrical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Mechanical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Aerospace Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Avionics Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'College of Electrical & Mechanical Engineering',
              programs: [
                {
                  name: 'PhD Electrical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Mechanical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Computer Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Mechatronics Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Engineering Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Software Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Applied Mathematics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Military College of Engineering',
              programs: [
                {
                  name: 'PhD Construction Engineering and Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Structural Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Water Resources Engineering & Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Mathematics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Geotechnical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Transportation Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Mining Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Military College of Signals',
              programs: [
                {
                  name: 'PhD Electrical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Information Security',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Computer Science',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Software Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Pakistan Navy Engineering College',
              programs: [
                {
                  name: 'PhD Electrical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Mechanical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Manufacturing Engineering & Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'National Institute of Transportation',
              programs: [
                {
                  name: 'PhD Structural Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Geotechnical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Transportation Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Institute of Environmental Sciences & Engineering',
              programs: [
                {
                  name: 'PhD Environmental Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Environmental Science',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'NUST Institute of Civil Engineering',
              programs: [
                {
                  name: 'PhD Urban & Regional Planning',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Construction Engineering and Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Structural Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Water Resources Engineering & Management',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Geotechnical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Transportation Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Institute of Geographical Information Systems',
              programs: [
                {
                  name: 'PhD Remote Sensing and Geographical Information Systems',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'NUST Business School',
              programs: [
                {
                  name: 'PhD Business Administration',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Centre for International Peace & Stability',
              programs: [
                {
                  name: 'PhD Peace & Conflict Studies',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'NUST Institute of Peace & Conflict Studies',
              programs: [
                {
                  name: 'PhD Peace & Conflict Studies',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'School of Social Sciences & Humanities',
              programs: [
                {
                  name: 'PhD Psychology',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Economics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Atta-ur-Rahman School of Applied Bio Sciences',
              programs: [
                {
                  name: 'PhD Applied Biosciences',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'School of Natural Sciences',
              programs: [
                {
                  name: 'PhD Mathematics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Physics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Chemistry',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Statistics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'School of Interdisciplinary Engineering & Sciences',
              programs: [
                {
                  name: 'PhD Computational Science and Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Bioinformatics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'PhD Climate Change & Sustainable Development',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'COMSATS University',
      degrees: [
        {
          degreeType: 'BACHELOR',
          departments: [
            {
              name: 'Accounting & Finance',
              programs: [
                {
                  name: 'Accounting & Finance',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Business Administration',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'CS & IT',
              programs: [
                {
                  name: 'Artificial Intelligence',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Computer Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Computer Science',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Cyber Security',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Software Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Data Sciences',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Civil',
              programs: [
                {
                  name: 'Civil Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'BioTech',
              programs: [
                {
                  name: 'Pharmacy (Pharm-D)',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Bioinformatics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Biotechnology',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Biosciences',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Mechanical Engineering',
              programs: [
                {
                  name: 'Mechanical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Chemical',
              programs: [
                {
                  name: 'Chemical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Social Science/ Environmental Sciences',
              programs: [
                {
                  name: 'Environmental Sciences',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Food Sciences and Nutrition',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Development Studies',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'International Relations',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Media and Communication Studies',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Economics',
              programs: [
                {
                  name: 'Economics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Economics with Data Science',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Electrical',
              programs: [
                {
                  name: 'Electronics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Electrical Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Electrical (Power) Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Electrical (Electronics) Engineering',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Geophysics',
              programs: [
                {
                  name: 'Geophysics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Geology',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Basic Sciences',
              programs: [
                {
                  name: 'Mathematics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Mathematics with Data Science',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Physics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Statistics',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'English',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Psychology',
              programs: [
                {
                  name: 'Psychology',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
              ],
            },
            {
              name: 'Art and Design',
              programs: [
                {
                  name: 'Architecture',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Design',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Interior Design',
                  feeStructure: '',
                  facilitiesMembers: [],
                },
                {
                  name: 'Fine Arts',
                  feeStructure: '',
                  facilitiesMembers: [],
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
