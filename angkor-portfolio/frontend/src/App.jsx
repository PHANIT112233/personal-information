import React, { useEffect, useState } from 'react';

const initialSkills = [
  { id: 1, category: 'Network Infrastructure', name: 'MikroTik', level: 92, icon: 'MT' },
  { id: 2, category: 'Network Infrastructure', name: 'UniFi Systems', level: 88, icon: 'UF' },
  { id: 3, category: 'Network Infrastructure', name: 'TP-Link / D-Link / Huawei', level: 86, icon: 'NW' },
  { id: 4, category: 'Network Infrastructure', name: 'Routing, Switching and VLANs', level: 90, icon: 'RS' },
  { id: 5, category: 'Network Infrastructure', name: 'Wireless Setup and Firewall Security', level: 87, icon: 'FW' },
  { id: 6, category: 'Security Infrastructure', name: 'CCTV Camera Systems', level: 91, icon: 'CC' },
  { id: 7, category: 'Security Infrastructure', name: 'DVR/NVR and Remote Monitoring', level: 89, icon: 'RM' },
  { id: 8, category: 'IT Support', name: 'Windows Administration', level: 85, icon: 'WA' },
  { id: 9, category: 'IT Support', name: 'Hardware, Software and Network Troubleshooting', level: 90, icon: 'TS' },
  { id: 10, category: 'Web and Systems', name: 'PHP, MySQL, HTML/CSS and JavaScript', level: 78, icon: 'WS' },
  { id: 11, category: 'Web and Systems', name: 'Inventory Management Systems', level: 82, icon: 'IM' },
];

const initialExperiences = [
  {
    id: 1,
    title: 'IT Specialist',
    company: 'BYD Cambodia',
    period: 'Current',
    details: [
      'Maintain IT infrastructure and workplace technology operations.',
      'Configure, monitor, and troubleshoot network systems.',
      'Support employees with technical issues across hardware, software, and network access.',
      'Manage CCTV, security systems, and remote monitoring workflows.',
    ],
  },
  {
    id: 2,
    title: 'Network Infrastructure Experience',
    company: 'Enterprise Network Projects',
    period: 'Professional Practice',
    details: [
      'Configure MikroTik routers and enterprise routing rules.',
      'Deploy UniFi systems and business-grade wireless networks.',
      'Configure VLAN segmentation, firewall rules, and secure network policies.',
    ],
  },
  {
    id: 3,
    title: 'Security Infrastructure Experience',
    company: 'CCTV and Surveillance Systems',
    period: 'Professional Practice',
    details: [
      'Install and configure CCTV camera systems.',
      'Set up DVR/NVR systems for reliable recording and review.',
      'Configure remote surveillance monitoring for operational visibility.',
    ],
  },
];

const initialProjects = [
  {
    id: 1,
    title: 'Enterprise Network Deployment',
    type: 'Network Infrastructure',
    summary: 'Designed and configured a reliable office network with VLANs, wireless access, and security rules.',
    image: '',
  },
  {
    id: 2,
    title: 'CCTV Monitoring Infrastructure',
    type: 'Security Systems',
    summary: 'Installed camera infrastructure, DVR/NVR recording, and remote monitoring access for business operations.',
    image: '',
  },
  {
    id: 3,
    title: 'Inventory Management Workflow',
    type: 'Web and Systems',
    summary: 'Supported inventory workflows with practical system knowledge across PHP, MySQL, and front-end basics.',
    image: '',
  },
];

const initialSiteContent = {
  name: 'Huot Phanit',
  heroEyebrow: 'IT Specialist at BYD Cambodia',
  roles: 'Network Infrastructure. Camera Security. IT Support.',
  description:
    'Year 4 Information Technology student at SETEC Institute, focused on building reliable networks, secure surveillance infrastructure, and practical technology solutions for modern teams.',
  age: '21 Years Old',
  major: 'Information Technology',
  aboutEyebrow: 'About Me',
  aboutTitle: 'Professional IT Support with Network Infrastructure depth.',
  aboutFirst:
    'Passionate and motivated IT Specialist with strong experience in Network Infrastructure, Camera Security, and IT Support. Huot Phanit currently works at BYD Cambodia while pursuing a Bachelor degree in Information Technology at SETEC Institute.',
  aboutSecond:
    'He is skilled in Configuration and maintenance for MikroTik, UniFi, TP-Link, D-Link, Huawei, VLAN, CCTV, DVR/NVR, and practical IT solutions that help teams work with confidence.',
  educationValue: '4th Year',
  educationLabel: 'SETEC Institute',
  ageValue: '21',
  ageLabel: 'Years Old',
  skillsValue: '10+',
  skillsLabel: 'Core IT Skills',
  supportValue: '24/7',
  supportLabel: 'Support Mindset',
  contactEyebrow: 'Contact',
  contactTitle: 'Available for IT Support, Network Infrastructure, Configuration, and Camera Security work.',
  location: 'Phnom Penh, Cambodia',
  phone: '+855 00 000 000',
  email: 'huotphanit@example.com',
  footerRole: 'IT Specialist | Network Infrastructure | Camera Security',
  footerYear: '2026 Personal Profile Portfolio',
};

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const contactMethods = [
  { id: 1, label: 'Facebook Messenger', value: 'm.me/huotphanit', href: 'https://m.me/huotphanit', icon: 'FB' },
  { id: 2, label: 'Telegram', value: '@huotphanit', href: 'https://t.me/huotphanit', icon: 'TG' },
  { id: 3, label: 'Gmail', value: 'huotphanit@example.com', href: 'mailto:huotphanit@example.com', icon: 'GM' },
];

