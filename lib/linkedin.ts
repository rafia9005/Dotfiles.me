/**
 * LinkedIn Experience Data
 */

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  employmentType?: string;
  location?: string;
  startDate: string;
  endDate?: string; // undefined means current position
  description: string;
  skills?: string[];
}

/**
 * Get experience data
 */
export function getExperience(): Experience[] {
  return [
    {
      id: "1",
      title: "Founder",
      company: "TeraRush Tech Solutions",
      employmentType: "Full-time",
      location: "Kota Malang · Remote",
      startDate: "2025-09",
      description: "As the Founder of TeraRush, I lead a mission to architect high-performance digital ecosystems that empower businesses. Combining my deep expertise as a Full Stack Developer with a vision for scalable cloud technologies, I bridge the gap between complex technical challenges and seamless user experiences. At TeraRush, we don't just build apps; we engineer future-ready foundations for digital growth.",
      skills: []
    },
    {
      id: "2",
      title: "Full-Stack Developer",
      company: "Terarush Tech Solutions",
      employmentType: "Full-time",
      location: "Digital World",
      startDate: "2024-04",
      endDate: "2025-09",
      description: "As a Full Stack Developer at Terarush, I specialize in building end-to-end digital solutions that marry seamless user experiences with high-performance backend architectures. I am responsible for developing scalable web applications using modern frameworks, managing secure cloud infrastructures, and ensuring every line of code contributes to a robust, future-ready ecosystem.",
      skills: []
    },
    {
      id: "3",
      title: "Full-stack Developer",
      company: "Fiverr",
      employmentType: "Freelance",
      location: "Remote",
      startDate: "2022-01",
      description: "I help businesses and startups turn complex ideas into high-performance digital products. As a Full Stack Developer, I don't just write code—I build end-to-end solutions that balance intuitive UX with secure, scalable backend architectures. Whether you need a future-ready ecosystem or a robust web application, I ensure every line of code drives your business growth.",
      skills: []
    },
    {
      id: "4",
      title: "Web Developer",
      company: "Freelance",
      employmentType: "Freelance",
      location: "Remote",
      startDate: "2022-01",
      endDate: "2026-03",
      description: "Work independently to design and develop scalable, custom digital solutions for a variety of clients, leveraging modern frameworks and cloud infrastructure. This role encompasses end-to-end project management—from technical collaboration to secure and efficient microservices delivery—and continuous optimization of system architecture to ensure maximum long-term performance.",
      skills: ["Linux", "Node.js", "+13 skills"]
    },
    {
      id: "5",
      title: "Software Engineer",
      company: "PT. Ryana Asta Jaya",
      employmentType: "Contract",
      location: "Bekasi, West Java, Indonesia · Remote",
      startDate: "2023-05",
      endDate: "2023-05",
      description: "Developing an integrated enterprise management system specifically for the plastics and packaging industry by designing internal process automation modules and efficient data management. This role focuses on direct collaboration with stakeholders to ensure the resulting digital solutions align with the company's operational needs and strategic objectives.",
      skills: []
    }
  ];
}

/**
 * Format date for display
 */
export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short"
  });
}

/**
 * Calculate duration between two dates
 */
export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                 (end.getMonth() - start.getMonth());
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths} ${remainingMonths === 1 ? 'mo' : 'mos'}`;
  } else if (remainingMonths === 0) {
    return `${years} ${years === 1 ? 'yr' : 'yrs'}`;
  } else {
    return `${years} ${years === 1 ? 'yr' : 'yrs'} ${remainingMonths} ${remainingMonths === 1 ? 'mo' : 'mos'}`;
  }
}
