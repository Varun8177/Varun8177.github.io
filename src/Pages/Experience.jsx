import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const experienceData = [
  {
    index: "01",
    role: "Frontend Developer (AI Systems)",
    company: "Hapticware",
    location: "Pune",
    start: "Apr 2026",
    end: "Present",
    current: true,
    description: "A fintech AI startup building intelligent document workflow automation and eSignature solutions.",
    works: [
      "Contributing to IndiSign — an intelligent eSignature platform — using React.js and Next.js.",
      "Building seamless, high-performance UI experiences for fintech users.",
      "Focused on production-ready frontend delivery for document workflow automation.",
    ],
  },
  {
    index: "02",
    role: "Frontend Software Engineer",
    company: "Quara AI Tech",
    location: "Remote",
    start: "Sep 2025",
    end: "Dec 2025",
    current: false,
    description: "AI-driven real estate and property management platform company.",
    works: [
      "Developed Wasalt real estate platform using Next.js with map-based property discovery.",
      "Built analytics dashboards visualizing 10K+ property listings using Highcharts.",
      "Implemented multilingual support (English & Arabic RTL) for international users.",
      "Collaborated with backend engineers to integrate REST APIs for property data and search.",
    ],
  },
  {
    index: "03",
    role: "Frontend Software Engineer",
    company: "MoneyMul Technologies",
    location: "Noida",
    start: "Apr 2024",
    end: "Sep 2025",
    current: false,
    description: "A fintech company focused on digital payments and financial workflow solutions.",
    works: [
      "Built and maintained a reusable React component library used across fintech modules.",
      "Developed secure role-based dashboards for financial operations, billing, and payment workflows.",
      "Implemented Aadhaar-based eSign and virtual stamping workflows for eSignPro by Protean.",
      "Contributed to PAN 2.0 government platform UI — wallet, invoice systems, document verification.",
      "Reduced duplicate code to 5% and achieved SonarQube A grade through code quality improvements.",
      "Integrated real-time notifications using Socket.IO to enhance platform interactivity.",
    ],
  },
  {
    index: "04",
    role: "SDE Intern",
    company: "Masai School",
    location: "Bengaluru",
    start: "Sep 2023",
    end: "Mar 2024",
    current: false,
    description: "A reputed coding school providing full-stack web development education.",
    works: [
      "Contributed to building an alumni portal (masaialumni.com) for student engagement.",
      "Developed responsive UI components using modern JavaScript and frontend frameworks.",
      "Integrated real-time notifications using Socket.IO.",
      "Worked in Agile environment and followed Git-based workflows.",
    ],
  },
];

