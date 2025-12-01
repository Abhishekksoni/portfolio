'use client'
import { ArrowRight, Award, Cloud, Code, Cpu, Database, Download, ExternalLink, Github, GraduationCap, Linkedin, Mail, Menu, Terminal, X } from 'lucide-react';
import React from 'react';

export default function Portfolio() {
const [scrollY, setScrollY] = React.useState<number>(0);

const [mousePosition, setMousePosition] = React.useState<{ x: number; y: number }>({ 
  x: 0, 
  y: 0 
});

const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

const heroRef = React.useRef<HTMLDivElement | null>(null);
const projectRefs = React.useRef<(HTMLDivElement | null)[]>([]);


  React.useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => setScrollY(window.scrollY);
const handleMouseMove = (e: MouseEvent) => {
  setMousePosition({ 
    x: (e.clientX / window.innerWidth) * 100,
    y: (e.clientY / window.innerHeight) * 100,
  });
};

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const techStack = [
    { icon: <Terminal className="w-5 h-5" />, name: 'JavaScript/TypeScript', color: 'from-yellow-400 to-yellow-600' },
    { icon: <Code className="w-5 h-5" />, name: 'React/Next.js', color: 'from-cyan-400 to-blue-600' },
    { icon: <Database className="w-5 h-5" />, name: 'Node.js/Express', color: 'from-green-400 to-emerald-600' },
    { icon: <Cloud className="w-5 h-5" />, name: 'PostgreSQL/MongoDB', color: 'from-blue-400 to-indigo-600' },
    { icon: <Cpu className="w-5 h-5" />, name: 'AI/ML/LangChain', color: 'from-purple-400 to-pink-600' },
  ];

  const projects = [
{
  "name": "LearnLinks",
  "tagline": "AI-Powered Learning Automation Platform",
  "tech": ["Next.js", "TypeScript", "Gemini AI"],
  "description": "LearnLinks is an intelligent learning assistant that transforms raw documents, PDFs, and web content into structured lessons, quizzes, summaries, and personalized study material. It leverages Gemini Vision and LLM reasoning to analyze content deeply and auto-generate high-quality educational modules with minimal manual effort.",
  "features": [
    "Auto-generate lessons, summaries, and flashcards from any document",
    "Shareable study links for teams, students, and institutions"
  ],
  "metrics": [
    "80% faster course creation",
    "95% accurate concept extraction",
  ],
  "link": "https://learnlinks.vercel.app/",
  "gradient": "from-emerald-500/20 to-green-500/20"
},
    {
      name: 'ArtisansAI',
      tagline: 'AI-Powered Marketing Automation',
      tech: ['Next.js', 'TypeScript', 'Gemini AI', 'Computer Vision'],
      description: 'Enterprise-grade AI tool transforming product imagery into comprehensive marketing campaigns. Leverages Google Gemini Vision for intelligent image analysis and automated content generation.',
      metrics: ['95% faster content creation', 'SEO-optimized output', 'Multi-platform support'],
      link: 'https://artisans-five.vercel.app/',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      name: 'CreativeAI',
      tagline: 'AI Knowledge Hub',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS S3'],
      description: 'Production-ready content platform architected for scale. Features advanced caching strategies, optimized database queries, and CDN integration for global content delivery.',
      metrics: [],
      link: 'https://creative-ai-one.vercel.app',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
{
  name: 'Next.js Scheduler',
  tagline: 'Smart Calendar Booking Platform',
  tech: ['Next.js', 'Google Calendar API', 'TypeScript', 'Real-time Sync'],
  description: 'Seamless appointment scheduling platform connecting buyers and sellers through Google Calendar integration. Features real-time availability tracking, automatic meeting link generation, and intelligent time slot management.',
  metrics: ['Real-time availability', 'Auto meeting links', 'Simple scheduling'],
  link: 'https://google-cal-un4e.vercel.app/',
  gradient: 'from-red-500/20 to-orange-500/20'
},
    {
      name: 'Prompt-to-Animation',
      tagline: 'NLP-Driven Animation System',
      tech: ['FastAPI', 'LangChain', 'Manim', 'Python'],
      description: 'Revolutionary animation framework using NLP to convert natural language into mathematical and technical visualizations. Built for educational institutions and content creators.',
      metrics: ['Natural language processing', 'Dynamic scene generation', 'Educational focus'],
      link: 'https://github.com/prompt-to-animation',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
{
  name: 'PDF Q&A App',
  tagline: 'AI-Powered Document Intelligence',
  tech: ['Next.js', 'LangChain', 'OpenAI', 'Pinecone'],
  description: 'Intelligent document analysis platform enabling users to upload PDFs and interact with content through natural language questions. Leverages RAG (Retrieval-Augmented Generation) with Pinecone vector database for accurate, context-aware responses from document content.',
  metrics: ['AI-powered responses', 'Vector search', 'Instant answers'],
  link: 'https://pdf-qn-a-app.vercel.app/',
  gradient: 'from-indigo-500/20 to-purple-500/20'
}
  ];

  const experience = {
    company: 'Esnad Firm',
    location: 'Saudi Arabia',
    role: 'Software Engineer',
    period: 'June 2024 – Oct 2024',
    achievements: [
      'Architected scalable REST APIs serving 10k+ daily requests with 30% performance improvement',
      'Implemented JWT-based authentication system with role-based access control (RBAC)',
      'Developed real-time shipment tracking using WebSockets and automated cron-based notifications',
      'Built comprehensive admin dashboard with advanced analytics and data visualization',
      'Established CI/CD pipelines reducing deployment time by 60%'
    ]
  };

  const skillCategories = [
    { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'HTML/CSS'], color: 'from-yellow-500 to-orange-500' },
    { title: 'Frontend', skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive Design'], color: 'from-cyan-500 to-blue-500' },
    { title: 'Backend', skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'], color: 'from-green-500 to-emerald-500' },
    { title: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'], color: 'from-blue-500 to-indigo-500' },
    { title: 'AI/ML', skills: ['LangChain', 'OpenAI', 'Google Gemini', 'NLP'], color: 'from-purple-500 to-pink-500' },
    { title: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Postman'], color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black" />
        
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full blur-3xl opacity-20 transition-all duration-[3000ms] ease-out animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, rgba(59,130,246,0.4) 30%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20 transition-all duration-[4000ms] ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(168,85,247,0.4) 30%, transparent 70%)',
            left: `${100 - mousePosition.x}%`,
            top: `${100 - mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-10 transition-all duration-[5000ms] ease-out animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.5) 0%, rgba(219,39,119,0.3) 30%, transparent 70%)',
            left: `${mousePosition.x * 0.5}%`,
            top: `${mousePosition.y * 0.8}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        
        {/* Radial Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Premium Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-cyan-500/5' : ''} ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-6">
          <div className="flex justify-between items-center">
            <div className="relative group cursor-pointer">
              <div className="text-xl sm:text-2xl font-bold tracking-wider">
                <span className="text-white">
                  ABHISHEK SONI
                </span>
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
              {[
                { href: 'https://github.com/Abhishekksoni', icon: Github },
                { href: 'https://linkedin.com/in/abhishek-soni15', icon: Linkedin },
                { href: 'mailto:abhisheksoni.15@outlook.com', icon: Mail }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2 rounded-full hover:bg-white/5 transition-all duration-300"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                );
              })}
              <a
                href="mailto:abhisheksoni.15@outlook.com"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-white/5 transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
              <div className="flex flex-col gap-4 p-6">
                {[
                  { href: 'https://github.com/Abhishekksoni', icon: Github, label: 'GitHub' },
                  { href: 'https://linkedin.com/in/abhishek-soni15', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:abhisheksoni.15@outlook.com', icon: Mail, label: 'Email' }
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-cyan-400" />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
                <a
                  href="mailto:abhisheksoni.15@outlook.com"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-center font-semibold"
                >
                  Contact Me
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-block mb-6 px-4 sm:px-6 py-2 mt-20 sm:mt-24 lg:mt-6 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
              <span className="text-xs sm:text-sm font-medium text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Available for opportunities
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 leading-tight px-4">
              <span className="block bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                Software
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] animate-gradient-shift">
                Engineer
              </span>
            </h1>
            
            <p className="text-base sm:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
              Architecting <span className="text-white font-semibold">scalable solutions</span> at the intersection of 
              <span className="text-cyan-400 font-semibold"> AI</span>, 
              <span className="text-blue-400 font-semibold"> full-stack development</span>, and 
              <span className="text-purple-400 font-semibold"> cloud infrastructure</span>
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-12 sm:mb-16 px-4">
              <a 
                href="#projects"
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:abhisheksoni.15@outlook.com"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/5 font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Get in touch
              </a>
            </div>

            {/* Tech Stack Showcase */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center max-w-5xl mx-auto px-4">
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="observe opacity-0 group px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${tech.color}`}>
                      {tech.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-white/60 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="observe opacity-0 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
              <span className="text-xs sm:text-sm font-medium text-purple-400">Professional Journey</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </div>

          <div className="relative">
            <div className="absolute left-0 sm:left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent hidden sm:block" />
            
            <div className="sm:pl-12 relative">
              <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 animate-pulse hidden sm:block" />
              
              <div className="bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group">
                <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      {experience.role}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-slate-400">
                      <span className="text-base sm:text-lg font-semibold text-white">{experience.company}</span>
                      <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-600" />
                      <span className="text-sm sm:text-base">{experience.location}</span>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 self-start">
                    <span className="text-xs sm:text-sm font-medium text-cyan-400">{experience.period}</span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {experience.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4 group/item">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mt-1 shadow-lg shadow-cyan-500/30">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
                      </div>
                      <p className="text-sm sm:text-base text-slate-300 group-hover/item:text-white transition-colors leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="observe opacity-0 mb-12 sm:mb-20">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300">
              <span className="text-xs sm:text-sm font-medium text-blue-400">Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 sm:mb-6" />
            <p className="text-base sm:text-xl text-slate-400 max-w-3xl">
              Transforming complex problems into elegant, scalable solutions through innovative engineering
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                ref={(el) => {
  projectRefs.current[i] = el;
}}
                className="observe opacity-0 group relative"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
                        {project.name}
                      </h3>
                      <p className="text-sm sm:text-base text-cyan-400 font-medium">{project.tagline}</p>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group/link"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:text-cyan-400 group-hover/link:rotate-45 transition-all" />
                    </a>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4 sm:mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-white/10">
                      {project.metrics.map((metric, j) => (
                        <div key={j} className="text-center">
                          <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">{metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section className="observe opacity-0 py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">Education</h3>
                  <p className="text-sm sm:text-base text-slate-400">Academic Background</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg sm:text-xl font-semibold">Bachelor of Technology</h4>
                <p className="text-base sm:text-lg text-slate-300">Computer Science & Engineering</p>
                <p className="text-sm sm:text-base text-slate-400">JECRC University, Jaipur</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-4">August 2022 - May 2026</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 group">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg shadow-yellow-500/30">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">Achievement</h3>
                  <p className="text-sm sm:text-base text-slate-400">Recognition</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">Microsoft Founders Hub</h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Selected for Microsoft's prestigious startup program, receiving access to enterprise-grade tools, mentorship, and resources to build innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="observe opacity-0 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
              <span className="text-xs sm:text-sm font-medium text-cyan-400">Technical Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${category.color} mb-4 shadow-lg`}>
                  <h3 className="text-base sm:text-lg font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm sm:text-base text-slate-300 group-hover:text-white transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    <section className="observe opacity-0 py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
  <div className="max-w-4xl mx-auto text-center">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-3xl" />
      <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Let's Build Something
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Extraordinary Together
          </span>
        </h2>
        <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Open to full-time opportunities, freelance projects, and innovative collaborations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:abhisheksoni.15@outlook.com"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>

          {/* 👇 New Download CV button */}
          <a
            href="/AbhishekSoniCV.pdf"
            download="AbhishekSoniCV.pdf"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 font-semibold transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-center md:text-left">
              <p className="mb-2 text-sm sm:text-base">© 2025 Abhishek Soni. All rights reserved.</p>
              <p className="text-xs sm:text-sm">Built with Next.js, TypeScript & Tailwind CSS</p>
            </div>
            <div className="flex gap-6">
              {[
                { href: 'https://github.com/Abhishekksoni', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/abhishek-soni15', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://leetcode.com/Abhisheksonii', icon: Code, label: 'LeetCode' }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-cyan-400 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
        .animate-gradient-shift {
          animation: gradient-shift 5s ease-in-out infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .observe.animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}