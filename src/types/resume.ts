export interface ResumeLinks {
  email: string;
  github: string;
  website: string;
}

export interface ExperienceItem {
  org: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  school: string;
  major: string;
  degree: string;
  period: string;
}

export interface ProjectItem {
  name: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  href?: string;
  wip?: boolean;
}

export interface SkillGroup {
  label: string;
  blurb: string;
  highlights: string[];
  items: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  gender: string;
  birth: string;
  location: string;
  summary: string;
  links: ResumeLinks;
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
}
