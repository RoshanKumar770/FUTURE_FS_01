function About() {
  const stats = [
    { value: "10+", label: "Projects Built" },
    { value: "3+", label: "Certifications" },
    { value: "2+", label: "Years Learning" },
    { value: "∞", label: "Coffee Consumed" },
  ];

  return (
    <section id="about" className="section-fade" style={{ padding: "7rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}>
      <p className="tag" style={{ marginBottom: "1rem" }}>01 / About</p>
      <div className="accent-line" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        <div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em",
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
            <div key={label} style={{
              background: "var(--surface)", padding: "2rem",
              transition: "background 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#161616")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--surface)")}
            >
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.5rem", color: "var(--accent)", lineHeight: 1 }}>{value}</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted)", marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
