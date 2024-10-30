export type Course = {
  id: number
  code: string
  name: string
  creditHours: number
  prerequisiteIds: number[]
  corequisiteIds: number[]
}

export const courses: { [key: number]: Course } = {
  1: {
    id: 1,
    code: 'ARB100',
    name: 'Arabic',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  2: {
    id: 2,
    code: 'ENGL1001',
    name: 'Upper-Intermediate English',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  3: {
    id: 3,
    code: 'ENGL1002',
    name: 'Advanced English',
    creditHours: 3,
    prerequisiteIds: [2],
    corequisiteIds: [],
  },
  4: {
    id: 4,
    code: 'GERL101B1',
    name: 'German I B1-Track',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  5: {
    id: 5,
    code: 'GERL102B1',
    name: 'German II B1-Track',
    creditHours: 3,
    prerequisiteIds: [4],
    corequisiteIds: [],
  },
  7: {
    id: 7,
    code: 'MILS100',
    name: 'Military Science',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  8: {
    id: 8,
    code: 'NE101',
    name: 'National Education',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  9: {
    id: 9,
    code: 'NEE101',
    name: 'National Education in English',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  10: {
    id: 10,
    code: 'GERL201B1',
    name: 'German III B1-Track',
    creditHours: 3,
    prerequisiteIds: [5],
    corequisiteIds: [],
  },
  12: {
    id: 12,
    code: 'GERL202B1',
    name: 'German IV B1-Track',
    creditHours: 3,
    prerequisiteIds: [10],
    corequisiteIds: [],
  },
  14: {
    id: 14,
    code: 'MATH101',
    name: 'Calculus I',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  15: {
    id: 15,
    code: 'MATH102',
    name: 'Calculus II',
    creditHours: 3,
    prerequisiteIds: [14],
    corequisiteIds: [],
  },
  16: {
    id: 16,
    code: 'CS116',
    name: 'Computing Fundamentals',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [17],
  },
  17: {
    id: 17,
    code: 'CS1160',
    name: 'Computing Fundamentals Lab',
    creditHours: 1,
    prerequisiteIds: [],
    corequisiteIds: [16],
  },
  18: {
    id: 18,
    code: 'CS117',
    name: 'Object-Oriented Programming',
    creditHours: 3,
    prerequisiteIds: [16, 17],
    corequisiteIds: [19],
  },
  19: {
    id: 19,
    code: 'CS1170',
    name: 'Object-Oriented Programming Lab',
    creditHours: 1,
    prerequisiteIds: [16, 17],
    corequisiteIds: [18],
  },
  20: {
    id: 20,
    code: 'CE212',
    name: 'Digital Systems',
    creditHours: 3,
    prerequisiteIds: [16],
    corequisiteIds: [],
  },
  21: {
    id: 21,
    code: 'CE2120',
    name: 'Digital Systems Lab',
    creditHours: 1,
    prerequisiteIds: [16],
    corequisiteIds: [20],
  },
  22: {
    id: 22,
    code: 'EE317',
    name: 'Linear Algebra',
    creditHours: 3,
    prerequisiteIds: [14, 15],
    corequisiteIds: [],
  },
  23: {
    id: 23,
    code: 'GERL301B1',
    name: 'German V B1-Track',
    creditHours: 3,
    prerequisiteIds: [12],
    corequisiteIds: [],
  },
  25: {
    id: 25,
    code: 'GERL302B1',
    name: 'German VI B1-Track',
    creditHours: 3,
    prerequisiteIds: [23],
    corequisiteIds: [],
  },
  27: {
    id: 27,
    code: 'IE0121',
    name: 'Probability and Statistics',
    creditHours: 3,
    prerequisiteIds: [14],
    corequisiteIds: [],
  },
  28: {
    id: 28,
    code: 'CS201',
    name: 'Discrete Structures',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  29: {
    id: 29,
    code: 'CE201',
    name: 'Computer Architecture and Organization',
    creditHours: 3,
    prerequisiteIds: [20],
    corequisiteIds: [],
  },
  30: {
    id: 30,
    code: 'CS222',
    name: 'Theory of Algorithms',
    creditHours: 3,
    prerequisiteIds: [16, 28],
    corequisiteIds: [],
  },
  31: {
    id: 31,
    code: 'CS223',
    name: 'Data Structures',
    creditHours: 3,
    prerequisiteIds: [16],
    corequisiteIds: [],
  },
  32: {
    id: 32,
    code: 'CS264',
    name: 'Visual Programming',
    creditHours: 3,
    prerequisiteIds: [18, 33],
    corequisiteIds: [],
  },
  33: {
    id: 33,
    code: 'CS263',
    name: 'Database Management Systems',
    creditHours: 3,
    prerequisiteIds: [18],
    corequisiteIds: [],
  },
  34: {
    id: 34,
    code: 'CS323',
    name: 'Computational Theory',
    creditHours: 3,
    prerequisiteIds: [30, 31],
    corequisiteIds: [],
  },
  35: {
    id: 35,
    code: 'CS342',
    name: 'Software Engineering',
    creditHours: 3,
    prerequisiteIds: [31],
    corequisiteIds: [],
  },
  36: {
    id: 36,
    code: 'CE352',
    name: 'Computer Networks',
    creditHours: 3,
    prerequisiteIds: [29],
    corequisiteIds: [],
  },
  37: {
    id: 37,
    code: 'CS355',
    name: 'Web Technologies',
    creditHours: 3,
    prerequisiteIds: [18, 33],
    corequisiteIds: [],
  },
  38: {
    id: 38,
    code: 'CS356',
    name: 'Information Security',
    creditHours: 3,
    prerequisiteIds: [31],
    corequisiteIds: [],
  },
  39: {
    id: 39,
    code: 'CE357',
    name: 'Operating Systems',
    creditHours: 3,
    prerequisiteIds: [29],
    corequisiteIds: [],
  },
  40: {
    id: 40,
    code: 'CE3570',
    name: 'Operating Systems Lab',
    creditHours: 1,
    prerequisiteIds: [29],
    corequisiteIds: [39],
  },
  41: {
    id: 41,
    code: 'CS391',
    name: 'Field Training',
    creditHours: 0,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  42: {
    id: 42,
    code: 'CS416',
    name: 'Systems Programming',
    creditHours: 3,
    prerequisiteIds: [31],
    corequisiteIds: [],
  },
  43: {
    id: 43,
    code: 'CS451',
    name: 'Artificial Intelligence',
    creditHours: 3,
    prerequisiteIds: [30, 31],
    corequisiteIds: [],
  },
  44: {
    id: 44,
    code: 'CS491',
    name: 'International Internship 20 weeks',
    creditHours: 12,
    prerequisiteIds: [41],
    corequisiteIds: [],
  },
  45: {
    id: 45,
    code: 'CS492',
    name: 'Senior Project',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  46: {
    id: 46,
    code: 'CS330',
    name: 'Image Understanding',
    creditHours: 3,
    prerequisiteIds: [31, 22],
    corequisiteIds: [],
  },
  47: {
    id: 47,
    code: 'CS332',
    name: 'Computer Graphics',
    creditHours: 3,
    prerequisiteIds: [31, 22],
    corequisiteIds: [],
  },
  48: {
    id: 48,
    code: 'CS419',
    name: 'Compiler Construction',
    creditHours: 3,
    prerequisiteIds: [30, 31],
    corequisiteIds: [],
  },
  49: {
    id: 49,
    code: 'CS477',
    name: 'Mobile Computing',
    creditHours: 3,
    prerequisiteIds: [18, 33],
    corequisiteIds: [],
  },
  50: {
    id: 50,
    code: 'CS333',
    name: 'Game Programming',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  51: {
    id: 51,
    code: 'CS357',
    name: 'Cybersecurity',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  52: {
    id: 52,
    code: 'CS358',
    name: 'Multimedia Systems Design',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  53: {
    id: 53,
    code: 'CS359',
    name: 'Internet of Things',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  54: {
    id: 54,
    code: 'CS364',
    name: 'Information Retrieval',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  55: {
    id: 55,
    code: 'CS365',
    name: 'Systems Analysis and Design',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  56: {
    id: 56,
    code: 'CS371',
    name: 'Bioinformatics',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  57: {
    id: 57,
    code: 'CS430',
    name: 'Virtual and Augmented Reality',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  58: {
    id: 58,
    code: 'CS432',
    name: 'Scientific Visualization',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  59: {
    id: 59,
    code: 'CS439',
    name: 'Computer Animation',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  60: {
    id: 60,
    code: 'CS450',
    name: 'Operations Optimization',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  61: {
    id: 61,
    code: 'CS457',
    name: 'Decision Support Systems and Intelligent Systems',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  62: {
    id: 62,
    code: 'CS458',
    name: 'Wireless Networks',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  63: {
    id: 63,
    code: 'CS460',
    name: 'Data Mining',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  64: {
    id: 64,
    code: 'CS462',
    name: 'Database Design',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  65: {
    id: 65,
    code: 'CS481',
    name: 'Special Topics in Computer Graphics',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  66: {
    id: 66,
    code: 'CS482',
    name: 'Special Topics in Software Engineering',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  67: {
    id: 67,
    code: 'CS484',
    name: 'Special Topics in Database Technologies and Applications',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  68: {
    id: 68,
    code: 'CS489',
    name: 'Special Topics in Algorithms',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  69: {
    id: 69,
    code: 'CS451',
    name: 'Natural Language Processing',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  70: {
    id: 70,
    code: 'CS481',
    name: 'Special Topics in Data Science Technologies and Applications',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  71: {
    id: 71,
    code: 'CS483',
    name: 'Special Topics in Applied Computer Science',
    creditHours: 1,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  72: {
    id: 72,
    code: 'CS483',
    name: 'Special Topics in Applied Computer Science',
    creditHours: 2,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  73: {
    id: 73,
    code: 'CS483',
    name: 'Special Topics in Applied Computer Science',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  74: {
    id: 74,
    code: 'DES101',
    name: "Arts' Appreciation",
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  75: {
    id: 75,
    code: 'EI101',
    name: 'Leadership and Emotional Intelligence',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  76: {
    id: 76,
    code: 'IC101',
    name: 'Intercultural Communications',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  77: {
    id: 77,
    code: 'PE101',
    name: 'Sports and Health',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  78: {
    id: 78,
    code: 'SE301',
    name: 'Social Entrepreneurship and Enterprises',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  79: {
    id: 79,
    code: 'SFTS101',
    name: 'Soft Skills',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  80: {
    id: 80,
    code: 'BE302',
    name: 'Business Entrepreneurship',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
  81: {
    id: 81,
    code: 'TW303',
    name: 'Technical and Workplace Writing',
    creditHours: 3,
    prerequisiteIds: [],
    corequisiteIds: [],
  },
}
