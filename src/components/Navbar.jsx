import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Certifications", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled || open ? "rgba(10,10,10,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1f1f1f" : "none",
        transition: "all 0.3s ease",
        padding: "1rem 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem" }}>
          RK<span style={{ color: "var(--accent)" }}>.</span>
        </span>

        <div className="desktop-nav" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontFamily: "var(--font-mono)", fontSize: "0.72rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--muted)", textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
            >{l}</a>
          ))}
          <a href="/resume.pdf" download style={{
            fontFamily: "var(--font-mono)", fontSize: "0.72rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--bg)", background: "var(--accent)",
            padding: "0.5rem 1.2rem", textDecoration: "none",
          }}>Resume</a>
        </div>

        <button onClick={() => setOpen(!open)} className="hamburger" style={{
          background: "none", border: "none", cursor: "pointer",
          padding: "4px", display: "none", flexDirection: "column", gap: "5px",
        }}>
          <span style={{ display: "block", width: 24, height: 2, background: "var(--text)", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "var(--text)", transition: "all 0.3s", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: 24, height: 2, background: "var(--text)", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </nav>

      {open && (
        <div style={{
          position: "fixed", top: "56px", left: 0, right: 0, zIndex: 99,
          background: "rgba(10,10,10,0.97)", borderBottom: "1px solid var(--border)",
          padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem",
        }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{
              fontFamily: "var(--font-mono)", fontSize: "0.9rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--text)", textDecoration: "none",
            }}>{l}</a>
          ))}
          <a href="/resume.pdf" download style={{
            fontFamily: "var(--font-mono)", fontSize: "0.75rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--bg)", background: "var(--accent)",
            padding: "0.75rem 1.5rem", textDecoration: "none",
            display: "inline-block", alignSelf: "flex-start",
          }}>Resume</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;
ENDOFFILE

cat > /home/claude/FUTURE_FS_01/src/components/Hero.jsx << 'ENDOFFILE'
import { useEffect, useState } from "react";

const ROLES = ["Cloud Engineer", "DevOps Engineer", "AWS Practitioner", "Linux Enthusiast"];

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let i = typing ? 0 : role.length;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(role.slice(0, i + 1)); i++;
        if (i === role.length) { clearInterval(interval); setTimeout(() => setTyping(false), 1500); }
      } else {
        setDisplayed(role.slice(0, i - 1)); i--;
        if (i === 0) { clearInterval(interval); setRoleIdx((prev) => (prev + 1) % ROLES.length); setTyping(true); }
      }
    }, typing ? 70 : 40);
    return () => clearInterval(interval);
  }, [roleIdx, typing]);

  return (
    <section className="grid-bg noise" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "7rem 1.5rem 4rem", position: "relative", overflow: "hidden",
    }}>
      <div style={{ maxWidth: 860, width: "100%" }}>
        <p className="tag animate-fade-up-1" style={{ marginBottom: "1.5rem" }}>&gt; Available for opportunities</p>

        <h1 className="glitch-text animate-fade-up-2" data-text="Roshan Kumar" style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(2.5rem, 10vw, 7rem)", lineHeight: 1,
          letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "1.5rem",
        }}>Roshan Kumar</h1>

        <div className="animate-fade-up-3" style={{ marginBottom: "2rem", minHeight: "2rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(0.9rem, 3vw, 1.4rem)", color: "var(--accent)" }}>
            {displayed}<span className="animate-blink">█</span>
          </span>
        </div>

        <p className="animate-fade-up-3" style={{
          fontFamily: "var(--font-mono)", fontSize: "clamp(0.78rem, 2vw, 0.9rem)",
          color: "var(--muted)", maxWidth: 520, lineHeight: 1.8, marginBottom: "3rem",
        }}>
          Building scalable infrastructure with AWS · Docker · Kubernetes · Linux · GitHub Actions
        </p>

        <div className="animate-fade-up-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          <a href="#projects" style={{
            fontFamily: "var(--font-mono)", fontSize: "0.75rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--bg)", background: "var(--accent)",
            padding: "0.9rem 2rem", textDecoration: "none",
          }}>View Projects</a>
          <a href="#contact" style={{
            fontFamily: "var(--font-mono)", fontSize: "0.75rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--text)", background: "transparent",
            border: "1px solid var(--border)",
            padding: "0.9rem 2rem", textDecoration: "none",
          }}>Get in Touch</a>
        </div>

        <div className="animate-fade-up-4" style={{
          background: "var(--surface)", border: "1px solid var(--border)",
          padding: "1.2rem 1.5rem", maxWidth: 460,
          fontFamily: "var(--font-mono)", fontSize: "clamp(0.68rem, 2vw, 0.78rem)",
        }}>
          <div style={{ display: "flex", gap: "6px", marginBottom: "0.8rem" }}>
            {["#ff5f57","#febc2e","#28c840"].map((c) => (
              <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "inline-block" }} />
            ))}
          </div>
          <p style={{ color: "var(--muted)" }}>$ <span style={{ color: "var(--accent)" }}>docker</span> run roshan-kumar --env prod</p>
          <p style={{ color: "var(--muted)", marginTop: "0.4rem" }}>$ <span style={{ color: "var(--accent2)" }}>kubectl</span> get deployments -A</p>
          <p style={{ color: "var(--muted)", marginTop: "0.4rem" }}>$ <span style={{ color: "#ffdd57" }}>aws</span> s3 sync ./dist s3://portfolio</p>
          <p style={{ color: "var(--accent)", marginTop: "0.4rem" }}>✔ All systems operational<span className="animate-blink"> _</span></p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
