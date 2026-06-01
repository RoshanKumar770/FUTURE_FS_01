const CERTS = [
  { title: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services", year: "2024", icon: "☁" },
  { title: "Docker Fundamentals", issuer: "Docker Inc.", year: "2024", icon: "🐳" },
  { title: "Linux Basics for Hackers", issuer: "Linux Foundation", year: "2023", icon: "🐧" },
];

function Certifications() {
  return (
    <section id="certifications" className="section-fade" style={{
      padding: "7rem 2.5rem",
      background: "var(--surface)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p className="tag" style={{ marginBottom: "1rem" }}>04 / Certifications</p>
        <div className="accent-line" />
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em",
          marginBottom: "3rem",
        }}>
          Credentials
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {CERTS.map(({ title, issuer, year, icon }) => (
            <div key={title} style={{
              background: "var(--bg)", border: "1px solid var(--border)",
              padding: "2rem", transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
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