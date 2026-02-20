import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        'service_o49n8qd',
        'template_3flzwcb',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'tAcFvMoA0mmrTXWAh'
      )
      .then(() => {
        toast({
          title: 'Message Sent!',
          description: 'Your message has been delivered successfully.',
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast({
          title: 'Error Sending Message',
          description: 'Please try again later.',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
          {/* Contact Info (unchanged) */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#22d3ee]/10 rounded-lg border border-[#22d3ee]/30">
                    <Mail className="text-[#22d3ee]" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Email</div>
                    <a href="mailto:tyagideepak2004@gmail.com" className="text-white hover:text-[#22d3ee] transition-colors">
                      tyagideepak2004@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 rounded-xl border border-[#22d3ee]/20">
              <h4 className="text-lg font-semibold mb-3 text-white">Availability</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#10b981] rounded-full animate-pulse"></div>
                <span className="text-gray-300">
                  Available for Full-Time Roles & Select Freelance Opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-xl border border-[#22d3ee]/20">
              <div className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#0f172a] border-[#22d3ee]/30 text-white"
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#0f172a] border-[#22d3ee]/30 text-white"
                />

                <Textarea
                  name="message"
                  rows={6}
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#0f172a] border-[#22d3ee]/30 text-white"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#22d3ee] to-[#10b981] py-6 text-lg font-semibold"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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