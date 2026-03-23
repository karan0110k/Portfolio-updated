import { useEffect, useState, type ReactNode } from "react";
import { Github, Linkedin, Mail, Smartphone, MapPin, GraduationCap, ExternalLink, Menu, X } from "lucide-react";
import profileImage from "@/assets/profilee.jpg";

// --- Data Definitions ---
const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const skills = [
  {
    category: "Programming & Core CS",
    items: ["Python","Java", "Data Structures & Algorithms(DSA)"],
  },
  {
    category: "Data Analysis & Machine Learning",
    items: ["Scikit-learn", "Seaborn", "NumPy", "Matplotlib","Power-Bi","Tableau"],
  },
  {
    category: "Web Development",
    items: ["React.js", "Node.js", "Express","Flask", "Next.js", "Tailwind CSS"],
  },
  {
    category: "AI & LLMs",
    items: ["Agentic AI", "Prompt Engineering", "LLM Integration", "Model Development"],
  },
  {
    category: "Databases & Tools",
    items: ["SQL", "MongoDB", "Git", "Tableau","Colab","FireBase"],
  },
];

const experience = [
  {
    role: "Machine Learning Trainee",
    company: "Internshala Trainings",
    period: "Jun 2024 – Aug 2024",
    description:
      "Trained in core ML algorithms using Python and scikit-learn. Built and evaluated predictive models on real-world datasets, focusing on classification and regression tasks.",
  },
  {
    role: "Data Analytics Virtual Intern",
    company: "Deloitte Australia (Forage)",
    period: "Jun 2025",
    description:
      "Completed a forensic data analysis job simulation. Used Excel to classify large datasets and created high-impact, interactive dashboards using Tableau for data visualization.",
  },
];

const projects = [
  {
    name: "Humint Chatbot",
    description:
      "An intelligent, full-stack chatbot built with the MERN stack and Gemini API, enabling rich, context-aware conversations powered by advanced LLM integration.",
    tech: ["MERN Stack", "Gemini API", "LLMs", "REST APIs"],
    github: "https://github.com/karan0110k/HumanInt",
  },
  {
    name: "NewsEdge AI",
    description:
      "A Streamlit-based Agentic AI news application that fetches, summarizes, and delivers real-time, personalized news content using sophisticated LLM agents.",
    tech: ["Streamlit", "Agentic AI", "LLMs", "Python"],
    github: "https://github.com/karan0110k/News-Article-agent",
  },
  {
    name: "AI Interview Pro",
    description:
      "An Agentic AI interview assistant built on Flask that generates personalized, resume-based interview questions and evaluates responses to provide detailed feedback.",
    tech: ["Flask", "LLMs", "Python", "NLP"],
    github: "https://github.com/karan0110k/Ai-Interview-Pro",
  },
];

const achievements = [
  "Research Paper Publication in CRC Book Press on Privacy Preservation in Healthcare using ML.",
  "2nd Position in AI Create 3.0 for developing a custom prompt and training an AI image generation model.",
  "Finalist at International Conference on Quality Assurance in Higher Education.",
  "Selected among the Top 10 teams at Chitkara University for the SAP Hackathon for an innovative mouse pointer analysis approach.",
];

// --- Reusable Components ---

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="section-title text-center">{children}</h2>
);

const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`glass-card ${className}`}>{children}</div>
);

const SkillTag = ({ children }: { children: ReactNode }) => (
  <span className="skill-tag">{children}</span>
);

// --- Sections ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div 
        className="scroll-progress" 
        style={{ "--scroll-progress": `${scrollProgress}%` } as React.CSSProperties}
      />
      <header className="navbar-blur">
        <div className="content-max-width flex items-center justify-between py-5">
          <button 
            onClick={() => handleNavClick("#hero")} 
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-portfolio-surface text-lg font-black text-primary border border-border">
                KK
              </span>
            </div>
            <div className="leading-tight hidden sm:block">
              <p className="text-lg font-bold text-foreground">Karan Kalra</p>
              <p className="text-sm text-muted-foreground">AI & Web Developer</p>
            </div>
          </button>
          
          <nav className="hidden gap-2 text-sm md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <button 
                key={item.href} 
                onClick={() => handleNavClick(item.href)}
                className="nav-item"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNavClick("#contact")} 
              className="btn-primary hidden sm:inline-flex"
            >
              Let's talk
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <nav className="content-max-width py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-item text-left"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick("#contact")} 
                className="btn-primary mt-4"
              >
                Let's talk
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

