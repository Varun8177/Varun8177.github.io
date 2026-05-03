import * as Scroll from "react-scroll";
import { useDarkMode } from "../context/DarkModeContext";

const highlights = [
  {
    label: "Performance",
    detail: "High-perf fintech dashboards — optimized renders, lazy loading, strategic code splitting.",
  },
  {
    label: "Code Quality",
    detail: "SonarQube A grade: 5% duplicate code, 0 reliability issues, 0 security hotspots.",
  },
  {
    label: "Architecture",
    detail: "Reusable component libraries deployed across complex multi-module production platforms.",
  },
  {
    label: "Delivery",
    detail: "Agile/Scrum cadence — shipped features every sprint across 3 companies.",
  },
];

const domains = ["Fintech", "Government", "Real Estate", "eSign Platforms", "Geo & Maps", "Analytics"];

const stats = [
  { number: "2.5+", label: "Years Exp" },
  { number: "3",    label: "Companies" },
  { number: "3",    label: "Live Apps" },
  { number: "A",    label: "SonarQube" },
];

const About = () => {
  const { isDark } = useDarkMode();

  const accent      = isDark ? "#f87171"                    : "#2563eb";
  const divider     = isDark ? "rgba(255,255,255,0.07)"     : "rgba(0,0,0,0.07)";
  const panelBg     = isDark ? "rgba(255,255,255,0.025)"    : "rgba(0,0,0,0.02)";
  const panelBorder = isDark ? "rgba(255,255,255,0.07)"     : "rgba(0,0,0,0.08)";
  const tagBg       = isDark ? "rgba(255,255,255,0.04)"     : "rgba(0,0,0,0.04)";
  const tagBorder   = isDark ? "rgba(255,255,255,0.09)"     : "rgba(0,0,0,0.09)";

  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)",
        overflow: "hidden",
      }}
    >
      {/* ── Ghost background word ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(7rem, 22vw, 18rem)",
          letterSpacing: "-0.05em",
          opacity: isDark ? 0.022 : 0.032,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}
      >
        ABOUT
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* ── Section label ── */}
        <div
          data-aos="fade-up"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: "2.75rem",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            opacity: 0.45,
          }}
        >
          <span style={{ color: accent, opacity: 1 }}>// 01</span>
          <span>·</span>
          <span>About</span>
          <div style={{ height: 1, background: divider, width: 64, flexShrink: 0 }} />
        </div>

        {/* ── Main grid ── */}
        <div className="about-grid">

          {/* ══ LEFT COLUMN ══ */}
          <div>

            {/* Headline */}
            <div data-aos="fade-up" data-aos-delay="60">
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "1.5rem",
                }}
              >
                Building systems<br />
                <span style={{ color: accent }}>that actually ship.</span>
              </h2>
            </div>

            {/* Bio */}
            <div data-aos="fade-up" data-aos-delay="120">
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(0.875rem, 1.4vw, 1rem)",
                  lineHeight: 1.9,
                  opacity: 0.68,
                  marginBottom: "2.5rem",
                  maxWidth: 560,
                }}
              >
                Frontend Software Engineer with 2.5+ years shipping production-grade
                applications across{" "}
                <strong style={{ opacity: 1, fontWeight: 600 }}>fintech</strong>,{" "}
                <strong style={{ opacity: 1, fontWeight: 600 }}>government</strong>, and{" "}
                <strong style={{ opacity: 1, fontWeight: 600 }}>real estate</strong> — with
                React.js and Next.js as my tools of choice. I care about code that's
                maintainable, performant, and a pleasure to work with.
              </p>
            </div>

            {/* Stats — mobile only (2×2 grid) */}
            <div
              className="mobile-stats"
              data-aos="fade-up"
              data-aos-delay="150"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1,
                background: panelBorder,
                border: `1px solid ${panelBorder}`,
                borderRadius: 14,
                overflow: "hidden",
                marginBottom: "2.5rem",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "22px 24px",
                    background: isDark ? "#08080C" : "#F7F6F1",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(2rem, 6vw, 2.5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: accent,
                      marginBottom: 5,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      opacity: 0.4,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights table */}
            <div data-aos="fade-up" data-aos-delay="180" style={{ marginBottom: "2.5rem" }}>
              {highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 20,
                    padding: "15px 0",
                    borderTop: `1px solid ${divider}`,
                    ...(i === highlights.length - 1 ? { borderBottom: `1px solid ${divider}` } : {}),
                  }}
                >
                  {/* Label */}
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      fontWeight: 500,
                      color: accent,
                      letterSpacing: "0.09em",
                      textTransform: "uppercase",
                      minWidth: 96,
                      paddingTop: 2,
                      flexShrink: 0,
                    }}
                  >
                    {h.label}
                  </span>
                  {/* Detail */}
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      lineHeight: 1.65,
                      opacity: 0.6,
                    }}
                  >
                    {h.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Domain tags */}
            <div
              data-aos="fade-up"
              data-aos-delay="240"
              style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: "2.75rem" }}
            >
              {domains.map((d, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10.5,
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    padding: "5px 13px",
                    borderRadius: 100,
                    border: `1px solid ${tagBorder}`,
                    background: tagBg,
                    opacity: 0.7,
                  }}
                >
                  {d}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div data-aos="fade-up" data-aos-delay="300">
              <Scroll.Link to="contact" spy smooth offset={-80} duration={500}>
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "11px 28px",
                    borderRadius: 10,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    background: accent,
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.02em",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    boxShadow: `0 4px 18px ${accent}45`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 8px 28px ${accent}55`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = `0 4px 18px ${accent}45`;
                  }}
                >
                  Let's talk
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </Scroll.Link>
            </div>
          </div>

          {/* ══ RIGHT COLUMN — sticky stats panel (desktop only) ══ */}
          <div
            className="desktop-stats"
            data-aos="fade-left"
            data-aos-delay="100"
            style={{ position: "sticky", top: 90, alignSelf: "start" }}
          >
            <div
              style={{
                border: `1px solid ${panelBorder}`,
                borderRadius: 16,
                background: panelBg,
                overflow: "hidden",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Panel header */}
              <div
                style={{
                  padding: "14px 24px",
                  borderBottom: `1px solid ${divider}`,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  opacity: 0.35,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#22c55e",
                  }}
                />
                metrics
              </div>

              {/* Stat rows */}
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "26px 28px",
                    borderBottom: i < stats.length - 1 ? `1px solid ${divider}` : "none",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Accent bar */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 3,
                      height: "50%",
                      background: accent,
                      borderRadius: "0 2px 2px 0",
                      opacity: 0.6,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(2.4rem, 4vw, 3rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: accent,
                      marginBottom: 6,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      opacity: 0.38,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Responsive layout ── */}
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        .mobile-stats  { display: grid; }
        .desktop-stats { display: none; }

        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr 230px;
            gap: 4rem;
          }
          .mobile-stats  { display: none !important; }
          .desktop-stats { display: block; }
        }
      `}</style>
    </section>
  );
};

export default About;
