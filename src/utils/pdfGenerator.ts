import jsPDF from 'jspdf';
import { hero, career, projects, whoIam } from '../data';

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

  // Header
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text(hero.name, margin, yPosition);
  yPosition += lineHeight + 5;

  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  doc.text(hero.title, margin, yPosition);
  yPosition += lineHeight + 5;

  doc.setFontSize(12);
  whoIam.paragraphs.forEach((line) => {
    yPosition = addWrappedText(line, margin, yPosition, pageWidth - 2 * margin);
  });
  yPosition += 6;

  yPosition = addSectionTitle("About Me", yPosition);
  
  // Add about paragraphs
  hero.paragraphs.forEach((paragraph) => {
    yPosition = addWrappedText(paragraph, margin, yPosition, pageWidth - 2 * margin);
  });
  yPosition += 5;

    // Invite to visit website for full CV (before About Me)
  yPosition = checkNewPage(yPosition, 20);
  doc.setFontSize(11);
  doc.setFont("helvetica", "italic");
  yPosition = addWrappedText("For the full CV and more details please visit my website: https://fangelo94.github.io/", margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition += 5;

  // Contacts section
  yPosition = addSectionTitle("Contacts", yPosition);
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  yPosition = addWrappedText("Email: a.falci@live.it", margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition = addWrappedText("Phone: +39 347 3927579", margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition = addWrappedText("LinkedIn: https://www.linkedin.com/in/angelo-falci-1292ab76/", margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition = addWrappedText("GitHub: https://github.com/FAngelo94/FAngelo94.github.io", margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition += 3;

  // Career section (only last 6 experiences)
  yPosition = addSectionTitle("Last Professional Experience", yPosition);

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
  yPosition = addWrappedText("To see my complete list of work experiences please visit my website.", margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition += 5;

  // Key Projects section (6 most recent)
  yPosition = checkNewPage(yPosition, 50);
  yPosition = addSectionTitle("Last Projects", yPosition);

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
      yPosition = addWrappedText(`Technologies: ${skills.join(', ')}`, margin, yPosition, pageWidth - 2 * margin, 10);
    }
    yPosition += 4;
  });

  // Invitation to visit the site for full projects list and more details
  yPosition = checkNewPage(yPosition, 24);
  doc.setFontSize(11);
  doc.setFont("helvetica", "italic");
  yPosition = addWrappedText("For the complete list of projects and full details for each project, please visit my website.", margin, yPosition, pageWidth - 2 * margin, 11);
  yPosition += 5;

  // All technologies I used
  yPosition = checkNewPage(yPosition, 40);
  yPosition = addSectionTitle("All technologies I used", yPosition);

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
  yPosition = addSectionTitle("Education", yPosition);

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