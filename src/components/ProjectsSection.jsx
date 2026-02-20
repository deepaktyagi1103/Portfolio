import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
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

  const projects = [
    {
      title: 'Village 24x7',
      subtitle: 'Organic E-commerce Platform',
      description: 'Full-stack MERN e-commerce platform with Razorpay payment integration, JWT authentication, admin panel, cart system, and performance-optimized UI.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Razorpay', 'JWT'],
      features: [
        'Secure payment integration with Razorpay',
        'Admin panel for product & order management',
        'JWT-based authentication system',
        'Optimized cart and checkout flow',
      ],
      liveUrl: 'https://www.village24x7.shop/',
      githubUrl: 'https://github.com/deepaktyagi1103',
      gradient: 'from-[#22d3ee] to-[#10b981]',
    },
    {
      title: 'SD Global Solution',
      subtitle: 'Business Website',
      description: 'Professional business website built with React & TypeScript featuring modern UI, EmailJS contact integration, and SEO optimization.',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'EmailJS', 'SEO'],
      features: [
        'Modern, responsive design',
        'Real-time contact form with EmailJS',
        'SEO-optimized for better visibility',
        'Type-safe with TypeScript',
      ],
      liveUrl: 'https://www.sdyglobalsolution.com/',
      githubUrl: 'https://github.com/deepaktyagi1103',
      gradient: 'from-[#10b981] to-[#22d3ee]',
    },
    {
      title: 'Sunlite System Website',
      subtitle: 'Company Website',
      description: 'Responsive company website built with React.js, Vite, and Tailwind CSS. Deployed on GitHub Pages with scalable project structure.',
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript', 'GitHub Pages'],
      features: [
        'Lightning-fast with Vite',
        'Fully responsive design',
        'Optimized image loading',
        'Clean, maintainable codebase',
      ],
      liveUrl: 'https://deepaktyagi1103.github.io/sunlitesystem/',
      githubUrl: 'https://github.com/deepaktyagi1103',
      gradient: 'from-[#22d3ee] via-[#10b981] to-[#22d3ee]',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-[#22d3ee]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22d3ee] to-[#10b981] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of production-grade applications demonstrating full-stack development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl border border-[#22d3ee]/20 overflow-hidden hover:border-[#22d3ee]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#22d3ee]/20 h-full flex flex-col project-card">
                {/* Gradient overlay */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                      <Code className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#22d3ee] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-[#22d3ee] mt-1">▹</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-[#22d3ee]/10 text-[#22d3ee] text-xs rounded border border-[#22d3ee]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-[#22d3ee] to-[#10b981] hover:shadow-lg hover:shadow-[#22d3ee]/50 transition-all"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#22d3ee] text-[#22d3ee] hover:bg-[#22d3ee]/10"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;