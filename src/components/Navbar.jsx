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