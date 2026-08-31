import { resume } from './data/resume';
import { SkipLink } from './components/SkipLink';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { ProjectList } from './components/ProjectList';
import { ExperienceList } from './components/ExperienceList';
import { SkillGroups } from './components/SkillGroups';
import { EducationList } from './components/EducationList';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div id="top">
      <SkipLink />
      <Nav name={resume.name} />
      <div className="mx-auto w-full max-w-[1080px] px-4 pt-2 pb-12 md:px-6">
        <Hero
          name={resume.name}
          title={resume.title}
          gender={resume.gender}
          birth={resume.birth}
          summary={resume.summary}
          links={resume.links}
        />
        <main className="grid gap-2" id="main">
          <Section id="skills" title="技能">
            <SkillGroups groups={resume.skills} />
          </Section>
          <Section id="work" title="作品">
            <ProjectList projects={resume.projects} />
          </Section>
          <Section id="experience" title="经历">
            <ExperienceList items={resume.experience} />
          </Section>
          <Section id="education" title="教育">
            <EducationList items={resume.education} />
          </Section>
        </main>
        <Footer name={resume.name} />
      </div>
    </div>
  );
}
