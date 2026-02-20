import React, { useEffect, useRef, useState } from 'react';
import { Code2, Zap, Target, Award } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, experience: 0, skills: 0, clients: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = { projects: 5, experience: 2, skills: 20, clients: 10 };
      const duration = 2000;
      const steps = 50;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCounts({
          projects: Math.floor((targets.projects * step) / steps),
          experience: Math.floor((targets.experience * step) / steps),
          skills: Math.floor((targets.skills * step) / steps),
          clients: Math.floor((targets.clients * step) / steps),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    { icon: Code2, label: 'Production Projects', value: counts.projects, suffix: '+' },
    { icon: Zap, label: 'Years Experience', value: counts.experience, suffix: '+' },
    { icon: Target, label: 'Tech Skills', value: counts.skills, suffix: '+' },
    { icon: Award, label: 'Happy Clients', value: counts.clients, suffix: '+' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#22d3ee]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22d3ee] to-[#10b981] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Full-Stack Developer with hands-on experience in building scalable web applications 
              using the <span className="text-[#22d3ee] font-semibold">MERN stack</span>. Skilled in creating responsive UIs 
              with React & Tailwind CSS, and developing secure back-end services with Node.js, Express, 
              REST APIs, and JWT.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Completed <span className="text-[#10b981] font-semibold">5+ production-grade projects</span> with 
              scalable architecture and performance optimizations, showcasing end-to-end development skills.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Strong in Data Structures, OOP, and Git with a passion for solving real problems through 
              efficient, modular code. Currently working at <span className="text-[#22d3ee] font-semibold">GETCRR LLP</span> as 
              a Web Developer, managing hosting, cPanel, and performance optimization.
            </p>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-[#22d3ee]/20 hover:border-[#22d3ee]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#22d3ee]/20 group"
                  >
                    <Icon className="text-[#22d3ee] mb-3 group-hover:scale-110 transition-transform duration-300" size={32} />
                    <div className="text-3xl font-bold mb-2">
                      <span className="text-[#22d3ee]">{stat.value}</span>
                      <span className="text-[#10b981]">{stat.suffix}</span>
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;