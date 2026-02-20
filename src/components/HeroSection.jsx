import React, { useEffect, useState } from 'react';
import { Github, Linkedin, ChevronDown, Download } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const skills = ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript'];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const skill = skills[currentSkillIndex];
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= skill.length) {
        setDisplayText(skill.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentSkillIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
      {/* Floating code background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <pre className="text-[#22d3ee] text-xs animate-float">
          {`const developer = {
  name: 'Deepak Tyagi',
  skills: ['React', 'Node.js', 'MongoDB'],
  passion: 'Building scalable solutions'
};`}
        </pre>
      </div>

      <div className="container mx-auto text-center z-10">
        <div className="mb-6 inline-block px-4 py-2 bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded-full">
          <span className="text-[#22d3ee] text-sm font-medium">Available for Opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Full Stack Developer
          <br />
          <span className="bg-gradient-to-r from-[#22d3ee] to-[#10b981] bg-clip-text text-transparent">
            Crafting Scalable Digital Experiences
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-400 mb-4 h-8">
          <span>MERN Stack | </span>
          <span className="text-[#22d3ee] font-mono">{displayText}</span>
          <span className="animate-pulse">|</span>
          <span> | Performance-Driven UI</span>
        </div>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Building production-grade web applications with clean architecture and optimal performance
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-[#22d3ee] to-[#10b981] text-white px-8 py-6 text-lg font-semibold hover:shadow-lg hover:shadow-[#22d3ee]/50 transition-all duration-300"
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            className="border-2 border-[#22d3ee] text-[#22d3ee] px-8 py-6 text-lg font-semibold hover:bg-[#22d3ee]/10 transition-all duration-300"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/deepaktyagi1103"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-700 rounded-full hover:border-[#22d3ee] hover:bg-[#22d3ee]/10 transition-all duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/deepaktyagi1103"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-700 rounded-full hover:border-[#22d3ee] hover:bg-[#22d3ee]/10 transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-[#22d3ee]" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;