ENDOFFILE

cat > /home/claude/FUTURE_FS_01/src/components/About.jsx << 'ENDOFFILE'
function About() {
  const stats = [
    { value: "10+", label: "Projects Built" },
    { value: "3+", label: "Certifications" },
    { value: "2+", label: "Years Learning" },
    { value: "∞", label: "Coffee Consumed" },
  ];

  return (
    <section id="about" className="section-fade" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p className="tag" style={{ marginBottom: "1rem" }}>01 / About</p>
        <div className="accent-line" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "start" }}>
          <div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em",
              lineHeight: 1.15, marginBottom: "1.5rem",
            }}>
              Building things that <span style={{ color: "var(--accent)" }}>scale.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "1rem" }}>
              Cloud and DevOps enthusiast with hands-on experience in containerization, CI/CD pipelines, and cloud infrastructure on AWS.
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.9 }}>
              Passionate about automating everything — from deployment workflows to infrastructure provisioning — and building systems that are observable, resilient, and fast.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }}>
            {stats.map(({ value, label }) => (
              <div key={label} style={{ background: "var(--surface)", padding: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.2rem", color: "var(--accent)", lineHeight: 1 }}>{value}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted)", marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
ENDOFFILE

cat > /home/claude/FUTURE_FS_01/src/components/Skills.jsx << 'ENDOFFILE'
const SKILLS = [
  { name: "AWS", level: 75, category: "Cloud" },
  { name: "Docker", level: 85, category: "DevOps" },
  { name: "Kubernetes", level: 65, category: "DevOps" },
  { name: "Linux", level: 80, category: "Systems" },
  { name: "Git / GitHub", level: 90, category: "DevOps" },
  { name: "Python", level: 70, category: "Dev" },
  { name: "React", level: 65, category: "Dev" },
  { name: "MySQL", level: 70, category: "Data" },
  { name: "MongoDB", level: 60, category: "Data" },
  { name: "GitHub Actions", level: 72, category: "DevOps" },
  { name: "WordPress", level: 75, category: "Dev" },
  { name: "Nginx", level: 65, category: "Systems" },
];

const CATEGORY_COLORS = {
  Cloud: "#ffdd57", DevOps: "#00ff87", Systems: "#0066ff", Dev: "#ff6b9d", Data: "#a78bfa",
};

function Skills() {
  return (
    <section id="skills" className="section-fade" style={{
      padding: "5rem 1.5rem",
      background: "var(--surface)",
      borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p className="tag" style={{ marginBottom: "1rem" }}>02 / Skills</p>
        <div className="accent-line" />
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", marginBottom: "3rem",
        }}>Tech Stack</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
          {SKILLS.map(({ name, level, category }) => (
            <div key={name} style={{
              background: "var(--bg)", border: "1px solid var(--border)",
              padding: "1.2rem 1.5rem", transition: "border-color 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = CATEGORY_COLORS[category])}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem" }}>{name}</span>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.58rem",
                  color: CATEGORY_COLORS[category], border: `1px solid ${CATEGORY_COLORS[category]}`,
                  padding: "0.15rem 0.5rem", textTransform: "uppercase", letterSpacing: "0.08em",
                }}>{category}</span>
              </div>
              <div style={{ height: 3, background: "var(--border)" }}>
                <div style={{ height: "100%", width: `${level}%`, background: CATEGORY_COLORS[category] }} />
              </div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted)", marginTop: "0.4rem", textAlign: "right" }}>{level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
ENDOFFILE

cat > /home/claude/FUTURE_FS_01/src/components/Projects.jsx << 'ENDOFFILE'
const PROJECTS = [
  {
    num: "01", title: "Dockerized Flask App",
    desc: "Containerized a Python Flask REST API using multi-stage Docker builds. Deployed with Gunicorn, Nginx reverse proxy, PostgreSQL, and Redis — all orchestrated via Docker Compose.",
    tags: ["Docker", "Flask", "Nginx", "PostgreSQL", "Redis"], link: "#",
  },
  {
    num: "02", title: "DevOps Starter Kit",
    desc: "Open-source scaffold with production-ready Dockerfiles for Flask and Node.js, GitHub Actions CI/CD pipelines with automated testing, and a full local dev stack via Docker Compose.",
    tags: ["GitHub Actions", "Docker", "CI/CD", "Node.js", "Python"], link: "#",
  },
  {
    num: "03", title: "Hospital Management System",
    desc: "Microservices-based hospital management platform deployed on Kubernetes. Features service mesh, health probes, horizontal pod autoscaling, and persistent volume claims.",
    tags: ["Kubernetes", "Microservices", "Docker", "AWS"], link: "#",
  },
  {
    num: "04", title: "WordPress News Portal",
    desc: "High-performance news portal built on WordPress, hosted on AWS EC2. Configured with Nginx, SSL via Certbot, and automated backups to S3.",
    tags: ["WordPress", "AWS EC2", "Nginx", "S3", "Linux"], link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-fade" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p className="tag" style={{ marginBottom: "1rem" }}>03 / Projects</p>
        <div className="accent-line" />
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", marginBottom: "3rem",
        }}>Selected Work</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
          {PROJECTS.map(({ num, title, desc, tags, link }) => (
            <div key={num} style={{
              background: "var(--bg)", padding: "2rem 1.5rem",
              transition: "background 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg)")}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2rem", color: "var(--border)", lineHeight: 1 }}>{num}</span>
                <a href={link} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted)", textDecoration: "none" }}>View →</a>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1rem, 3vw, 1.3rem)", marginBottom: "0.75rem" }}>{title}</h3>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem" }}>{desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {tags.map((t) => (
                  <span key={t} style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                    color: "var(--accent)", border: "1px solid rgba(0,255,135,0.2)",
                    padding: "0.2rem 0.6rem", letterSpacing: "0.08em",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
ENDOFFILE

cat > /home/claude/FUTURE_FS_01/src/components/Certifications.jsx << 'ENDOFFILE'
const CERTS = [
  { title: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services", year: "2024", icon: "☁" },
  { title: "Docker Fundamentals", issuer: "Docker Inc.", year: "2024", icon: "🐳" },
  { title: "Linux Basics for Hackers", issuer: "Linux Foundation", year: "2023", icon: "🐧" },
];

function Certifications() {
  return (
    <section id="certifications" className="section-fade" style={{
      padding: "5rem 1.5rem",
      background: "var(--surface)",
      borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p className="tag" style={{ marginBottom: "1rem" }}>04 / Certifications</p>
        <div className="accent-line" />
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", marginBottom: "3rem",
        }}>Credentials</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {CERTS.map(({ title, issuer, year, icon }) => (
            <div key={title} style={{
              background: "var(--bg)", border: "1px solid var(--border)",
              padding: "2rem", transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>{title}</h3>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)" }}>{issuer}</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--accent)", marginTop: "1rem" }}>{year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
ENDOFFILE

cat > /home/claude/FUTURE_FS_01/src/components/Contact.jsx << 'ENDOFFILE'
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mojbzalv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", background: "var(--surface)",
    border: "1px solid var(--border)", color: "var(--text)",
    fontFamily: "var(--font-mono)", fontSize: "0.82rem",
    padding: "0.9rem 1rem", outline: "none", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="section-fade" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <p className="tag" style={{ marginBottom: "1rem" }}>05 / Contact</p>
        <div className="accent-line" />
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em", marginBottom: "0.75rem",
        }}>Let's Connect</h2>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--muted)", marginBottom: "3rem", lineHeight: 1.8 }}>
          Open to internships, collaborations, and full-time roles in Cloud & DevOps.
        </p>

        {sent ? (
          <div style={{ border: "1px solid var(--accent)", padding: "2rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--accent)" }}>
            ✔ Message received. I'll get back to you soon.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input name="name" placeholder="Name" value={form.name} onChange={handle} style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handle} style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
            <textarea name="message" placeholder="Message" value={form.message} onChange={handle} rows={5}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
            <button onClick={submit} disabled={loading} style={{
              fontFamily: "var(--font-mono)", fontSize: "0.75rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--bg)", background: loading ? "var(--muted)" : "var(--accent)",
              padding: "0.9rem 2rem", border: "none", cursor: loading ? "wait" : "pointer",
              transition: "opacity 0.2s", alignSelf: "flex-start",
            }}>{loading ? "Sending..." : "Send Message"}</button>
          </div>
        )}

        <div style={{ marginTop: "4rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {[
            { label: "GitHub", href: "https://github.com/yourusername" },
            { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
            { label: "Email", href: "mailto:roshan@example.com" },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{
              fontFamily: "var(--font-mono)", fontSize: "0.72rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--muted)", textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
            >{label} →</a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
ENDOFFILE

cat > /home/claude/FUTURE_FS_01/src/components/Footer.jsx << 'ENDOFFILE'
function Footer() {
  return (
    <footer style={{
      background: "var(--surface)", borderTop: "1px solid var(--border)",
      padding: "2rem 1.5rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: "1rem",
    }}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem" }}>
        RK<span style={{ color: "var(--accent)" }}>.</span>
      </span>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted)" }}>
        © 2026 Roshan Kumar — Built with React + Vite
      </p>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted)" }}>
        <span style={{ color: "var(--accent)" }}>▲</span> Deployed on Vercel
      </p>
    </footer>
  );
}

export default Footer;
ENDOFFILE