const copy = {
  en: {
    languageLabel: 'KH',
    admin: 'Admin',
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'IT Specialist at BYD Cambodia',
      roles: 'Network Infrastructure. Security Systems. IT Support.',
      description:
        'Year 4 Information Technology student at SETEC Institute, focused on building reliable networks, secure surveillance infrastructure, and practical technology solutions for modern teams.',
      projects: 'View Projects',
      cv: 'Download CV',
      age: '21 Years Old',
      major: 'Information Technology',
    },
    about: {
      eyebrow: 'About Me',
      title: 'Professional IT Support with Network Infrastructure depth.',
      first:
        'Passionate and motivated IT Specialist with strong experience in Network Infrastructure, Camera Security, and IT Support. Huot Phanit currently works at BYD Cambodia while pursuing a Bachelor degree in Information Technology at SETEC Institute.',
      second:
        'He is skilled in Configuration and maintenance for MikroTik, UniFi, TP-Link, D-Link, Huawei, VLAN, CCTV, DVR/NVR, and practical IT solutions that help teams work with confidence.',
    },
    stats: [
      ['4th Year', 'SETEC Institute'],
      ['21', 'Years Old'],
      ['10+', 'Core IT Skills'],
      ['24/7', 'Support Mindset'],
    ],
    sections: {
      skills: ['Skills', 'Technical capability across networks, security, support, and systems.'],
      experience: ['Experience', 'A focused timeline of hands-on IT infrastructure work.'],
      projects: ['Portfolio', 'Project showcase for practical IT implementation.'],
      features: ['Features', 'Built with the portfolio tools a professional profile needs.'],
    },
    skillProficiency: 'proficiency',
    contact: {
      eyebrow: 'Contact',
      title: 'Available for IT Support, Network Infrastructure, Configuration, and Camera Security work.',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      message: 'Message',
      messagePlaceholder: 'Tell me about your request',
      send: 'Send Message',
      location: 'Phnom Penh, Cambodia',
    },
    footer: {
      role: 'IT Specialist | Network Infrastructure | Security Systems',
      year: '2026 Personal Profile Portfolio',
    },
  },
  km: {
    languageLabel: 'EN',
    admin: 'គ្រប់គ្រង',
    nav: {
      home: 'ទំព័រដើម',
      about: 'អំពីខ្ញុំ',
      skills: 'ជំនាញ',
      experience: 'បទពិសោធន៍',
      projects: 'គម្រោង',
      contact: 'ទំនាក់ទំនង',
    },
    hero: {
      eyebrow: 'IT Specialist នៅ BYD Cambodia',
      roles: 'Network Infrastructure. Camera Security. IT Support.',
      description:
        'និស្សិតឆ្នាំទី ៤ ផ្នែក Information Technology នៅ SETEC Institute ផ្តោតលើ Network Infrastructure, Camera Security និង IT solutions សម្រាប់ក្រុមការងារសម័យថ្មី។',
      projects: 'មើលគម្រោង',
      cv: 'Download CV',
      age: 'អាយុ ២១ ឆ្នាំ',
      major: 'Information Technology',
    },
    about: {
      eyebrow: 'អំពីខ្ញុំ',
      title: 'IT Support វិជ្ជាជីវៈ ជាមួយបទពិសោធន៍ Network Infrastructure។',
      first:
        'ខ្ញុំជា IT Specialist ដែលមានចំណង់ចំណូលចិត្ត និងមានបទពិសោធន៍លើ Network Infrastructure, Camera Security និង IT Support។ Huot Phanit បច្ចុប្បន្នកំពុងធ្វើការនៅ BYD Cambodia និងកំពុងសិក្សានៅ SETEC Institute។',
      second:
        'មានបទពិសោធន៍លើ Network Infrastructure និង Configuration សម្រាប់ MikroTik, UniFi, TP-Link, D-Link, Huawei, VLAN, CCTV និង DVR/NVR ដើម្បីជួយឱ្យក្រុមការងារធ្វើការបានមានទំនុកចិត្ត។',
    },
    stats: [
      ['ឆ្នាំទី ៤', 'SETEC Institute'],
      ['២១', 'អាយុ'],
      ['១០+', 'IT Skills'],
      ['២៤/៧', 'IT Support Mindset'],
    ],
    sections: {
      skills: ['Skills', 'សមត្ថភាពបច្ចេកទេសលើ Network Infrastructure, Camera Security, IT Support និង Systems។'],
      experience: ['Experience', 'ប្រវត្តិការងារដែលផ្តោតលើ IT Specialist, Network Infrastructure និង Configuration។'],
      projects: ['Portfolio', 'ការបង្ហាញគម្រោងសម្រាប់ IT implementation ជាក់ស្តែង។'],
      features: ['មុខងារ', 'បង្កើតឡើងជាមួយឧបករណ៍ដែលប្រវត្តិរូបវិជ្ជាជីវៈត្រូវការ។'],
    },
    skillProficiency: 'proficiency',
    contact: {
      eyebrow: 'ទំនាក់ទំនង',
      title: 'អាចទាក់ទងសម្រាប់ IT Support, Network Infrastructure, Configuration និង Camera Security។',
      name: 'ឈ្មោះ',
      namePlaceholder: 'ឈ្មោះរបស់អ្នក',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      message: 'សារ',
      messagePlaceholder: 'ប្រាប់ខ្ញុំអំពីសំណើរបស់អ្នក',
      send: 'ផ្ញើសារ',
      location: 'ភ្នំពេញ កម្ពុជា',
    },
    footer: {
      role: 'IT Specialist | Network Infrastructure | Camera Security',
      year: 'ប្រវត្តិរូបផ្ទាល់ខ្លួន ២០២៦',
    },
  },
};

