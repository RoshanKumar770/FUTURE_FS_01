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