const HeroSection = () => (
  <section id="hero" className="section-padding border-b border-border/50 relative overflow-hidden min-h-screen flex items-center">
    <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
    <div className="content-max-width flex flex-col items-center gap-12 relative z-10 w-full">
      <div className="flex-1 space-y-8 text-center max-w-4xl">
        {/* Profile Image */}
        <div className="profile-float-frame group mx-auto">
          <img
            src={profileImage}
            alt="Karan Kalra"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
        </div>
        
        <div className="inline-flex items-center rounded-2xl border border-border bg-white/5 px-5 py-2 text-sm text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10">
          <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to <span className="font-bold text-primary mx-1">Internships</span> & <span className="font-bold text-primary ml-1">Projects</span>
        </div>
        
        <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl leading-tight">
          Hi, I'm{" "}
          <span className="glow-text animate-float">
            Karan Kalra
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-muted-foreground">
          <span className="font-bold text-primary">AI & Web Developer</span> crafting intelligent, agentic experiences with LLMs. I'm a Computer Science and Artificial Intelligence student passionate about building next-generation AI solutions.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/karan0110k"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-3"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/karan-kalra-401699201"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-3"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a
            href="#contact"
            className="btn-outline flex items-center gap-3"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm justify-center">
          <span className="info-tag flex items-center gap-2">
            <GraduationCap className="h-4 w-4" /> B.Tech CSE (AI) @ Chitkara University • CGPA 9.32
          </span>
          <span className="info-tag">
            Agentic AI • LLM Apps • ML Models
          </span>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="section-padding border-b border-border/50">
    <div className="content-max-width">
      <SectionHeading>About Me</SectionHeading>
      <p className="section-subtitle">Passionate AI developer focused on creating intelligent solutions</p>
      
      <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr] items-start animate-stagger">
        <div className="space-y-6 text-lg text-muted-foreground">
          <p className="text-lg md:text-xl leading-relaxed">
            I'm a <strong className="text-primary font-bold">Computer Science and Artificial Intelligence</strong> student
            at Chitkara University (2023–2027) with an outstanding <strong className="text-primary font-bold">CGPA of 9.32</strong>. I enjoy
            combining AI, Machine Learning, and web development to build
            real, impactful products that solve tangible problems.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            My interests are sharply focused on <strong className="text-primary font-bold">ML model development</strong>, <strong className="text-primary font-bold">Agentic AI</strong>
            systems, and <strong className="text-primary font-bold">LLM-based applications</strong> that can automate workflows,
            analyze data, and generate insights. I enjoy working end-to-end:
            from data wrangling and model training to deployment and interface design.
          </p>
          <p className="font-semibold text-primary text-lg">
            I've successfully worked on complex projects including an intelligent chatbot, an AI-powered interview assistant, and a real-time news agent. I'm always seeking opportunities to apply my technical skills in real-world settings.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card>
            <h3 className="card-title mb-4 pb-3 border-b border-border">Quick Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">Ambala City, Haryana</span>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:karankalra428@gmail.com" className="hover:text-primary transition text-sm break-all">karankalra428@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <Smartphone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">+91-8307130350</span>
              </li>
            </ul>
          </Card>
          
          <Card>
            <h3 className="card-title mb-4 pb-3 border-b border-border">Academic Background</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <strong className="text-primary font-bold">B.Tech CSE (AI)</strong>, Chitkara University: <strong className="text-primary font-bold">CGPA 9.32</strong>
              </li>
              <li className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">Class XII (2022): 82.6%</li>
              <li className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all">Class X (2020): 87.8%</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="section-padding border-b border-border/50">
    <div className="content-max-width">
      <SectionHeading>Technical Stack</SectionHeading>
      <p className="section-subtitle">Technologies and tools I use across AI, web development, and data science</p>
      
      <div className="auto-grid animate-stagger">
        {skills.map((group) => (
          <Card key={group.category} className="h-full flex flex-col group">
            <h3 className="card-title mb-6 pb-4 border-b border-border group-hover:border-primary/50 transition-all">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <SkillTag key={item}>{item}</SkillTag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="section-padding border-b border-border/50">
    <div className="content-max-width">
      <SectionHeading>Experience</SectionHeading>
      <p className="section-subtitle">Professional roles and the impact I delivered</p>
      
      <div className="space-y-8 max-w-4xl mx-auto animate-stagger">
        {experience.map((exp) => (
          <Card key={exp.role} className="timeline-card group">
            <span className="timeline-dot" />
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
              <div>
                <p className="eyebrow font-semibold tracking-widest">
                  {exp.company}
                </p>
                <h3 className="mt-2 text-xl font-bold text-foreground">
                  {exp.role}
                </h3>
              </div>
              <span className="text-sm font-semibold text-muted-foreground flex-shrink-0 bg-white/5 px-4 py-2 rounded-2xl">
                {exp.period}
              </span>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="section-padding border-b border-border/50">
    <div className="content-max-width">
      <SectionHeading>Featured Projects</SectionHeading>
      <p className="section-subtitle">Selected works showcasing agentic AI, full-stack development, and data applications</p>
      
      <div className="auto-grid animate-stagger">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col h-full group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="card-title flex-1">{project.name}</h3>
              <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all flex-shrink-0" />
            </div>
            
            <p className="mt-4 flex-grow text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            
            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <SkillTag key={tech}>{tech}</SkillTag>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-border">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-all group-hover:gap-3"
              >
                <Github className="h-4 w-4" /> View Source Code
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const AchievementsSection = () => (
  <section id="achievements" className="section-padding border-b border-border/50">
    <div className="content-max-width">
      <SectionHeading>Achievements & Recognition</SectionHeading>
      <p className="section-subtitle">Highlights from competitions, publications, and academic conferences</p>
      
      <Card className="max-w-4xl mx-auto animate-fade-in-up">
        <ul className="space-y-6 text-base text-muted-foreground">
          {achievements.map((item, idx) => (
            <li key={idx} className="flex gap-4 group hover:translate-x-2 transition-transform">
              <div className="flex-shrink-0">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-primary/80 mt-2 shadow-lg shadow-primary/50 group-hover:scale-125 transition-transform"></div>
              </div>
              <span className="flex-1 group-hover:text-foreground transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="content-max-width">
      <SectionHeading>Get In Touch</SectionHeading>
      <p className="section-subtitle">Reach out for internships, projects, or research collaborations in AI/ML</p>
      
      <div className="contact-grid max-w-6xl mx-auto animate-stagger">
        <Card>
          <h3 className="card-title mb-6">Let's Connect and Collaborate</h3>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            I'm actively seeking <span className="font-bold text-primary">Internships</span> for the upcoming term, freelance projects, and research collaborations in AI/ML. Whether you have a challenging project or just want to discuss Agentic AI, feel free to reach out.
          </p>

          <div className="space-y-6 text-base text-foreground">
            <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <p className="eyebrow mb-2">Email Address</p>
              <a href="mailto:karankalra428@gmail.com" className="text-lg text-primary hover:text-primary/80 transition flex items-center gap-3 group break-all">
                <Mail className="h-5 w-5 flex-shrink-0" /> 
                <span className="group-hover:underline">karankalra428@gmail.com</span>
              </a>
            </div>
            
            <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <p className="eyebrow mb-2">Phone Number</p>
              <p className="text-lg text-foreground flex items-center gap-3">
                <Smartphone className="h-5 w-5" /> +91-8307130350
              </p>
            </div>
            
            <div className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <p className="eyebrow mb-2">Digital Presence</p>
              <div className="mt-3 flex flex-wrap gap-4">
                <a
                  href="https://github.com/karan0110k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github className="h-5 w-5" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/karan-kalra-401699201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="card-title mb-6">My Value Proposition</h3>
          <ul className="space-y-4 text-base text-muted-foreground">
            <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <span className="text-primary font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
              <span>Strong academic foundation in AI & ML (CGPA 9.32)</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <span className="text-primary font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
              <span>Hands-on experience with LLMs, Gemini API, and building Agentic AI systems</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <span className="text-primary font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
              <span>Full-stack competency: MERN, Flask/Node, and modern frontend (React/Next)</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <span className="text-primary font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
              <span>Proven track record in hackathons, research publications, and technical competitions</span>
            </li>
            <li className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
              <span className="text-primary font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
              <span>Self-starter, quick learner, and highly adaptable to new technologies</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p className="text-base">
        Karan Kalra. All rights reserved.
    </p>
  </footer>
);

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button 
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

// --- Main Component ---
export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
