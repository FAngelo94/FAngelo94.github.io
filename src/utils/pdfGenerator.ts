import jsPDF from 'jspdf';
import { en } from '../i18n/en';
import { it as itLang } from '../i18n/it';

// choose translations based on an optional lang parameter or URL parameter (default EN)
const getLocaleTranslations = (langParam?: string) => {
  if (typeof window === 'undefined' && !langParam) return en;
  try {
    const lang = langParam ?? (typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('lang') : null);
    if (lang === 'it') return itLang;
  } catch (e) {
    // ignore parsing errors and fallback to EN
  }
  return en;
};

export const generateCV = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const lineHeight = 6;
  let yPosition = margin;

  // Helper function to add text with line wrapping
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 12) => {
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + (lines.length * lineHeight);
  };

  // Helper function to add section title
  const addSectionTitle = (title: string, y: number) => {
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(title, margin, y);

    // Add underline
    doc.setLineWidth(0.5);
    doc.line(margin, y + 2, pageWidth - margin, y + 2);

    doc.setFont("helvetica", "normal");
    return y + lineHeight + 8;
  };

  // Helper function to check if new page is needed
  const checkNewPage = (currentY: number, spaceNeeded: number = 30) => {
    if (currentY + spaceNeeded > 280) {
      doc.addPage();
      return margin;
    }
    return currentY;
  };

    // Resolve locale and load translations at runtime
    const params = (typeof window !== 'undefined') ? new URLSearchParams(window.location.search) : null;
    const lang = params?.get('lang') || undefined;
    const t = getLocaleTranslations(lang);
    const { hero, career, projects, whoIam, home } = t;
    const isIt = lang === 'it';
    const labels = {
      aboutMe: isIt ? 'Chi sono' : 'About Me',
      websiteInvite: isIt ? "Per il CV completo e maggiori dettagli visita il mio sito: https://angelofalci.com/" : 'For the full CV and more details please visit my website: https://angelofalci.com/',
      contacts: isIt ? 'Contatti' : 'Contacts',
      lastExperience: isIt ? 'Ultime esperienze professionali' : 'Last Professional Experience',
      projects: isIt ? 'Ultimi progetti' : 'Last Projects',
      projectsInvite: isIt ? 'Per la lista completa dei progetti e i dettagli visita il mio sito.' : 'For the complete list of projects and full details for each project, please visit my website.',
      allTech: isIt ? "Tutte le tecnologie che ho usato" : 'All technologies I used',
      mainTech: isIt ? 'Tecnologie principali' : 'Main Technologies',
      education: isIt ? 'Formazione' : 'Education',
      visitCareer: isIt ? 'Per vedere tutte le mie esperienze visita il mio sito.' : 'To see my complete list of work experiences please visit my website.',
      mainSubtitle: isIt ? 'Sono la persona giusta per te se' : 'I am the right person for you if',
    };

  // Header
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text(hero.name, margin, yPosition);
  yPosition += lineHeight + 5;

  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  doc.text(hero.title, margin, yPosition);
  yPosition += lineHeight + 5;

  yPosition = addSectionTitle(labels.mainSubtitle, yPosition);

  doc.setFontSize(12);
  home.paragraphs.forEach((line) => {
    yPosition = addWrappedText(line, margin, yPosition, pageWidth - 2 * margin);
  });
  yPosition += 6;

  yPosition = addSectionTitle(labels.aboutMe, yPosition);

  // Add about paragraphs
  doc.setFontSize(12);
  whoIam.paragraphs.forEach((line) => {
    yPosition = addWrappedText(line, margin, yPosition, pageWidth - 2 * margin);
  });
  yPosition += 6;

  // Invite to visit website for full CV (before About Me)
  yPosition = checkNewPage(yPosition, 20);
  doc.setFontSize(11);
  doc.setFont("helvetica", "italic");
  yPosition = addWrappedText(labels.websiteInvite, margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition += 5;

  // Contacts section
  yPosition = addSectionTitle(labels.contacts, yPosition);

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  yPosition = addWrappedText("Email: a.falci@live.it", margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition = addWrappedText("Phone: +39 347 3927579", margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition = addWrappedText("LinkedIn: https://www.linkedin.com/in/angelo-falci-1292ab76/", margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition = addWrappedText("GitHub: https://github.com/FAngelo94/FAngelo94.github.io", margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition += 50;

  // Career section (only last 6 experiences)
  yPosition = checkNewPage(yPosition, 40);
  yPosition = addSectionTitle(labels.lastExperience, yPosition);

  const lastSixJobs = career.jobs.slice(0, 6);
  lastSixJobs.forEach((job) => {
    yPosition = checkNewPage(yPosition, 40);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    yPosition = addWrappedText(job.title, margin, yPosition, pageWidth - 2 * margin, 14);
    yPosition += 2;

    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    yPosition = addWrappedText(`${job.company} | ${job.whereAndWhen}`, margin, yPosition, pageWidth - 2 * margin, 12);
    yPosition += 2;

    doc.setFont("helvetica", "normal");
    if (job.description) {
      yPosition = addWrappedText(job.description, margin, yPosition, pageWidth - 2 * margin, 10);
    }
    yPosition += 5;
  });

  // Invitation to visit the site for full career list
  yPosition = checkNewPage(yPosition, 24);
  doc.setFontSize(11);
  doc.setFont("helvetica", "italic");
  yPosition = addWrappedText(labels.visitCareer, margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition += 5;

  // Key Projects section (6 most recent)
  yPosition = checkNewPage(yPosition, 50);
  yPosition = addSectionTitle(labels.projects, yPosition);

  const keyProjects = projects.projects.filter(p => p.description && p.description.trim() !== '').slice(0, 6);
  keyProjects.forEach((project) => {
    yPosition = checkNewPage(yPosition, 40);

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    yPosition = addWrappedText(project.title, margin, yPosition, pageWidth - 2 * margin, 12);
    yPosition += 2;

    doc.setFont("helvetica", "normal");
    yPosition = addWrappedText(project.description, margin, yPosition, pageWidth - 2 * margin, 10);

    // Add main skills
    const skills = (project.allSkills && project.allSkills.length > 0) ? project.allSkills : (project.mainSkills || []);
    if (skills && skills.length > 0) {
      yPosition += 1;
      doc.setFontSize(10);
      doc.setFont("helvetica", "italic");
      const techLabel = isIt ? 'Tecnologie: ' : 'Technologies: ';
      yPosition = addWrappedText(`${techLabel}${skills.join(', ')}`, margin, yPosition, pageWidth - 2 * margin, 10);
    }
    yPosition += 4;
  });

  // Invitation to visit the site for full projects list and more details
  yPosition = checkNewPage(yPosition, 24);
  doc.setFontSize(11);
  doc.setFont("helvetica", "italic");
  yPosition = addWrappedText(labels.projectsInvite, margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition += 5;

  // All technologies I used
  yPosition = checkNewPage(yPosition, 40);
  yPosition = addSectionTitle(labels.mainTech, yPosition);
  const mainTechSet = new Set<string>('Javascript, Python, React, OpenAI, Django, VS Code, TypeScript, HTML, CSS, Vite, Docker, AWS, Firebase, MySQL, Android, Windows, Ubuntu'.split(', ').map(s => s.trim()));

  const mainTechList = Array.from(mainTechSet).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  if (mainTechList.length > 0) {
    // Print as comma separated but split across lines if long
    const techText = mainTechList.join(', ');
    yPosition = addWrappedText(techText, margin, yPosition, pageWidth - 2 * margin, 11);
    yPosition += 5;
  }

  yPosition = addSectionTitle(labels.allTech, yPosition);

  // Collect technologies from projects (allSkills preferred, fallback to mainSkills)
  const techSet = new Set<string>();
  projects.projects.forEach(p => {
    const skills = (p.allSkills && p.allSkills.length > 0) ? p.allSkills : (p.mainSkills || []);
    skills.forEach(s => {
      const cleaned = s && s.trim();
      if (cleaned) techSet.add(cleaned);
    });
  });

  const techList = Array.from(techSet).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  if (techList.length > 0) {
    // Print as comma separated but split across lines if long
    const techText = techList.join(', ');
    yPosition = addWrappedText(techText, margin, yPosition, pageWidth - 2 * margin, 11);
    yPosition += 5;
  }

  // Education section (moved after Projects)
  yPosition = checkNewPage(yPosition, 50);
  yPosition = addSectionTitle(labels.education, yPosition);

  career.schools.forEach((school) => {
    yPosition = checkNewPage(yPosition, 35);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    yPosition = addWrappedText(school.title, margin, yPosition, pageWidth - 2 * margin, 14);
    yPosition += 2;

    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    yPosition = addWrappedText(`${school.where} | ${school.when}`, margin, yPosition, pageWidth - 2 * margin, 12);
    yPosition += 2;

    if (school.description) {
      doc.setFont("helvetica", "normal");
      yPosition = addWrappedText(school.description, margin, yPosition, pageWidth - 2 * margin, 10);
    }
    yPosition += 5;
  });

  // Generate and download the PDF
  const fileName = `${hero.name.replace(/\s+/g, '_')}_CV.pdf`;
  doc.save(fileName);
};