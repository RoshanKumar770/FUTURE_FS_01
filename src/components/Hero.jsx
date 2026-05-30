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
        setDisplayed(role.slice(0, i + 1));
        i++;
        if (i === role.length) { clearInterval(interval); setTimeout(() => setTyping(false), 1500); }
      } else {
        setDisplayed(role.slice(0, i - 1));
        i--;
        if (i === 0) { clearInterval(interval); setRoleIdx((prev) => (prev + 1) % ROLES.length); setTyping(true); }
      }
    }, typing ? 70 : 40);
    return () => clearInterval(interval);
  }, [roleIdx, typing]);

  return (
    <section
      className="grid-bg noise"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "8rem 2.5rem 4rem", position: "relative", overflow: "hidden",
      }}
    >
      {/* Decorative orb */}
      <div style={{
        position: "absolute", top: "20%", right: "10%",
        width: 320, height: 320, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,255,135,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", left: "5%",
        width: 200, height: 200, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 860, width: "100%" }}>
        {/* Tag */}
        <p className="tag animate-fade-up-1" style={{ marginBottom: "1.5rem" }}>
          &gt; Available for opportunities
        </p>

        {/* Name */}
        <h1
          className="glitch-text animate-fade-up-2"
          data-text="Roshan Kumar"
          style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 1,
            letterSpacing: "-0.03em", color: "var(--text)",
            marginBottom: "1.5rem",
          }}
        >
          Roshan Kumar
        </h1>

        {/* Typewriter role */}
        <div className="animate-fade-up-3" style={{ marginBottom: "2rem", height: "2.5rem" }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "var(--accent)",
          }}>
            {displayed}
            <span className="animate-blink" style={{ color: "var(--accent)" }}>█</span>
          </span>
        </div>

        {/* Description */}
        <p className="animate-fade-up-3" style={{
          fontFamily: "var(--font-mono)", fontSize: "0.9rem",
          color: "var(--muted)", maxWidth: 520, lineHeight: 1.8, marginBottom: "3rem",
        }}>
          Building scalable infrastructure with AWS · Docker · Kubernetes · Linux · GitHub Actions
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              fontFamily: "var(--font-mono)", fontSize: "0.75rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--bg)", background: "var(--accent)",
              padding: "0.9rem 2rem", textDecoration: "none",
              transition: "all 0.2s", display: "inline-block",
            }}
            onMouseEnter={(e) => { e.target.style.background = "var(--text)"; }}
            onMouseLeave={(e) => { e.target.style.background = "var(--accent)"; }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-mono)", fontSize: "0.75rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--text)", background: "transparent",
              border: "1px solid var(--border)",
              padding: "0.9rem 2rem", textDecoration: "none",
              transition: "all 0.2s", display: "inline-block",
            }}
            onMouseEnter={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.color = "var(--text)"; }}
          >
            Get in Touch
          </a>
        </div>

        {/* Terminal snippet */}
        <div className="animate-fade-up-4" style={{
          marginTop: "4rem", background: "var(--surface)",
          border: "1px solid var(--border)", padding: "1.2rem 1.5rem",
          maxWidth: 460, fontFamily: "var(--font-mono)", fontSize: "0.78rem",
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
