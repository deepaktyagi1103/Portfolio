import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const { toast } = useToast();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-[#22d3ee]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22d3ee] to-[#10b981] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#22d3ee]/10 rounded-lg border border-[#22d3ee]/30">
                    <Mail className="text-[#22d3ee]" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Email</div>
                    <a
                      href="mailto:tyagideepak2004@gmail.com"
                      className="text-white hover:text-[#22d3ee] transition-colors"
                    >
                      tyagideepak2004@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#10b981]/10 rounded-lg border border-[#10b981]/30">
                    <Phone className="text-[#10b981]" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Phone</div>
                    <a href="tel:+919639316742" className="text-white hover:text-[#10b981] transition-colors">
                      +91 9639316742
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#22d3ee]/10 rounded-lg border border-[#22d3ee]/30">
                    <MapPin className="text-[#22d3ee]" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Location</div>
                    <div className="text-white">Ghaziabad, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/deepaktyagi1103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl border border-[#22d3ee]/20 hover:border-[#22d3ee] hover:shadow-lg hover:shadow-[#22d3ee]/30 transition-all duration-300 group"
                >
                  <Github className="text-white group-hover:text-[#22d3ee] transition-colors" size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/deepaktyagi1103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl border border-[#10b981]/20 hover:border-[#10b981] hover:shadow-lg hover:shadow-[#10b981]/30 transition-all duration-300 group"
                >
                  <Linkedin className="text-white group-hover:text-[#10b981] transition-colors" size={28} />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-[#22d3ee]/20">
              <h4 className="text-lg font-semibold mb-3 text-white">Availability</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#10b981] rounded-full animate-pulse"></div>
                <span className="text-gray-300">Available for Full-Time Roles & Select Freelance Opportunities</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-xl border border-[#22d3ee]/20">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#0f172a] border-[#22d3ee]/30 text-white focus:border-[#22d3ee] focus:ring-[#22d3ee]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#0f172a] border-[#22d3ee]/30 text-white focus:border-[#22d3ee] focus:ring-[#22d3ee]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-[#0f172a] border-[#22d3ee]/30 text-white focus:border-[#22d3ee] focus:ring-[#22d3ee] resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#22d3ee] to-[#10b981] text-white py-6 text-lg font-semibold hover:shadow-xl hover:shadow-[#22d3ee]/50 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={20} />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;