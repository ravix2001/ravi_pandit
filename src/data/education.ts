export type EducationEntry = {
  id: string;
  credential: string;
  institution: string;
  detail: string;
  start: string;
  end: string;
};

export const education: EducationEntry[] = [
  {
    id: "ioe",
    credential: "B.E. Computer Engineering",
    institution: "Purwanchal Engineering Campus, IOE, Tribhuvan University",
    detail: "Graduated 2026",
    start: "2022",
    end: "2026",
  },
  {
    id: "hsc",
    credential: "Higher Secondary Education (Science)",
    institution: "Kantipur Secondary School",
    detail: "GPA 3.69 / 4.0",
    start: "2018",
    end: "2020",
  },
  {
    id: "see",
    credential: "Secondary Education Examination (SEE)",
    institution: "Kantipur Secondary School",
    detail: "GPA 3.80 / 4.0",
    start: "2018",
    end: "2018",
  },
];
