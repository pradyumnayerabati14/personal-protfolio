import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Download, Github, Linkedin, Mail, ExternalLink, Code, Server, Brain, BookOpen, Zap, Activity } from 'lucide-react';
import { mockData } from '../utils/mock';
import ContactForm from '../components/ContactForm';
import SkillsVisualization from '../components/SkillsVisualization';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // This will be connected to backend later
    window.open('/api/download-cv', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAF9] via-[#F5F5F5] to-[#FFF8F0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">Pradyumna Yerabati</h1>
          <div className="hidden md:flex gap-6">
            {['hero', 'about', 'experience', 'projects', 'skills', 'education', 'interests', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-gray-900 capitalize ${
                  activeSection === section ? 'text-gray-900' : 'text-gray-600'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={mockData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href={mockData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gray-800/10 blur-3xl rounded-full"></div>
                <h1 className="relative text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  {mockData.hero.name}
                </h1>
              </div>
              <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 font-semibold">
                {mockData.hero.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {mockData.hero.description}
              </p>
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-gray-900 hover:bg-gray-800 text-white shadow-lg">
                  View Projects
                </Button>
                <Button onClick={handleDownloadCV} size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-50">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
            
            {/* Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative">
                  <img 
                    src={mockData.hero.image} 
                    alt="Pradyumna Yerabati"
                    className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {mockData.hero.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {mockData.about.bio}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {mockData.about.focus}
              </p>
              <div className="flex gap-3 flex-wrap">
                {mockData.about.highlights.map((highlight, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
            <Card className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <span className="text-gray-800">Quick Facts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Code className="h-5 w-5 text-gray-700 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Current Role</div>
                    <div className="text-sm text-gray-600">{mockData.about.currentRole}</div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-gray-700 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Education</div>
                    <div className="text-sm text-gray-600">{mockData.about.education}</div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-gray-700 mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-900">Specialization</div>
                    <div className="text-sm text-gray-600">{mockData.about.specialization}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white/50">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="space-y-6">
            {mockData.experience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mockData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white/50">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
          <SkillsVisualization skills={mockData.skills} />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>
          <div className="space-y-6">
            {mockData.education.map((edu, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-gray-900 mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-gray-700 font-medium">{edu.institution}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800 border border-gray-300">{edu.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <div>{edu.location}</div>
                    {edu.gpa && <div>• GPA: {edu.gpa}</div>}
                  </div>
                  {edu.achievements && (
                    <div className="mt-4">
                      <div className="text-sm font-medium text-gray-800 mb-2">Key Achievements:</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>• {achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-24 px-6 bg-gray-50/50">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible.interests ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Beyond Code</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {mockData.interests.map((interest, index) => {
              const IconComponent = interest.icon === 'BookOpen' ? BookOpen : interest.icon === 'Zap' ? Zap : Activity;
              return (
                <Card key={index} className="bg-white border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
                        <IconComponent className="h-6 w-6 text-gray-700" />
                      </div>
                      <CardTitle className="text-gray-900">{interest.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">{interest.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border-none text-white shadow-xl">
            <CardContent className="py-8">
              <blockquote className="text-lg italic text-center leading-relaxed">
                "{mockData.favoriteQuote.text}"
              </blockquote>
              <p className="text-center mt-4 text-gray-400">— {mockData.favoriteQuote.author}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">Pradyumna Yerabati</h3>
              <p className="text-gray-300 text-sm">Software Engineer specializing in AI/ML and building innovative solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-gray-200 transition-colors">About</button>
                <button onClick={() => scrollToSection('projects')} className="block text-gray-400 hover:text-gray-200 transition-colors">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-gray-200 transition-colors">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Connect</h4>
              <div className="flex gap-4">
                <a href={mockData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href={mockData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={`mailto:${mockData.contact.email}`} className="text-gray-400 hover:text-gray-200 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <Separator className="bg-gray-700 mb-8" />
          <div className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Pradyumna Yerabati. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
