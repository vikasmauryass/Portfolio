import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  ["about", "About"],
  ["experience", "Experience"],
  ["work", "Work"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

const experiences = [
  {
    period: "Jan 2025 — Present",
    company: "Fi Ellements",
    role: "Software Developer",
    summary:
      "Building and maintaining a multi-role car booking management platform with complete presales and postsales workflows.",
    points: [
      "Role-based dashboards for admin, sales, operations, and other teams",
      "REST API integration and reliable dynamic data rendering",
      "Cross-team API design and application performance improvements",
    ],
    accent: "violet",
  },
  {
    period: "Sep 2024 — Dec 2024",
    company: "Careernova Technology",
    role: "Frontend Developer",
    summary:
      "Developed responsive interfaces for an education management platform using React.js and Tailwind CSS.",
    points: [
      "Student data, video lecture, and teacher administration components",
      "Authentication, project listings, and contribution workflows",
      "Clear, responsive experiences for administrators and educators",
    ],
    accent: "cyan",
  },
  {
    period: "Oct 2023 — May 2024",
    company: "Rdigi Works",
    role: "Full Stack Developer",
    summary:
      "Created a responsive children’s admissions and activities portal with streamlined enrollment experiences.",
    points: [
      "Accessible admission forms and dynamic brochure displays",
      "Interactive program browsing and class schedules",
      "Enrollment journeys designed to improve parent engagement",
    ],
    accent: "lime",
  },
];

const projects = [
  {
    number: "01",
    title: "Zedflow",
    label: "Business automation",
    description:
      "A modern workflow and business platform built with a scalable backend, responsive interface, and clean dashboard experience.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs", "Responsive UI"],
    url: "https://zedflow.in",
    color: "project-violet",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "EduPulse",
    label: "EdTech",
    description:
      "An education management platform for handling academic workflows, administration, student data, and responsive learning interfaces.",
    tags: ["Vue.js", "PHP", "Laravel", "Tailwind CSS", "MySQL", "REST APIs", "Responsive UI"],
    url: "https://edupulse.fiellements.com/",
    color: "project-blue",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "India's first phone-as-a-subscription service (BytePe)",
    label: "Consumer technology",
    description:
      "BytePe is a technology subscription platform that replaces traditional smartphone ownership and long-term EMIs with a flexible pay-for-what-you-use model.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Responsive Design", "Forms", "Libraries"],
    url: "https://www.bytepe.com/",
    color: "project-green",
    icon: Sparkles,
  },
];

const skillGroups = [
  {
    name: "Frontend",
    skills: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    name: "State & Architecture",
    skills: ["Redux Toolkit", "Context API", "React Hooks", "React Router", "RBAC"],
  },
  {
    name: "Backend & Data",
    skills: ["PHP", "Laravel", "REST APIs", "Eloquent ORM", "MySQL","Node.js", "MongoDB"],
  },
  {
    name: "Performance & Tools",
    skills: ["Code Splitting", "Memoization", "Lazy Loading", "Git", "Postman"],
  },
];

