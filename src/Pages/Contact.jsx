import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useDarkMode } from "../context/DarkModeContext";
import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";

const contactLinks = [
  {
    icon: TfiEmail,
    label: "Email",
    value: "varunergurala9999@gmail.com",
    href: "mailto:varunergurala9999@gmail.com",
  },
  {
    icon: RxGithubLogo,
    label: "GitHub",
    value: "github.com/Varun8177",
    href: "https://github.com/Varun8177",
    external: true,
  },
  {
    icon: BsLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/varun8177",
    href: "https://www.linkedin.com/in/varun8177",
    external: true,
  },
  {
    icon: FiPhoneCall,
    label: "Phone",
    value: "+91 8177 836 651",
    href: "tel:+918177836651",
  },
];

const Contact = () => {
  const { isDark } = useDarkMode();
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast,   setToast]   = useState(null);
  const [focused, setFocused] = useState(null);

  const accent      = isDark ? "#f87171" : "#2563eb";
  const divider     = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const panelBg     = isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.02)";
  const panelBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const inputBg     = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";

  const showToast = (msg, success) => {
    setToast({ msg, success });
    setTimeout(() => setToast(null), 4500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: name, to_name: "Varun Ergurala", from_email: email, to_email: "varunergurala9999@gmail.com", message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      showToast("Message sent — I'll reply soon.", true);
      setName(""); setEmail(""); setMessage("");
    } catch {
      showToast("Something went wrong. Please try again.", false);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "13px 16px",
    borderRadius: 10,
    border: `1px solid ${focused === field ? accent : panelBorder}`,
    background: focused === field
      ? (isDark ? "rgba(96,165,250,0.06)" : "rgba(37,99,235,0.04)")
      : inputBg,
    fontFamily: "'Poppins', sans-serif",
    fontSize: 13.5,
    color: "inherit",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
    resize: "none",
    boxSizing: "border-box",
    boxShadow: focused === field ? `0 0 0 3px ${accent}18` : "none",
  });

  return (
    <>
      {/* toast */}
      {toast && (
        <div style={{
          position: "fixed", top: 24, right: 24, zIndex: 999,
          display: "flex", alignItems: "center", gap: 10,
          padding: "12px 20px", borderRadius: 12,
          fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 500,
          background: toast.success ? "#22c55e" : "#ef4444",
          color: "#fff",
          boxShadow: toast.success ? "0 8px 28px rgba(34,197,94,0.35)" : "0 8px 28px rgba(239,68,68,0.35)",
          animation: "toast-in 0.3s cubic-bezier(0.22,1,0.36,1) forwards",
        }}>
          <span style={{ fontSize: 16 }}>{toast.success ? "✓" : "✕"}</span>
          {toast.msg}
        </div>
      )}

      <section
        id="contact"
        style={{
          position: "relative",
          padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)",
          overflow: "hidden",
        }}
      >
        {/* ghost background */}
        <div aria-hidden style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: "clamp(5rem, 18vw, 14rem)", letterSpacing: "-0.05em",
          opacity: isDark ? 0.02 : 0.028,
          pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap", lineHeight: 1,
        }}>
          TALK
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

          {/* section label */}
          <div data-aos="fade-up" style={{
            display: "flex", alignItems: "center", gap: 10,
            marginBottom: "2.75rem",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
            textTransform: "uppercase", opacity: 0.45,
          }}>
            <span style={{ color: accent, opacity: 1 }}>// 06</span>
            <span>·</span>
            <span>Contact</span>
            <div style={{ height: 1, background: divider, width: 64, flexShrink: 0 }} />
          </div>

          {/* headline */}
          <div data-aos="fade-up" data-aos-delay="50" style={{ marginBottom: "3.5rem" }}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              lineHeight: 1.1, letterSpacing: "-0.03em",
            }}>
              Let's build something{" "}
              <span style={{ color: accent }}>together.</span>
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.875rem, 1.4vw, 1rem)",
              lineHeight: 1.8, opacity: 0.55,
              marginTop: "1rem", maxWidth: 520,
            }}>
              Open to full-time roles, freelance projects, or just a good conversation about frontend engineering.
            </p>
          </div>

          {/* grid */}
          <div className="contact-grid">

            {/* form */}
            <div
              data-aos="fade-up"
              data-aos-delay="80"
              style={{
                borderRadius: 18,
                border: `1px solid ${panelBorder}`,
                background: panelBg,
                padding: "clamp(24px, 4vw, 36px)",
              }}
            >
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10, fontWeight: 500, letterSpacing: "0.12em",
                textTransform: "uppercase", opacity: 0.35, marginBottom: 24,
              }}>
                Send a message
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{
                    display: "block", marginBottom: 7,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10, fontWeight: 500,
                    letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.45,
                  }}>Name</label>
                  <input
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                  />
                </div>

                <div>
                  <label style={{
                    display: "block", marginBottom: 7,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10, fontWeight: 500,
                    letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.45,
                  }}>Email</label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("email")}
                  />
                </div>

                <div>
                  <label style={{
                    display: "block", marginBottom: 7,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10, fontWeight: 500,
                    letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.45,
                  }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("message")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    alignSelf: "flex-start",
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "12px 28px", borderRadius: 10,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13, fontWeight: 600, letterSpacing: "0.02em",
                    background: loading ? (isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)") : accent,
                    color: loading ? "inherit" : "#fff",
                    border: "none", cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.6 : 1,
                    transition: "transform 0.2s, box-shadow 0.2s, opacity 0.2s",
                    boxShadow: loading ? "none" : `0 4px 18px ${accent}45`,
                  }}
                  onMouseEnter={e => {
                    if (!loading) {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 8px 28px ${accent}55`;
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = loading ? "none" : `0 4px 18px ${accent}45`;
                  }}
                >
                  {loading ? (
                    <>
                      <span style={{
                        width: 12, height: 12, borderRadius: "50%",
                        border: "2px solid currentColor",
                        borderTopColor: "transparent",
                        animation: "spin 0.7s linear infinite",
                        display: "inline-block",
                      }} />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M1.5 6.5h10M7 2l4.5 4.5L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* sidebar */}
            <div data-aos="fade-up" data-aos-delay="140" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              {/* availability badge */}
              <div style={{
                borderRadius: 14,
                border: `1px solid rgba(34,197,94,0.25)`,
                background: "rgba(34,197,94,0.06)",
                padding: "18px 22px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{
                    width: 7, height: 7, borderRadius: "50%",
                    background: "#22c55e", display: "inline-block",
                    animation: "live-pulse 2s ease-in-out infinite",
                  }} />
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9.5, fontWeight: 500,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "#22c55e",
                  }}>
                    Available
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13, lineHeight: 1.65,
                  opacity: 0.65,
                }}>
                  Currently open to new opportunities — full-time or contract.
                </p>
              </div>

              {/* contact links */}
              <div style={{
                borderRadius: 14,
                border: `1px solid ${panelBorder}`,
                background: panelBg,
                overflow: "hidden",
              }}>
                {contactLinks.map(({ icon: Icon, label, value, href, external }, i) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "16px 20px",
                      borderBottom: i < contactLinks.length - 1 ? `1px solid ${divider}` : "none",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.025)"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <div style={{
                      width: 34, height: 34, borderRadius: 9, flexShrink: 0,
                      background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                      border: `1px solid ${panelBorder}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={15} style={{ opacity: 0.7 }} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 9.5, fontWeight: 500,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        opacity: 0.35, marginBottom: 2,
                      }}>
                        {label}
                      </div>
                      <div style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 12.5, fontWeight: 500,
                        opacity: 0.75,
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                      }}>
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* response time note */}
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10.5, letterSpacing: "0.04em",
                opacity: 0.3, padding: "0 4px",
                lineHeight: 1.7,
              }}>
                Avg. response time: &lt; 24h · Based in India (IST, UTC+5:30)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer style={{
        borderTop: `1px solid ${divider}`,
        padding: "20px clamp(1.5rem, 6vw, 6rem)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 10,
      }}>
        <span style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: 18, letterSpacing: "-0.02em",
        }}>
          VE<span style={{ color: accent }}>.</span>
        </span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10.5, letterSpacing: "0.06em",
          opacity: 0.3, textTransform: "uppercase",
        }}>
          © {new Date().getFullYear()} Varun Ergurala · All rights reserved
        </span>
      </footer>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: start;
        }
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 300px;
            gap: 2rem;
          }
        }
        @keyframes toast-in {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Contact;
