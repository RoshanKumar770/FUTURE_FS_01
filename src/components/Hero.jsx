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
