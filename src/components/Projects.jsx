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