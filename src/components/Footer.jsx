function Footer() {
  return (
    <footer style={{
      background: "var(--surface)", borderTop: "1px solid var(--border)",
      padding: "2rem 2.5rem",
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