function WaterReflection() {
  return null;
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <a className="logo" href="#top" aria-label="Vikas Maurya home">
        <span>V</span>M
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([href, label]) => (
          <a key={href} href={`#${href}`}>
            {label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="mailto:vikasmaurya5259@gmail.com">
        Let’s talk <ArrowRight size={15} />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {menuOpen && (
          <nav
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {navItems.map(([href, label]) => (
              <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>
                {label}
                <ChevronRight size={18} />
              </a>
            ))}
          </nav>)}
    </header>
  );
}

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div
      className="section-title"
    >
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      <WaterReflection text={title} />
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function Hero() {

  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <div
          className="availability"
        >
          <span className="pulse-dot" />
          Open to meaningful React opportunities
        </div>

        <p
          className="hero-kicker"
        >
          Hello, I’m Vikas Maurya
        </p>

        <h1
        >
          I build digital products
          <span className="outline-text">that move business forward.</span>
        </h1>
        <WaterReflection text="React Developer" />

        <div
          className="hero-bottom"
        >
          <div className="role-line">
            <Code2 size={20} />
            <span
                
              >
                React Developer
              </span>
          </div>
          <p>
            React.js developer with 2+ years of experience creating scalable,
            role-based applications and polished responsive interfaces.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDown size={17} />
            </a>
            <a
              className="button button-ghost"
              href="/assets/Vikas_Maurya_Resume.pdf"
              download
            >
              <Download size={17} /> Download résumé
            </a>
          </div>
        </div>
      </div>

      <div
        className="hero-stats glass-card"
      >
        <div>
          <strong>2+</strong>
          <span>Years building</span>
        </div>
        <div>
          <strong>03</strong>
          <span>Professional roles</span>
        </div>
        <div>
          <strong>7.85</strong>
          <span>Engineering CGPA</span>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <span>Scroll to discover</span>
        <span className="scroll-line" />
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <SectionTitle eyebrow="01 / About" title="Code with intent." />

      <div className="about-grid">
        <div
          className="about-statement"
        >
          <p>
            I turn complex workflows into interfaces that feel{" "}
            <em>clear, fast, and natural.</em>
          </p>
        </div>

        <div
          className="about-copy"
        >
          <p>
            I’m a Mumbai-based React.js developer focused on scalable web
            products, clean UI, and performance. My work spans operational
            dashboards, education platforms, and customer-facing enrollment
            journeys.
          </p>
          <p>
            I’m at my best where product thinking meets implementation:
            translating real business rules into maintainable components,
            dependable API integrations, and responsive user experiences.
          </p>
          <div className="location">
            <MapPin size={17} />
            Mumbai, India
          </div>
        </div>
      </div>

      <div className="skill-marquee" aria-label="Key technologies">
        <div className="marquee-track">
          {[
            "React.js",
            "JavaScript",
            "Redux Toolkit",
            "REST APIs",
            "Laravel",
            "Tailwind CSS",
            "React.js",
            "JavaScript",
            "Redux Toolkit",
            "REST APIs",
            "Laravel",
            "Tailwind CSS",
          ].map((skill, index) => (
            <span key={`${skill}-${index}`}>
              {skill} <Sparkles size={14} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionTitle
        eyebrow="02 / Experience"
        title="Built in the real world."
        copy="Professional experience creating products used by operational teams, administrators, educators, parents, and customers."
      />

      <div className="timeline">
        {experiences.map((experience) => (
          <article
            className="timeline-item"
            key={experience.company}
          >
            <div className="timeline-meta">
              <span className={`timeline-dot ${experience.accent}`} />
              <p>{experience.period}</p>
            </div>
            <div className="timeline-role">
              <h3>{experience.role}</h3>
              <p>{experience.company}</p>
            </div>
            <div className="timeline-details">
              <p>{experience.summary}</p>
              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section" id="work">
      <SectionTitle
        eyebrow="03 / Selected work"
        title="Products, not just pages."
        copy="A selection of business-focused products developed through my professional roles."
      />

      <div className="project-grid">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article
              className={`project-card ${project.color}`}
              key={project.title}
            >
              <div className="project-top">
                <span>{project.number}</span>
                <Icon size={22} />
              </div>
              <div className="project-visual">
                <div className="visual-window">
                  <div className="visual-bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="visual-body">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <p className="project-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit website
                <ExternalLink size={14} />
              </a>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionTitle
        eyebrow="04 / Capabilities"
        title="My working toolkit."
        copy="A practical stack for shipping responsive interfaces, reliable integrations, and maintainable web products."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article
            className="skill-group glass-card"
            key={group.name}
          >
            <span className="skill-index">0{index + 1}</span>
            <h3>{group.name}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div
        className="education-panel"
      >
        <div className="education-heading">
          <GraduationCap />
          <div>
            <p className="eyebrow compact">Education</p>
            <h3>Strong foundations, continuously evolving.</h3>
          </div>
        </div>
        <div className="education-item">
          <div>
            <strong>B.E. in Information Technology</strong>
            <span>Mumbai University</span>
          </div>
          <div>
            <strong>7.85 CGPA</strong>
            <span>May 2023</span>
          </div>
        </div>
        <div className="education-item">
          <div>
            <strong>Diploma in Computer Science</strong>
            <span>Viva College of Engineering and Technology</span>
          </div>
          <div>
            <strong>89.18%</strong>
            <span>May 2020</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div
        className="contact-content"
      >
        <p className="eyebrow">
          <span />
          05 / Contact
        </p>
        <h2>
          Have a product in mind?
          <span>Let’s build something useful.</span>
        </h2>
        <WaterReflection text="Let’s build something useful." />
        <p className="contact-copy">
          I’m interested in frontend and Backend opportunities where thoughtful
          engineering and good user experience matter.
        </p>
        <a className="contact-email" href="mailto:vikasmaurya5259@gmail.com">
          vikasmaurya5259@gmail.com
          <ArrowRight />
        </a>
      </div>

      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/1vikasmaurya"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={18} />
          LinkedIn
          <ExternalLink size={14} />
        </a>
        <a href="tel:+919867388691">
          <Phone size={18} />
          +91 98673 88691
        </a>
        <a href="mailto:vikasmaurya5259@gmail.com">
          <Mail size={18} />
          Email
        </a>
        <a
          href="https://github.com/vikasmauryass"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={18} />
          GitHub
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
      <footer>
        <p>Designed & built with React by Vikas Maurya.</p>
        <a href="#top">Back to top ↑</a>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}

export default App;
