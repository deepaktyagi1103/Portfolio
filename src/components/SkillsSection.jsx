import React, { useEffect, useRef, useState } from 'react';
import { Database, Code2, Layout, Server, Wrench, Brain } from 'lucide-react';

const SkillsSection = () => {
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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      color: '#22d3ee',
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React.js', 'TypeScript', 'Responsive Design'],
    },
    {
      title: 'Backend',
      icon: Server,
      color: '#10b981',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT', 'PHP', 'Laravel'],
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: '#22d3ee',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'WordPress', 'cPanel', 'MySQL'],
    },
    {
      title: 'CS Core',
      icon: Brain,
      color: '#10b981',
      skills: ['Data Structures', 'OOP', 'DBMS', 'Algorithms'],
    },
    {
      title: 'Languages',
      icon: Code2,
      color: '#22d3ee',
      skills: ['JavaScript', 'TypeScript', 'Java', 'C/C++', 'Python'],
    },
    {
      title: 'Database',
      icon: Database,
      color: '#10b981',
      skills: ['MongoDB', 'MySQL', 'Database Design'],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 relative bg-gradient-to-b from-transparent to-[#0a0f1a]/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-[#22d3ee]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22d3ee] to-[#10b981] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-[#22d3ee]/20 hover:border-[#22d3ee]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#22d3ee]/20 h-full group">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="p-3 rounded-lg bg-gradient-to-br from-[#22d3ee]/20 to-[#10b981]/20 group-hover:scale-110 transition-transform duration-300"
                    >
                      <Icon style={{ color: category.color }} size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-[#22d3ee]/10 text-gray-300 text-sm rounded-lg border border-[#22d3ee]/30 hover:border-[#22d3ee] hover:bg-[#22d3ee]/20 hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                        style={{
                          boxShadow: '0 0 0 rgba(34, 211, 238, 0)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = '0 0 15px rgba(34, 211, 238, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 0 0 rgba(34, 211, 238, 0)';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-[#10b981]">Certifications</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] px-6 py-4 rounded-xl border border-[#10b981]/30 hover:border-[#10b981] hover:shadow-lg hover:shadow-[#10b981]/20 transition-all duration-300">
              <div className="text-[#10b981] font-semibold">Cybersecurity Fundamentals</div>
              <div className="text-gray-400 text-sm">CISCO</div>
            </div>
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] px-6 py-4 rounded-xl border border-[#10b981]/30 hover:border-[#10b981] hover:shadow-lg hover:shadow-[#10b981]/20 transition-all duration-300">
              <div className="text-[#10b981] font-semibold">Web Development</div>
              <div className="text-gray-400 text-sm">SOFTPRO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;