import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#22d3ee]">Deepak</span>
              <span className="text-white">Tyagi</span>
            </div>
            <p className="text-gray-400 text-sm">
              Full Stack Developer passionate about building scalable web applications and solving real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-[#22d3ee] transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:tyagideepak2004@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#22d3ee] transition-colors text-sm"
              >
                <Mail size={16} />
                tyagideepak2004@gmail.com
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/deepaktyagi1103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-700 rounded-lg hover:border-[#22d3ee] hover:bg-[#22d3ee]/10 transition-all"
                >
                  <Github size={20} className="text-gray-400 hover:text-[#22d3ee]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/deepaktyagi1103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-700 rounded-lg hover:border-[#10b981] hover:bg-[#10b981]/10 transition-all"
                >
                  <Linkedin size={20} className="text-gray-400 hover:text-[#10b981]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Deepak Tyagi. Made with <Heart size={16} className="text-red-500 fill-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;