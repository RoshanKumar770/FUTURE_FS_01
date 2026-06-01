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
