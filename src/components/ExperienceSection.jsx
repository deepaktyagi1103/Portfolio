import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: 'GETCRR LLP',
      role: 'Web Developer & Multitasking Executive',
      period: 'Oct 2024 - Present',
      description: 'Developed and maintained responsive websites using HTML, CSS, JavaScript, WordPress, and Laravel. Managed hosting, cPanel, FTP, and resolved technical issues.',
      achievements: [
        'Improved website performance and cross-browser compatibility',
        'Managed hosting, backups, and server configurations',
        'Coordinated with marketing teams for SEO optimization',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Laravel', 'cPanel'],
    },
    {
      company: 'Aptara Techbooks International',
      role: 'HTML & CSS Programmer',
      period: 'Jun 2024 - Sep 2024',
      location: 'Noida',
      description: 'Edited and structured U.S.-based eBooks using semantic HTML & CSS for responsive and accessible layouts.',
      achievements: [
        'Ensured WCAG-compliant code for accessibility',
        'Collaborated with QA and publishing teams',
        'Delivered high-volume digital content under tight deadlines',
      ],
      tech: ['HTML5', 'CSS3', 'WCAG', 'Semantic HTML'],
    },
    {
      company: 'Freelance / Personal Projects',
      role: 'Project Contributor & Web Developer',
      period: 'Oct 2024 - Jun 2024',
      description: 'Built full-stack and frontend projects using React, MERN stack, and EmailJS, improving usability and engagement.',
      achievements: [
        'Developed 5+ production-grade projects',
        'Implemented scalable architecture',
        'Optimized performance and user experience',
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'EmailJS'],
    },
    {
      company: 'Global Trendz',
      role: 'Front-End Developer Intern',
      period: 'Jun 2024 - Sep 2024',
      description: 'Developed reusable components and resolved UI bugs, reducing frontend issues significantly.',
      achievements: [
        'Created reusable React components',
        'Reduced frontend bugs by implementing best practices',
        'Worked under tight deadlines',
      ],
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 relative bg-gradient-to-b from-transparent to-[#0a0f1a]/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-[#22d3ee]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22d3ee] to-[#10b981] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#22d3ee] to-[#10b981]"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 transform transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-[#22d3ee]/20 hover:border-[#22d3ee]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#22d3ee]/20 ml-16 md:ml-0">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="text-[#22d3ee]" size={24} />
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    </div>
                    <h4 className="text-[#10b981] font-semibold mb-2">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                      {exp.location && <span>• {exp.location}</span>}
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-[#22d3ee] mt-1">▹</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#22d3ee]/10 text-[#22d3ee] text-xs rounded-full border border-[#22d3ee]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#22d3ee] rounded-full border-4 border-[#0f172a] z-10 group-hover:scale-125 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;