function useStoredState(key, fallback) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : fallback;
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [adminOpen, setAdminOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useStoredState('hp-admin-auth', false);
  const [activeAdmin, setActiveAdmin] = useState('Overview');
  const [skills, setSkills] = useStoredState('hp-skills', initialSkills);
  const [experiences, setExperiences] = useStoredState('hp-experiences', initialExperiences);
  const [projects, setProjects] = useStoredState('hp-projects', initialProjects);
  const [siteContent, setSiteContent] = useStoredState('hp-site-content', initialSiteContent);
  const [editableContacts, setEditableContacts] = useStoredState('hp-contact-methods', contactMethods);
  const [backgroundImage, setBackgroundImage] = useStoredState('hp-background-image', '');
  const [profileImage, setProfileImage] = useStoredState('hp-profile-image', '');
  const [cvFile, setCvFile] = useStoredState('hp-cv-file', null);
  const [viewerCount, setViewerCount] = useStoredState('hp-viewer-count', 126);
  const [language, setLanguage] = useStoredState('hp-language', 'en');
  const [loading, setLoading] = useState(true);
  const text = copy[language] || copy.en;

  useEffect(() => {
    try {
      if (sessionStorage.getItem('hp-view-session')) return;
      sessionStorage.setItem('hp-view-session', '1');
      setViewerCount((count) => Number(count || 0) + 1);
    } catch {
      setViewerCount((count) => Number(count || 0) + 1);
    }
  }, [setViewerCount]);

  useEffect(() => {
    if (editableContacts.every((method) => method.id)) return;
    setEditableContacts(editableContacts.map((method, index) => ({ ...method, id: index + 1 })));
  }, [editableContacts, setEditableContacts]);

  useEffect(() => {
    document.documentElement.dataset.theme = 'light';
    document.documentElement.lang = language;
    localStorage.setItem('hp-theme', JSON.stringify('light'));
    document.documentElement.style.setProperty('--angkor-bg', `url("${backgroundImage || '/images/background.png'}")`);
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, [language, backgroundImage]);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -70px 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [language, skills, experiences, projects]);

  return (
    <div className="site-shell">
      {loading && <Loader />}
      <Navbar
        language={language}
        profileImage={profileImage}
        siteContent={siteContent}
        text={text}
        onLanguage={() => setLanguage(language === 'en' ? 'km' : 'en')}
      />
      <main>
        <Hero profileImage={profileImage} siteContent={siteContent} text={text.hero} cvFile={cvFile} />
        <About siteContent={siteContent} />
        <Stats siteContent={siteContent} />
        <Skills skills={skills} section={text.sections.skills} proficiency={text.skillProficiency} />
        <Experience experiences={experiences} section={text.sections.experience} />
        <Projects projects={projects} section={text.sections.projects} />
        <Contact contactMethods={editableContacts} siteContent={siteContent} />
      </main>
      <Footer contactMethods={editableContacts} siteContent={siteContent} onAdmin={() => setAdminOpen(true)} />
      {adminOpen && (
        <AdminPanel
          active={activeAdmin}
          setActive={setActiveAdmin}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          onClose={() => setAdminOpen(false)}
          skills={skills}
          setSkills={setSkills}
          experiences={experiences}
          setExperiences={setExperiences}
          projects={projects}
          setProjects={setProjects}
          siteContent={siteContent}
          setSiteContent={setSiteContent}
          contactMethods={editableContacts}
          setContactMethods={setEditableContacts}
          backgroundImage={backgroundImage}
          setBackgroundImage={setBackgroundImage}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          cvFile={cvFile}
          setCvFile={setCvFile}
          viewerCount={viewerCount}
        />
      )}
    </div>
  );
}

function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-mark">HP</div>
      <div className="loader-line" />
    </div>
  );
}

