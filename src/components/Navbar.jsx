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
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1f1f1f" : "none",
        transition: "all 0.3s ease",
        padding: "1rem 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}
    >
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
        RK<span style={{ color: "var(--accent)" }}>.</span>
      </span>

      {/* Desktop */}
      <div style={{ display: "flex", gap: "2rem" }} className="hidden-mobile">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontFamily: "var(--font-mono)", fontSize: "0.72rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--muted)", textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
          >
            {l}
          </a>
        ))}
      </div>

      <a
        href="/resume.pdf"
        download
        style={{
          fontFamily: "var(--font-mono)", fontSize: "0.72rem",
          letterSpacing: "0.1em", textTransform: "uppercase",
          color: "var(--bg)", background: "var(--accent)",
          padding: "0.5rem 1.2rem", textDecoration: "none",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;