function JobRow({ job, isOpen, onToggle, isDark, accent, isLast }) {
  const border  = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const subtext = isDark ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.38)";

  return (
    <div style={{ borderBottom: isLast ? "none" : `1px solid ${border}` }}>

      {/* ── Trigger row ── */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="exp-row-btn"
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "44px 1fr auto",
          alignItems: "center",
          columnGap: "clamp(16px, 2.5vw, 36px)",
          padding: "clamp(20px, 3vw, 28px) 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "inherit",
          textAlign: "left",
        }}
      >
        {/* Index */}
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, fontWeight: 500,
          letterSpacing: "0.1em",
          color: isOpen ? accent : subtext,
          transition: "color 0.2s",
          paddingTop: 3,
        }}>
          {job.index}
        </span>

        {/* Company + role stack */}
        <span style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.15rem, 2.8vw, 1.75rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: isOpen ? accent : "inherit",
              transition: "color 0.25s",
            }}>
              {job.company}
            </span>

            {job.current && (
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9, fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#22c55e",
                padding: "3px 9px", borderRadius: 100,
                border: "1px solid rgba(34,197,94,0.3)",
                background: "rgba(34,197,94,0.07)",
                flexShrink: 0,
              }}>
                <span style={{
                  width: 5, height: 5, borderRadius: "50%",
                  background: "#22c55e", display: "inline-block",
                  animation: "live-pulse 2s ease-in-out infinite",
                }} />
                Live
              </span>
            )}
          </span>

          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(10px, 1.15vw, 12px)",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: subtext,
          }}>
            {job.role}
          </span>
        </span>

        {/* Right: date + toggle */}
        <span style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 2vw, 28px)", flexShrink: 0 }}>
          <span className="exp-date" style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(9px, 1vw, 11px)",
            letterSpacing: "0.07em",
            color: subtext,
            whiteSpace: "nowrap",
          }}>
            {job.start} – {job.end}
          </span>

          <span style={{
            width: 28, height: 28,
            borderRadius: "50%",
            border: `1px solid ${isOpen ? accent : border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            color: isOpen ? accent : subtext,
            fontSize: 16, lineHeight: 1,
            fontWeight: 300,
            transition: "border-color 0.25s, color 0.25s, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}>
            +
          </span>
        </span>
      </button>

      {/* ── Expanded panel ── */}
      <div style={{
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows 0.45s cubic-bezier(0.22,1,0.36,1)",
      }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "44px 1fr",
            columnGap: "clamp(16px, 2.5vw, 36px)",
            paddingBottom: "clamp(24px, 4vw, 40px)",
          }}>
            {/* Left: accent vertical line */}
            <div style={{ display: "flex", justifyContent: "center", paddingTop: 4 }}>
              <div style={{
                width: 1.5,
                background: `linear-gradient(to bottom, ${accent}, ${accent}00)`,
                borderRadius: 2,
                opacity: 0.5,
              }} />
            </div>

            {/* Right: content */}
            <div>
              {/* meta row */}
              <div style={{
                display: "flex", alignItems: "center", gap: 20,
                flexWrap: "wrap",
                marginBottom: 20,
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10.5, letterSpacing: "0.06em",
                  color: subtext,
                }}>
                  📍 {job.location}
                </span>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13, lineHeight: 1.65,
                  color: subtext,
                  fontStyle: "italic",
                }}>
                  {job.description}
                </span>
              </div>

              {/* work items */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {job.works.map((item, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{
                      color: accent, fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12, flexShrink: 0, marginTop: "0.22em", opacity: 0.7,
                    }}>→</span>
                    <span style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "clamp(13px, 1.3vw, 13.5px)",
                      lineHeight: 1.75,
                      opacity: 0.72,
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Experience = () => {
  const { isDark } = useDarkMode();
  const accent  = isDark ? "#f87171" : "#2563eb";
  const divider = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  const [openSet, setOpenSet] = useState(new Set([0]));

  const toggle = (i) => {
    setOpenSet(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section
      id="experience"
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
        WORK
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
          <span style={{ color: accent, opacity: 1 }}>// 03</span>
          <span>·</span>
          <span>Experience</span>
          <div style={{ height: 1, background: divider, width: 64, flexShrink: 0 }} />
        </div>

        {/* headline */}
        <div data-aos="fade-up" data-aos-delay="50" style={{ marginBottom: "3.5rem" }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            lineHeight: 1.1, letterSpacing: "-0.03em",
          }}>
            Where I've{" "}
            <span style={{ color: accent }}>shipped.</span>
          </h2>
        </div>

        {/* job list */}
        <div data-aos="fade-up" data-aos-delay="80"
          style={{ borderTop: `1px solid ${divider}` }}
        >
          {experienceData.map((job, i) => (
            <JobRow
              key={i}
              job={job}
              isOpen={openSet.has(i)}
              onToggle={() => toggle(i)}
              isDark={isDark}
              accent={accent}
              isLast={i === experienceData.length - 1}
            />
          ))}
        </div>

        {/* footer rule */}
        <div data-aos="fade-up" style={{
          marginTop: "3rem",
          display: "flex", alignItems: "center", gap: 16,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10.5, letterSpacing: "0.08em",
          opacity: 0.28, textTransform: "uppercase",
        }}>
          <div style={{ height: 1, background: divider, width: 40, flexShrink: 0 }} />
          2.5+ years · 4 companies · 3 domains
          <div style={{ height: 1, background: divider, flex: 1 }} />
        </div>
      </div>

      <style>{`
        .exp-row-btn:hover .exp-date { opacity: 1; }
        @media (max-width: 480px) {
          .exp-date { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
