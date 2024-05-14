import { EnumValues } from "zod";

export type optionType = {
  id: string;
  label: string;
}

export const JOBTYPES: EnumValues = [
  'Full-Time',
  'Part-Time', 
  'Remote', 
  'Internship'
];

export const JOB_LISTING_COLUMNS: string[] = [
  'Roles', 
  'Status', 
  'Date Posted', 
  'Due Date', 
  'Job Type', 
  'Applicants', 
  'Needs'
];

export const JOB_APPLICANTS_COLUMNS: string[] = [
  'Name',
  'Applied Date',
]

export const JOB_APPLICANTS_DATA = [
  {
    name: 'Hariyanto',
    appliedDate: '15 Aug 2023',
  }
]

export const JOB_LISTING_DATA = [
  {
    roles: 'Software Engineer',
    status: 'Live',
    datePosted: '12 Aug 2023',
    dueDate: '12 Sep 2023',
    jobType: 'Full-Time',
    applicants: 1,
    needs: 10,
  }
];

export const LOCATION_OPTIONS: optionType[] = [
  {
    id: "Indonesia",
    label: "Indonesia"
  },
  {
    id: "Malaysia",
    label: "Malaysia"
  },
  {
    id: "Singapura",
    label: "Singapura"
  },
  {
    id: "Thailand",
    label: "Thailand"
  },
]