function Navbar({ language, profileImage, siteContent, text, onLanguage }) {
  const [open, setOpen] = useState(false);
  const nextLanguageCode = language === 'en' ? 'kh' : 'en';
  const nextLanguageName = language === 'en' ? 'Khmer' : 'English';

  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Huot Phanit home">
        <span className="brand-avatar">
          {profileImage ? <img src={profileImage} alt={`${siteContent.name} profile`} /> : siteContent.name.slice(0, 2).toUpperCase()}
        </span>
        <strong>{siteContent.name}</strong>
      </a>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
            {text.nav[item.id] || item.label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="language-btn flag-language-btn" onClick={onLanguage} aria-label={`Switch to ${nextLanguageName}`}>
          <span className={`flag-icon flag-${nextLanguageCode}`} aria-hidden="true" />
        </button>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero({ profileImage, siteContent, text, cvFile }) {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy hero-copy-primary">
        <p className="eyebrow">{siteContent.heroEyebrow}</p>
        <h1 className="reveal">{siteContent.name}</h1>
      </div>
      <div className="hero-visual">
        <div className="profile-card reveal">
          <div className="profile-image">
            {profileImage ? <img src={profileImage} alt={`${siteContent.name} profile`} /> : <span>{siteContent.name.slice(0, 2).toUpperCase()}</span>}
          </div>
          <div className="profile-card-body">
            <p>Huot Phanit</p>
            <strong>IT Specialist</strong>
          </div>
        </div>
        <div className="signal-panel">
          {['MikroTik', 'UniFi', 'VLAN', 'CCTV', 'DVR/NVR'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="hero-copy hero-copy-secondary">
        <div className="typing-line reveal">{siteContent.roles}</div>
        <p className="reveal">
          {siteContent.description}
        </p>
        <div className="hero-actions reveal">
          <a className="primary-btn" href="#projects">{text.projects}</a>
          <a className="secondary-btn" href={cvFile?.url || '/Huot-Phanit-CV.pdf'} download={cvFile?.name || true}>{text.cv}</a>
        </div>
        <div className="social-row reveal" aria-label="Social media links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:huotphanit@example.com">Email</a>
        </div>
      </div>
    </section>
  );
}

function About({ siteContent }) {
  return (
    <section id="about" className="section about-grid">
      <div className="section-heading reveal">
        <p className="eyebrow">{siteContent.aboutEyebrow}</p>
        <h2>{siteContent.aboutTitle}</h2>
      </div>
      <div className="about-card reveal">
        <p>{siteContent.aboutFirst}</p>
        <p>{siteContent.aboutSecond}</p>
      </div>
    </section>
  );
}

function Stats({ siteContent }) {
  const stats = [
    [siteContent.educationValue, siteContent.educationLabel],
    [siteContent.ageValue, siteContent.ageLabel],
    [siteContent.skillsValue, siteContent.skillsLabel],
    [siteContent.supportValue, siteContent.supportLabel],
  ];

  return (
    <section className="stats-strip reveal" aria-label="Professional statistics">
      {stats.map(([value, label]) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function Skills({ skills, section, proficiency }) {
  const groups = [...new Set(skills.map((skill) => skill.category))];
  return (
    <section id="skills" className="section">
      <SectionTitle eyebrow={section[0]} title={section[1]} />
      <div className="skill-groups">
        {groups.map((group) => (
          <div className="skill-group reveal" key={group}>
            <h3>{group}</h3>
            <div className="skill-list">
              {skills.filter((skill) => skill.category === group).map((skill) => (
                <article className="skill-card reveal" key={skill.id}>
                  <div className="skill-top">
                    <span className="skill-icon">{skill.icon}</span>
                    <div>
                      <strong>{skill.name}</strong>
                      <small>{skill.level}% {proficiency}</small>
                    </div>
                  </div>
                  <div className="progress"><span style={{ width: `${skill.level}%` }} /></div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience({ experiences, section }) {
  return (
    <section id="experience" className="section">
      <SectionTitle eyebrow={section[0]} title={section[1]} />
      <div className="timeline">
        {experiences.map((item) => (
          <article className="timeline-item reveal" key={item.id}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.company}</p>
              <ul>
                {item.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects({ projects, section }) {
  return (
    <section id="projects" className="section">
      <SectionTitle eyebrow={section[0]} title={section[1]} />
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.id}>
            <div className="project-media">
              {project.image ? <img src={project.image} alt={project.title} /> : <span>{project.type}</span>}
            </div>
            <div className="project-body">
              <small>{project.type}</small>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Features({ features, section }) {
  return (
    <section className="section feature-section">
      <SectionTitle eyebrow={section[0]} title={section[1]} />
      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card reveal" key={feature.id}>
            <span>{feature.name.slice(0, 2).toUpperCase()}</span>
            <h3>{feature.name}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact({ contactMethods, siteContent }) {
  return (
    <section id="contact" className="section contact-grid">
      <div className="section-heading reveal">
        <p className="eyebrow">{siteContent.contactEyebrow}</p>
        <h2>{siteContent.contactTitle}</h2>
        <div className="contact-links reveal">
          <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
          <a href={`tel:${siteContent.phone.replace(/\s/g, '')}`}>{siteContent.phone}</a>
          <span>{siteContent.location}</span>
        </div>
      </div>
      <div className="contact-form contact-direct-card reveal" aria-label="Direct contact links">
        {contactMethods.map((method) => (
          <a key={method.label} className="contact-method" href={method.href} target={method.href.startsWith('mailto:') ? undefined : '_blank'} rel={method.href.startsWith('mailto:') ? undefined : 'noreferrer'}>
            <ContactIcon method={method} />
            <div>
              <strong>{method.label}</strong>
              <small>{method.value}</small>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ContactIcon({ method }) {
  const iconKey = `${method.icon || ''} ${method.label || ''}`.toLowerCase();

  if (iconKey.includes('fb') || iconKey.includes('facebook') || iconKey.includes('messenger')) {
    return (
      <span className="contact-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M12 3.1c-5.2 0-9.2 3.8-9.2 8.6 0 2.7 1.3 5.1 3.4 6.7v3.2l3.1-1.7c.9.2 1.8.4 2.7.4 5.2 0 9.2-3.8 9.2-8.6S17.2 3.1 12 3.1Zm1 11.2-2.3-2.4-4.5 2.4 5-5.3 2.3 2.4 4.4-2.4-4.9 5.3Z" />
        </svg>
      </span>
    );
  }

  if (iconKey.includes('tg') || iconKey.includes('telegram')) {
    return (
      <span className="contact-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M20.9 4.6 18 19.1c-.2 1-.8 1.2-1.6.7l-4.5-3.4-2.2 2.1c-.2.2-.5.4-.9.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.6-.2l-10.4 6.6-4.5-1.4c-1-.3-1-1 .2-1.5L19.4 3.6c.8-.3 1.5.2 1.1 1.6Z" />
        </svg>
      </span>
    );
  }

  if (iconKey.includes('gm') || iconKey.includes('gmail') || iconKey.includes('mail')) {
    return (
      <span className="contact-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M4.8 6h14.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H4.8c-1 0-1.8-.8-1.8-1.8V7.8C3 6.8 3.8 6 4.8 6Zm7.2 7.1 7.5-5.4H4.6l7.4 5.4Zm-3.1-.5L4.5 9.4v6.7h15V9.4l-4.4 3.2-3.1 2.2-3.1-2.2Z" />
        </svg>
      </span>
    );
  }

  return (
    <span className="contact-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M10.2 13.8a1 1 0 0 1 0-1.4l3.8-3.8a2.3 2.3 0 1 0-3.2-3.2L8.6 7.6A1 1 0 0 1 7.2 6.2l2.2-2.2a4.3 4.3 0 1 1 6.1 6.1l-3.8 3.8a1 1 0 0 1-1.5-.1Zm3.6-3.6a1 1 0 0 1 0 1.4l-3.8 3.8a2.3 2.3 0 1 0 3.2 3.2l2.2-2.2a1 1 0 1 1 1.4 1.4l-2.2 2.2a4.3 4.3 0 1 1-6.1-6.1l3.8-3.8a1 1 0 0 1 1.5.1Z" />
      </svg>
    </span>
  );
}

function Footer({ contactMethods, siteContent, onAdmin }) {
  return (
    <footer className="footer">
      <div className="footer-identity">
        <strong>{siteContent.name}</strong>
        <span>{siteContent.footerRole}</span>
      </div>
      <div className="footer-contact-links" aria-label="Footer contact links">
        {contactMethods.map((method) => (
          <a key={method.label} href={method.href} target={method.href.startsWith('mailto:') ? undefined : '_blank'} rel={method.href.startsWith('mailto:') ? undefined : 'noreferrer'}>
            {method.label}
          </a>
        ))}
      </div>
      <button className="footer-admin-link" type="button" onClick={onAdmin}>Admin</button>
      <span>{siteContent.footerYear}</span>
    </footer>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function AdminPanel(props) {
  if (!props.loggedIn) {
    return <LoginPanel setLoggedIn={props.setLoggedIn} onClose={props.onClose} />;
  }

  const menu = [
    { id: 'Overview', icon: 'DB', hint: 'Dashboard' },
    { id: 'Profile', icon: 'PF', hint: 'Hero and stats' },
    { id: 'About Me', icon: 'AB', hint: 'About content' },
    { id: 'Skills', icon: 'SK', hint: 'Skill list' },
    { id: 'Experience', icon: 'EX', hint: 'Timeline' },
    { id: 'Portfolio', icon: 'PR', hint: 'Portfolio work' },
    { id: 'Contact', icon: 'CN', hint: 'Links and phone' },
    { id: 'Media', icon: 'BG', hint: 'Images and background' },
  ];
  const activeView = menu.some((item) => item.id === props.active) ? props.active : 'Overview';

  return (
    <div className="admin-overlay adminlte-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span>HP</span>
          <div>
            <strong>HP Admin</strong>
            <small>Control Panel</small>
          </div>
        </div>
        <div className="admin-user">
          <span>IT</span>
          <div>
            <strong>Huot Phanit</strong>
            <small>Online Administrator</small>
          </div>
        </div>
        <p className="admin-menu-label">Main Navigation</p>
        <nav className="admin-nav" aria-label="Admin navigation">
          {menu.map((item) => (
            <button
              key={item.id}
              className={activeView === item.id ? 'active' : ''}
              onClick={() => props.setActive(item.id)}
              type="button"
            >
              <span>{item.icon}</span>
              <div>
                <strong>{item.id}</strong>
                <small>{item.hint}</small>
              </div>
            </button>
          ))}
        </nav>
        <div className="admin-sidebar-footer">
          <small>Local editor</small>
          <strong>v1.0</strong>
        </div>
      </aside>
      <section className="admin-main">
        <div className="admin-topbar">
          <div className="admin-top-left">
            <button className="admin-top-icon" onClick={props.onClose} type="button" aria-label="Close admin panel">X</button>
            <span>Huot Phanit Portfolio Administration</span>
          </div>
          <div className="admin-top-actions">
            <button className="admin-top-action danger" onClick={() => props.setLoggedIn(false)} type="button">Sign Out</button>
          </div>
        </div>
        <div className="admin-content-header">
          <div>
            <h2>{activeView}</h2>
            <p>Manage portfolio content, visibility, and media from one dashboard.</p>
          </div>
          <span>Home / {activeView}</span>
        </div>
        <div className="admin-content-body">
          {activeView === 'Overview' && <AdminOverview {...props} />}
          {activeView === 'Profile' && <ProfileManager {...props} />}
          {activeView === 'About Me' && <AboutManager siteContent={props.siteContent} setSiteContent={props.setSiteContent} />}
          {activeView === 'Skills' && <CrudManager title="Skills" items={props.skills} setItems={props.setSkills} fields={['category', 'name', 'level', 'icon']} />}
          {activeView === 'Experience' && <ExperienceManager experiences={props.experiences} setExperiences={props.setExperiences} />}
          {activeView === 'Portfolio' && <ProjectManager projects={props.projects} setProjects={props.setProjects} />}
          {activeView === 'Contact' && <ContactManager siteContent={props.siteContent} setSiteContent={props.setSiteContent} contactMethods={props.contactMethods} setContactMethods={props.setContactMethods} />}
          {activeView === 'Media' && (
            <MediaManager
              backgroundImage={props.backgroundImage}
              setBackgroundImage={props.setBackgroundImage}
              profileImage={props.profileImage}
              setProfileImage={props.setProfileImage}
              cvFile={props.cvFile}
              setCvFile={props.setCvFile}
            />
          )}
        </div>
      </section>
    </div>
  );
}

function LoginPanel({ setLoggedIn, onClose }) {
  const [error, setError] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('email') === 'admin@huotphanit.com' && data.get('password') === 'admin123') {
      setLoggedIn(true);
      return;
    }
    setError('Use admin@huotphanit.com / admin123 for this demo login.');
  }

  return (
    <div className="admin-overlay login-overlay">
      <form className="login-card" onSubmit={handleSubmit}>
        <button className="close-login" type="button" onClick={onClose}>X</button>
        <span className="admin-logo">HP</span>
        <h2>Secure Admin Login</h2>
        <p>Manage profile content, skills, experiences, projects, images, and feature visibility.</p>
        <input name="email" type="email" placeholder="admin@huotphanit.com" />
        <input name="password" type="password" placeholder="admin123" />
        {error && <small className="form-error">{error}</small>}
        <button className="primary-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

function AdminOverview({ skills, experiences, projects, viewerCount, cvFile }) {
  const cards = [
    ['Skills', skills.length, 'Core capabilities', 'SK', 'tone-blue'],
    ['Experiences', experiences.length, 'Timeline entries', 'EX', 'tone-green'],
    ['Projects', projects.length, 'Portfolio showcases', 'PR', 'tone-orange'],
    ['Webpage Viewers', viewerCount, 'Members viewed page', 'VW', 'tone-purple'],
    ['CV File', cvFile?.name ? 'Ready' : 'Missing', cvFile?.name || 'Attach in Media', 'CV', cvFile?.name ? 'tone-green' : 'tone-red'],
  ];
  const averageSkill = Math.round(skills.reduce((total, skill) => total + Number(skill.level || 0), 0) / (skills.length || 1));
  const latestProjects = projects.slice(0, 3);

  return (
    <div className="admin-dashboard">
      <div className="admin-grid">
        {cards.map(([label, value, detail, icon, tone]) => (
          <article className={`admin-stat ${tone}`} key={label}>
            <span className="admin-stat-icon">{icon}</span>
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
              <small>{detail}</small>
            </div>
          </article>
        ))}
      </div>
      <div className="admin-hero-card">
        <div>
          <p className="eyebrow">Control Center</p>
          <h3>Portfolio content is ready for quick updates.</h3>
          <p>Use the sidebar modules to update profile text, About Me, skills, work history, portfolio, contact links, and page media.</p>
        </div>
        <div className="admin-score">
          <span>{averageSkill}%</span>
          <small>Average skill level</small>
        </div>
      </div>
      <div className="admin-insights">
        <article className="manager-card">
          <div className="admin-card-heading">
            <h3>Content Progress</h3>
            <span>{skills.length} skills tracked</span>
          </div>
          <div className="admin-progress-list">
            <label>
              <span>Skill coverage</span>
              <strong>{averageSkill}%</strong>
              <div className="progress"><span style={{ width: `${averageSkill}%` }} /></div>
            </label>
            <label>
              <span>Project coverage</span>
              <strong>{projects.length}</strong>
              <div className="progress"><span style={{ width: `${Math.min(projects.length * 25, 100)}%` }} /></div>
            </label>
          </div>
        </article>
        <article className="manager-card">
          <div className="admin-card-heading">
            <h3>Project Preview</h3>
            <span>{projects.length} total</span>
          </div>
          <div className="admin-mini-list">
            {latestProjects.map((project) => (
              <div key={project.id}>
                <span>{project.type.slice(0, 2).toUpperCase()}</span>
                <div>
                  <strong>{project.title}</strong>
                  <small>{project.type}</small>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

function ProfileManager({ siteContent, setSiteContent }) {
  const updateContent = (field, value) => setSiteContent({ ...siteContent, [field]: value });

  return (
    <div className="manager-card">
      <div className="admin-card-heading">
        <h3>Profile and Hero</h3>
        <span>Live content</span>
      </div>
      <div className="admin-form stacked wide-admin-form">
        <input value={siteContent.name} placeholder="Name" onChange={(event) => updateContent('name', event.target.value)} />
        <input value={siteContent.heroEyebrow} placeholder="Hero eyebrow" onChange={(event) => updateContent('heroEyebrow', event.target.value)} />
        <input value={siteContent.roles} placeholder="Hero roles" onChange={(event) => updateContent('roles', event.target.value)} />
        <input value={siteContent.age} placeholder="Profile card age" onChange={(event) => updateContent('age', event.target.value)} />
        <input value={siteContent.major} placeholder="Profile card major" onChange={(event) => updateContent('major', event.target.value)} />
        <textarea value={siteContent.description} placeholder="Hero description" rows="4" onChange={(event) => updateContent('description', event.target.value)} />
      </div>
      <div className="admin-card-heading inline-heading">
        <h3>Stats</h3>
        <span>Homepage counters</span>
      </div>
      <div className="admin-form stacked wide-admin-form">
        <input value={siteContent.educationValue} placeholder="Education value" onChange={(event) => updateContent('educationValue', event.target.value)} />
        <input value={siteContent.educationLabel} placeholder="Education label" onChange={(event) => updateContent('educationLabel', event.target.value)} />
        <input value={siteContent.ageValue} placeholder="Age value" onChange={(event) => updateContent('ageValue', event.target.value)} />
        <input value={siteContent.ageLabel} placeholder="Age label" onChange={(event) => updateContent('ageLabel', event.target.value)} />
        <input value={siteContent.skillsValue} placeholder="Skills value" onChange={(event) => updateContent('skillsValue', event.target.value)} />
        <input value={siteContent.skillsLabel} placeholder="Skills label" onChange={(event) => updateContent('skillsLabel', event.target.value)} />
        <input value={siteContent.supportValue} placeholder="Support value" onChange={(event) => updateContent('supportValue', event.target.value)} />
        <input value={siteContent.supportLabel} placeholder="Support label" onChange={(event) => updateContent('supportLabel', event.target.value)} />
      </div>
    </div>
  );
}

function AboutManager({ siteContent, setSiteContent }) {
  const updateContent = (field, value) => setSiteContent({ ...siteContent, [field]: value });

  return (
    <div className="manager-card">
      <div className="admin-card-heading">
        <h3>About Me</h3>
        <span>Public section</span>
      </div>
      <form className="admin-form stacked wide-admin-form" onSubmit={(event) => event.preventDefault()}>
        <input value={siteContent.aboutEyebrow} placeholder="About eyebrow" onChange={(event) => updateContent('aboutEyebrow', event.target.value)} />
        <input value={siteContent.aboutTitle} placeholder="About title" onChange={(event) => updateContent('aboutTitle', event.target.value)} />
        <textarea value={siteContent.aboutFirst} placeholder="First paragraph" rows="5" onChange={(event) => updateContent('aboutFirst', event.target.value)} />
        <textarea value={siteContent.aboutSecond} placeholder="Second paragraph" rows="5" onChange={(event) => updateContent('aboutSecond', event.target.value)} />
      </form>
    </div>
  );
}

function ContactManager({ siteContent, setSiteContent, contactMethods, setContactMethods }) {
  const updateContent = (field, value) => setSiteContent({ ...siteContent, [field]: value });
  const updateMethod = (id, field, value) => {
    setContactMethods(contactMethods.map((method) => (method.id === id ? { ...method, [field]: value } : method)));
  };

  return (
    <div className="admin-feature-layout">
      <div className="manager-card">
        <div className="admin-card-heading">
          <h3>Contact Section</h3>
          <span>Phone, Gmail, location</span>
        </div>
        <form className="admin-form stacked wide-admin-form" onSubmit={(event) => event.preventDefault()}>
          <input value={siteContent.contactEyebrow} placeholder="Contact eyebrow" onChange={(event) => updateContent('contactEyebrow', event.target.value)} />
          <input value={siteContent.location} placeholder="Location" onChange={(event) => updateContent('location', event.target.value)} />
          <input value={siteContent.phone} placeholder="Phone number" onChange={(event) => updateContent('phone', event.target.value)} />
          <input value={siteContent.email} placeholder="Gmail address" onChange={(event) => updateContent('email', event.target.value)} />
          <textarea value={siteContent.contactTitle} placeholder="Contact title" rows="4" onChange={(event) => updateContent('contactTitle', event.target.value)} />
          <input value={siteContent.footerRole} placeholder="Footer role" onChange={(event) => updateContent('footerRole', event.target.value)} />
          <input value={siteContent.footerYear} placeholder="Footer year text" onChange={(event) => updateContent('footerYear', event.target.value)} />
        </form>
      </div>
      <div className="manager-card">
        <div className="admin-card-heading">
          <h3>Social Contact Links</h3>
          <span>{contactMethods.length} links</span>
        </div>
        <div className="contact-admin-list">
          {contactMethods.map((method) => (
            <div className="contact-admin-item" key={method.id}>
              <input value={method.label} placeholder="Label" onChange={(event) => updateMethod(method.id, 'label', event.target.value)} />
              <input value={method.value} placeholder="Display value" onChange={(event) => updateMethod(method.id, 'value', event.target.value)} />
              <input value={method.href} placeholder="URL" onChange={(event) => updateMethod(method.id, 'href', event.target.value)} />
              <input value={method.icon} placeholder="Icon text" onChange={(event) => updateMethod(method.id, 'icon', event.target.value)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MediaManager({ backgroundImage, setBackgroundImage, profileImage, setProfileImage, cvFile, setCvFile }) {
  return (
    <div className="admin-feature-layout media-manager-layout">
      <div className="manager-card">
        <div className="admin-card-heading">
          <h3>Profile Picture</h3>
          <span>Navbar and profile card</span>
        </div>
        <div className="upload-row">
          <div className="profile-preview">{profileImage ? <img src={profileImage} alt="Profile preview" /> : 'HP'}</div>
          <label className="upload-btn">
            Upload profile image
            <input type="file" accept="image/*" onChange={(event) => readImage(event, setProfileImage)} />
          </label>
        </div>
      </div>
      <div className="manager-card">
        <div className="admin-card-heading">
          <h3>CV Attachment</h3>
          <span>{cvFile?.name ? 'Ready for download' : 'No file attached'}</span>
        </div>
        <div className="upload-row cv-upload-row">
          <div className="cv-preview">
            <span>CV</span>
            <div>
              <strong>{cvFile?.name || 'Attach your CV'}</strong>
              <small>{cvFile?.size ? formatFileSize(cvFile.size) : 'PDF, DOC, or DOCX'}</small>
            </div>
          </div>
          <div className="media-actions">
            <label className="upload-btn">
              Attach CV file
              <input type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(event) => readFile(event, setCvFile)} />
            </label>
            {cvFile?.url && <a className="admin-top-action" href={cvFile.url} download={cvFile.name}>Test download</a>}
            {cvFile?.url && <button className="admin-top-action danger" type="button" onClick={() => setCvFile(null)}>Remove</button>}
          </div>
        </div>
      </div>
      <div className="manager-card">
        <div className="admin-card-heading">
          <h3>Background Picture</h3>
          <span>Full page background</span>
        </div>
        <div className="upload-row">
          <div className="background-preview">{backgroundImage ? <img src={backgroundImage} alt="Background preview" /> : <span>Default</span>}</div>
          <div className="media-actions">
            <label className="upload-btn">
              Upload background
              <input type="file" accept="image/*" onChange={(event) => readImage(event, setBackgroundImage)} />
            </label>
            <button className="admin-top-action" type="button" onClick={() => setBackgroundImage('')}>Use default</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CrudManager({ title, items, setItems, fields }) {
  const blank = Object.fromEntries(fields.map((field) => [field, field === 'level' ? 80 : '']));
  const [form, setForm] = useState(blank);
  const [editingId, setEditingId] = useState(null);

  function save(event) {
    event.preventDefault();
    const payload = { ...form, level: Number(form.level) || 0 };
    if (editingId) {
      setItems(items.map((item) => (item.id === editingId ? { ...item, ...payload } : item)));
    } else {
      setItems([...items, { id: Date.now(), ...payload }]);
    }
    setForm(blank);
    setEditingId(null);
  }

  return (
    <div className="manager-card">
      <div className="admin-card-heading">
        <h3>{editingId ? `Edit ${title}` : `Add ${title}`}</h3>
        <span>{items.length} records</span>
      </div>
      <form className="admin-form" onSubmit={save}>
        {fields.map((field) => (
          <input key={field} value={form[field]} type={field === 'level' ? 'number' : 'text'} placeholder={field} onChange={(event) => setForm({ ...form, [field]: event.target.value })} />
        ))}
        <button className="primary-btn" type="submit">{editingId ? 'Update' : 'Add'}</button>
      </form>
      <AdminTable
        items={items}
        render={(item) => `${item.name} - ${item.category || item.level}`}
        onEdit={(item) => { setForm(Object.fromEntries(fields.map((field) => [field, item[field] ?? '']))); setEditingId(item.id); }}
        onDelete={(id) => setItems(items.filter((item) => item.id !== id))}
      />
    </div>
  );
}

function ExperienceManager({ experiences, setExperiences }) {
  const [form, setForm] = useState({ title: '', company: '', period: '', details: '' });
  const [editingId, setEditingId] = useState(null);

  function save(event) {
    event.preventDefault();
    const payload = { ...form, details: form.details.split('\n').filter(Boolean) };
    setExperiences(editingId ? experiences.map((item) => item.id === editingId ? { ...item, ...payload } : item) : [...experiences, { id: Date.now(), ...payload }]);
    setForm({ title: '', company: '', period: '', details: '' });
    setEditingId(null);
  }

  return (
    <div className="manager-card">
      <div className="admin-card-heading">
        <h3>{editingId ? 'Edit Experience' : 'Add Experience'}</h3>
        <span>{experiences.length} records</span>
      </div>
      <form className="admin-form stacked" onSubmit={save}>
        <input value={form.title} placeholder="Title" onChange={(event) => setForm({ ...form, title: event.target.value })} />
        <input value={form.company} placeholder="Company" onChange={(event) => setForm({ ...form, company: event.target.value })} />
        <input value={form.period} placeholder="Period" onChange={(event) => setForm({ ...form, period: event.target.value })} />
        <textarea value={form.details} placeholder="Responsibilities, one per line" onChange={(event) => setForm({ ...form, details: event.target.value })} />
        <button className="primary-btn" type="submit">{editingId ? 'Update' : 'Add'}</button>
      </form>
      <AdminTable
        items={experiences}
        render={(item) => `${item.title} - ${item.company}`}
        onEdit={(item) => { setForm({ ...item, details: item.details.join('\n') }); setEditingId(item.id); }}
        onDelete={(id) => setExperiences(experiences.filter((item) => item.id !== id))}
      />
    </div>
  );
}

function ProjectManager({ projects, setProjects }) {
  const [form, setForm] = useState({ title: '', type: '', summary: '', image: '' });
  const [editingId, setEditingId] = useState(null);

  function save(event) {
    event.preventDefault();
    setProjects(editingId ? projects.map((item) => item.id === editingId ? { ...item, ...form } : item) : [...projects, { id: Date.now(), ...form }]);
    setForm({ title: '', type: '', summary: '', image: '' });
    setEditingId(null);
  }

  return (
    <div className="manager-card">
      <div className="admin-card-heading">
        <h3>{editingId ? 'Edit Project' : 'Add Project'}</h3>
        <span>{projects.length} records</span>
      </div>
      <form className="admin-form stacked" onSubmit={save}>
        <input value={form.title} placeholder="Title" onChange={(event) => setForm({ ...form, title: event.target.value })} />
        <input value={form.type} placeholder="Type" onChange={(event) => setForm({ ...form, type: event.target.value })} />
        <textarea value={form.summary} placeholder="Project summary" onChange={(event) => setForm({ ...form, summary: event.target.value })} />
        <label className="upload-btn">
          Upload project image
          <input type="file" accept="image/*" onChange={(event) => readImage(event, (image) => setForm({ ...form, image }))} />
        </label>
        <button className="primary-btn" type="submit">{editingId ? 'Update' : 'Add'}</button>
      </form>
      <AdminTable
        items={projects}
        render={(item) => `${item.title} - ${item.type}`}
        onEdit={(item) => { setForm(item); setEditingId(item.id); }}
        onDelete={(id) => setProjects(projects.filter((item) => item.id !== id))}
      />
    </div>
  );
}

function FeatureManager({ features, setFeatures }) {
  return (
    <div className="admin-feature-layout">
      <CrudManager title="Features" items={features} setItems={setFeatures} fields={['name', 'description']} />
      <div className="manager-card">
        <div className="admin-card-heading">
          <h3>Feature Visibility</h3>
          <span>{features.filter((feature) => feature.enabled).length} enabled</span>
        </div>
        <div className="feature-toggle-list">
          {features.map((feature) => (
            <label key={feature.id}>
              <input
                type="checkbox"
                checked={feature.enabled}
                onChange={() => setFeatures(features.map((item) => item.id === feature.id ? { ...item, enabled: !item.enabled } : item))}
              />
              <span>{feature.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdminTable({ items, render, onEdit, onDelete }) {
  return (
    <div className="admin-table">
      <div className="admin-row admin-row-head">
        <span>Record</span>
        <span>Actions</span>
      </div>
      {items.map((item) => (
        <div className="admin-row" key={item.id}>
          <span>{render(item)}</span>
          <div>
            <button onClick={() => onEdit(item)} type="button">Edit</button>
            <button className="danger" onClick={() => onDelete(item.id)} type="button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function readImage(event, setter) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => setter(reader.result);
  reader.readAsDataURL(file);
}

function readFile(event, setter) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => setter({
    name: file.name,
    size: file.size,
    type: file.type || 'application/octet-stream',
    url: reader.result,
  });
  reader.readAsDataURL(file);
}

function formatFileSize(size) {
  if (!size) return '0 KB';
  if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

export default App;
