'use client';

import { useEffect, useState } from 'react';

const links = {
  email: 'mailto:preranaa.chemical.ug@jadavpuruniversity.in',
  linkedin: 'https://www.linkedin.com/in/prerana-acharyya-60b1652a1',
  github: 'https://github.com/prerana1621',
  codeforces: 'https://codeforces.com/profile/prerana_1621',
  leetcode: 'https://leetcode.com/u/Prerana_1621/',
  cati: 'https://usecati.com/',
  biomass: 'https://colab.research.google.com/drive/1hkJ2x67db2_5MtR-fhmXoKjDQF18Mv_c?usp=sharing',
  footballRepo: 'https://github.com/prerana1621/Football-Standings-Using-API',
  footballDemo: 'https://football-analytics-dashboard.netlify.app/',
};

const navItems = [
  ['Story', '#story'],
  ['Journey', '#journey'],
  ['Work', '#work'],
  ['Beyond code', '#beyond-code'],
  ['Contact', '#contact'],
];

function ArrowUpRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v15m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionLabel({ index, children, light = false }) {
  return (
    <div className={`section-label${light ? ' section-label--light' : ''}`}>
      <span>{index}</span><span className="section-label__line" /><span>{children}</span>
    </div>
  );
}

function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <a href="#home" className="wordmark" aria-label="Prerana Acharyya — home">
        <span className="wordmark__symbol">P<span>.</span></span>
        <span className="wordmark__name">PRERANA ACHARYYA</span>
      </a>
      <nav className={`nav${menuOpen ? ' nav--open' : ''}`} aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} display`} title="Switch colour mode">
          <span className="theme-toggle__icon">{theme === 'dark' ? '☼' : '◐'}</span>
          <span className="theme-toggle__text">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
        <a className="header-resume" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={13} /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </div>
    </header>
  );
}

function Terminal() {
  const [active, setActive] = useState('whoami');
  const commands = {
    whoami: {
      command: 'whoami',
      output: 'A curious learner who chose not to let one academic branch define the work she could do.',
    },
    build: {
      command: 'what_i_build',
      output: 'Web applications, useful workflows, AI-powered experiences and data-driven experiments.',
    },
    drive: {
      command: 'what_keeps_me_going',
      output: 'The feeling of turning a question into something real — and the curiosity to ask the next question.',
    },
  };

  return (
    <div className="terminal" aria-label="Interactive about me terminal">
      <div className="terminal__bar">
        <div className="terminal__dots"><i /><i /><i /></div>
        <span>prerana@curious-mind ~</span>
        <span className="terminal__live"><b /> available for ideas</span>
      </div>
      <div className="terminal__body">
        <div className="terminal__prompt"><span>➜</span> ~/about <span className="terminal__muted">$</span> {commands[active].command}</div>
        <p className="terminal__output">{commands[active].output}<span className="terminal__cursor">▋</span></p>
        <div className="terminal__commands" aria-label="Choose a terminal command">
          {Object.entries(commands).map(([key, item]) => (
            <button key={key} type="button" className={active === key ? 'is-active' : ''} onClick={() => setActive(key)}>{item.command}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function Portfolio() {
  const [theme, setTheme] = useState('light');
  const [activeYear, setActiveYear] = useState('2026');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const milestones = {
    '2021': {
      title: 'The foundations',
      copy: 'A strong school foundation, and the beginning of a habit that has stayed with me: being curious about how the world works.',
      detail: 'Gyandeep Vidyapith · Secondary education · 98.86%',
    },
    '2023': {
      title: 'A different branch. The same curiosity.',
      copy: 'I joined Jadavpur University for Chemical Engineering. Computer Science had been my first preference, but not getting that branch did not make my interest in software disappear.',
      detail: 'B.E. Chemical Engineering · Expected 2027',
    },
    '2024': {
      title: 'Learning beyond one classroom',
      copy: 'Alongside my engineering studies, I pursued the IIT Madras B.S. in Data Science and Programming, completing its Foundation Level.',
      detail: 'IIT Madras · Foundation Level · 9.38 / 10 CGPA',
    },
    '2025': {
      title: 'From learning to building',
      copy: 'I built a football analytics dashboard and reached the finalist stage at IIT Bombay Azeotropy OPTIMIZER.',
      detail: 'OPTIMIZER 2025 · Finalist · Rank 6',
    },
    '2026': {
      title: 'Building with real-world context',
      copy: 'I explored machine learning for a chemical engineering problem and worked as an SDE Intern at CATI AI, contributing to AI voice-agent workflows and integrations.',
      detail: 'CATI AI · SDE Intern · July–October 2026',
    },
    '2027': {
      title: 'The next chapter is open',
      copy: 'I expect to complete my Chemical Engineering degree in 2027. I am working towards becoming a software engineer, while staying a learner first.',
      detail: 'Expected graduation · 2027',
    },
  };

  return (
    <main className={`portfolio theme-${theme}`}>
      <Header theme={theme} setTheme={setTheme} />

      <section className="hero dark-panel" id="home">
        <div className="hero__grid" />
        <div className="hero__content page-shell">
          <div className="hero__copy">
            <div className="eyebrow eyebrow--light">
              <span className="eyebrow__dot" /> A DIFFERENT BRANCH. THE SAME
              CURIOSITY.
            </div>
            <h1>
              My degree has a branch.
              <br />
              <em>My curiosity doesn’t.</em>
            </h1>
            <p className="hero__intro">
              I’m Prerana — a Chemical Engineering student, software developer
              by passion, and a person who likes asking <i>“what if?”</i>
            </p>
            <div className="hero__actions">
              <a href="#story" className="button button--lime">
                Get to know me <ArrowDown />
              </a>
              <a href="#work" className="text-link text-link--light">
                Explore my work <ArrowUpRight />
              </a>
            </div>
            <div className="hero__meta">
              <span>KOLKATA, INDIA</span>
              <span className="meta-separator" />
              <span>ENGINEERING × SOFTWARE × AI</span>
            </div>
          </div>
          <div
            className="hero__art"
            aria-label="Chemistry-to-code illustration and portrait placeholder"
          >
            <div className="hero__art-note">
              A MIND IN MORE THAN ONE DISCIPLINE <span>↘</span>
            </div>
            <div className="portrait-card">
              <div className="portrait-card__image">
                <img
                  src="/images/Self.jpeg"
                  alt="Portrait of Prerana Acharyya"
                  className="portrait-card__photo"
                />

                <span className="portrait-card__corner portrait-card__corner--tl" />
                <span className="portrait-card__corner portrait-card__corner--br" />
              </div>
              <div className="portrait-card__caption">
                <span>THE PERSON BEHIND THE PROJECTS</span>
                <span>01 / 01</span>
              </div>
            </div>
            <div className="hero__art-index">
              FIG. 01 — FROM MOLECULES TO MODULES
            </div>
          </div>
        </div>
        <div className="hero__bottom page-shell">
          <span>SCROLL TO EXPLORE</span>
          <span className="hero__scroll-line" />
          <span>01 — 06</span>
        </div>
      </section>

      <section className="intro-strip section-light">
        <div className="page-shell intro-strip__inner">
          <p>
            “I like the moment when an idea stops being abstract and becomes
            something you can actually use.”
          </p>
          <span>— A thought I keep coming back to</span>
        </div>
      </section>

      <section className="story section-light section-pad" id="story">
        <div className="page-shell">
          <SectionLabel index="01">THE STORY</SectionLabel>
          <div className="story__layout">
            <Reveal className="story__heading">
              <p className="kicker">A LITTLE CONTEXT, BEFORE THE CODE</p>
              <h2>
                I didn’t take the most <em>direct</em> route. I kept going
                anyway.
              </h2>
            </Reveal>
            <Reveal className="story__body">
              <p className="lead-copy">
                Computer Science was the field I was most interested in when I
                chose my academic path. My admission rank didn’t allow me to get
                that branch at Jadavpur University, so I joined Chemical
                Engineering instead.
              </p>
              <p>
                But changing my academic branch didn’t change what fascinated
                me. Software development drew me in because I could take an
                idea, write code, build something, test it and see it come to
                life.
              </p>
              <p>
                So I kept learning alongside my degree — programming, data
                structures and algorithms, web development, machine learning and
                AI. Over time, that curiosity became projects, problem-solving
                practice and an opportunity to contribute to a real software
                product.
              </p>
              <p>
                I’m not trying to erase one part of my journey to make room for
                another. I’m learning to bring both ways of thinking with me.
              </p>
              <div className="story__signoff">
                Still curious. Still building. <span>↗</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="journey dark-panel section-pad" id="journey">
        <div className="page-shell">
          <SectionLabel index="02" light>
            THE JOURNEY
          </SectionLabel>
          <div className="journey__top">
            <Reveal>
              <p className="kicker kicker--light">
                NOT A STRAIGHT LINE — AND THAT’S OKAY
              </p>
              <h2>
                Different chapters.
                <br />
                <em>One continuing story.</em>
              </h2>
            </Reveal>
            <Reveal>
              <p className="journey__aside">
                Each step added a new way to think, a new skill to practise, or
                a new question to follow.
              </p>
            </Reveal>
          </div>
          <div className="timeline">
            <div
              className="timeline__years"
              role="tablist"
              aria-label="Journey year"
            >
              {Object.keys(milestones).map((year) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeYear === year}
                  className={activeYear === year ? "is-active" : ""}
                  key={year}
                  onClick={() => setActiveYear(year)}
                >
                  {year}
                  <span />
                </button>
              ))}
            </div>
            <div className="timeline__detail" role="tabpanel">
              <span className="timeline__overline">CHAPTER / {activeYear}</span>
              <h3>{milestones[activeYear].title}</h3>
              <p>{milestones[activeYear].copy}</p>
              <div className="timeline__detail-line">
                <span />
                {milestones[activeYear].detail}
              </div>
            </div>
            <div className="timeline__note">
              <span>↳</span> Select a year to explore that chapter.
            </div>
          </div>
          <div className="education-grid">
            <div>
              <span className="education-grid__label">CURRENTLY STUDYING</span>
              <strong>B.E. Chemical Engineering</strong>
              <span>Jadavpur University · Expected 2027</span>
              <span className="education-grid__score">
                7.71 / 10 SGPA · Up to 6th semester
              </span>
            </div>
            <div>
              <span className="education-grid__label">ADDITIONAL LEARNING</span>
              <strong>B.S. Data Science & Programming</strong>
              <span>IIT Madras · Foundation Level</span>
              <span className="education-grid__score">9.38 / 10 CGPA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work section-light section-pad" id="work">
        <div className="page-shell">
          <SectionLabel index="03">SELECTED WORK</SectionLabel>
          <div className="work__heading-row">
            <Reveal>
              <p className="kicker">IDEAS, EXPERIMENTS & CONTRIBUTIONS</p>
              <h2>
                Things I’ve <em>made</em> and learned from.
              </h2>
            </Reveal>
            <Reveal>
              <p className="work__intro">
                I like learning by doing. These projects gave me room to
                experiment, work through constraints and turn concepts into
                something tangible.
              </p>
            </Reveal>
          </div>

          <div className="projects-grid">
            <Reveal className="project project--feature">
              <div className="project__content">
                <div className="project__meta">
                  <span>JAN — APR 2026</span>
                  <span>01 / MACHINE LEARNING</span>
                </div>
                <h3>Predicting biomass pretreatment outcomes</h3>
                <p>
                  Could machine learning help predict lignin removal yield? I
                  developed a pipeline using biomass, process, solvent and
                  molecular fingerprint features, then trained and compared 11
                  regression models.
                </p>
                <div className="project__result">
                  <strong>11 models</strong>
                  <span>
                    evaluated, with CatBoost achieving R² = 0.830 and RMSE =
                    0.073.
                  </span>
                </div>
                <div className="tag-list">
                  <span>Python</span>
                  <span>Pandas</span>
                  <span>NumPy</span>
                  <span>Scikit-learn</span>
                  <span>CatBoost</span>
                  <span>XGBoost</span>
                </div>
                <div className="project__links">
                  <a
                    href={links.biomass}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--dark"
                  >
                    Explore notebook <ArrowUpRight />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal className="project project--reverse">
              <div className="project__content">
                <div className="project__meta">
                  <span>APR 2025</span>
                  <span>02 / FULL-STACK DEVELOPMENT</span>
                </div>
                <h3>Making football data easier to explore</h3>
                <p>
                  A full-stack dashboard for league standings and team
                  statistics across multiple football leagues. I built an
                  Express backend to fetch data from a REST API and created
                  interactive visualisations for comparing performance.
                </p>
                <div className="tag-list">
                  <span>JavaScript</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>REST API</span>
                  <span>Chart.js</span>
                </div>
                <div className="project__links">
                  <a
                    href={links.footballDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--dark"
                  >
                    Open live demo <ArrowUpRight />
                  </a>
                  <a
                    href={links.footballRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    View source <ArrowUpRight />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="experience-card">
            <div className="experience-card__index">
              03 / INDUSTRY EXPERIENCE
            </div>
            <div className="experience-card__main">
              <div className="experience-card__company">
                CATI<span>AI</span>
              </div>
              <div>
                <h3>Building experiences for AI voice agents.</h3>
                <p>
                  As an SDE Intern, I worked across AI-agent workflows, API
                  integrations, function calling, frontend interfaces and
                  testing. My contributions included Calendly appointment
                  workflows, HubSpot CRM integration, reusable agent templates
                  and a Test Agent interface.
                </p>
                <div className="tag-list">
                  <span>Node.js</span>
                  <span>Axios</span>
                  <span>REST APIs</span>
                  <span>OAuth</span>
                  <span>Function Calling</span>
                  <span>API Testing</span>
                </div>
              </div>
            </div>
            <div className="experience-card__footer">
              <span>JULY — OCTOBER 2026</span>
              <span>REMOTE · SDE INTERN</span>
              <a href={links.cati} target="_blank" rel="noreferrer">
                About CATI AI <ArrowUpRight />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="proof dark-panel section-pad">
        <div className="page-shell">
          <SectionLabel index="04" light>
            THE PRACTICE BEHIND THE WORK
          </SectionLabel>
          <div className="proof__layout">
            <Reveal>
              <p className="kicker kicker--light">SMALL STEPS, REPEATED</p>
              <h2>
                I enjoy the <em>problem</em> as much as the solution.
              </h2>
              <p className="proof__copy">
                Competitive programming has taught me to slow down, look for
                patterns and keep trying when the first approach doesn’t work.
              </p>
            </Reveal>
            <div className="proof__stats">
              <a
                href={links.codeforces}
                target="_blank"
                rel="noreferrer"
                className="proof-stat"
              >
                <span className="proof-stat__source">
                  CODEFORCES <ArrowUpRight size={13} />
                </span>
                <strong>1548</strong>
                <span>Specialist · Top 15% globally</span>
              </a>
              <a
                href={links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="proof-stat"
              >
                <span className="proof-stat__source">
                  LEETCODE <ArrowUpRight size={13} />
                </span>
                <strong>1714</strong>
                <span>Rating · Top 12.2% · 160+ solved</span>
              </a>
              <div className="proof-stat">
                <span className="proof-stat__source">
                  IIT BOMBAY · AZEOTROPY
                </span>
                <strong>
                  6<sup>th</sup>
                </strong>
                <span>OPTIMIZER 2025 · Finalist</span>
              </div>
            </div>
          </div>
          <div className="skills-block">
            <div className="skills-block__head">
              <span>TOOLS I REACH FOR</span>
              <span>A WORKING TOOLKIT, NOT A FINISHED LIST</span>
            </div>
            <div className="skills-cloud">
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>Java</span>
              <span>Python</span>
              <span>C</span>
              <span>SQL</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
              <span>Tailwind CSS</span>
              <span>MongoDB</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Scikit-learn</span>
              <span>CatBoost</span>
              <span>XGBoost</span>
              <span>Git & GitHub</span>
              <span>Postman</span>
              <span>DBMS</span>
              <span>OOP</span>
              <span>Data Structures & Algorithms</span>
            </div>
          </div>
        </div>
      </section>

      <section className="beyond section-light section-pad" id="beyond-code">
        <div className="page-shell">
          <SectionLabel index="05">BEYOND THE CODE</SectionLabel>
          <div className="beyond__layout">
            <Reveal>
              <p className="kicker">THE HUMAN PART</p>
              <h2>
                Curiosity is not just what I do. It’s how I{" "}
                <em>move through the world.</em>
              </h2>
              <p className="beyond__intro">
                I like understanding the things around me. One answer usually
                leads to another question, and I’m happy to follow that trail.
              </p>
            </Reveal>
            <div className="beyond__right">
              <Reveal className="trait">
                <span>01</span>
                <div>
                  <h3>Curious by nature</h3>
                  <p>
                    I want to know how things work, why they work and what else
                    might be possible.
                  </p>
                </div>
                <span className="trait__mark">↗</span>
              </Reveal>
              <Reveal className="trait">
                <span>02</span>
                <div>
                  <h3>Persistent by choice</h3>
                  <p>
                    I’m proud that I didn’t give up on software engineering just
                    because my degree took a different direction.
                  </p>
                </div>
                <span className="trait__mark">↗</span>
              </Reveal>
              <Reveal className="trait">
                <span>03</span>
                <div>
                  <h3>Still becoming</h3>
                  <p>
                    I want to become a good software engineer — and a good human
                    being. Both matter to me.
                  </p>
                </div>
                <span className="trait__mark">↗</span>
              </Reveal>
            </div>
          </div>
          <div className="terminal-wrap">
            <div className="terminal-wrap__label">
              A SMALL WINDOW INTO MY HEAD
            </div>
            <Terminal />
          </div>
        </div>
      </section>

      <section className="contact dark-panel section-pad" id="contact">
        <div className="page-shell">
          <SectionLabel index="06" light>
            THE NEXT CHAPTER
          </SectionLabel>
          <div className="contact__main">
            <Reveal>
              <p className="kicker kicker--light">
                I’M STILL LEARNING. I’M READY TO BUILD.
              </p>
              <h2>
                Good work starts with a <em>good conversation.</em>
              </h2>
              <p className="contact__copy">
                I’m working towards becoming a software engineer, and I’m always
                glad to connect with people who enjoy thoughtful ideas, useful
                products and learning by doing.
              </p>
              <a className="button button--lime" href={links.email}>
                Say hello <ArrowUpRight />
              </a>
            </Reveal>
            <div className="contact__links">
              <a href={links.email}>
                <span>EMAIL</span>
                <strong>preranaa.chemical.ug@jadavpuruniversity.in</strong>
                <ArrowUpRight />
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <span>LINKEDIN</span>
                <strong>Connect professionally</strong>
                <ArrowUpRight />
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                <span>GITHUB</span>
                <strong>Explore my code</strong>
                <ArrowUpRight />
              </a>
              <a href="tel:+917044411708">
                <span>PHONE</span>
                <strong>+91 70444 11708</strong>
                <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="contact__closing">
            <span>
              “I don’t have every step figured out. I know the direction I want
              to keep moving in.”
            </span>
            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </div>
      </section>

      <footer className="footer section-light">
        <div className="page-shell footer__inner">
          <a href="#home" className="footer__brand">
            PRERANA<span>.</span>
          </a>
          <span>MADE WITH CURIOSITY · © {new Date().getFullYear()}</span>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            RESUME <ArrowUpRight size={12} />
          </a>
        </div>
      </footer>
    </main>
  );
}
