import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const projectData = [
  {
    index: "01",
    title: "eSignPro by Protean",
    subtitle: "Aadhaar-verified eSignature & eStamping platform",
    status: "Live in Production",
    live: true,
    company: "MoneyMul Technologies · for Protean eGov",
    description:
      "Production-grade platform enabling secure Aadhaar-verified eSignatures and virtual stamping workflows for government-compliant document processing at scale.",
    highlights: [
      "Aadhaar-based eSign and virtual stamping workflows with end-to-end document lifecycle management.",
      "Role-based authentication and route protection across complex multi-module flows.",
      "Component-based architecture ensuring zero code duplication across reusable document components.",
    ],
    tech: ["React.js", "TypeScript", "Redux", "Socket.IO"],
    domain: "Fintech · Government",
    liveLink: null,
  },
  {
    index: "02",
    title: "PAN 2.0",
    subtitle: "Government platform UI — wallet, billing & verification",
    status: "Delivered",
    live: false,
    company: "MoneyMul Technologies · for Government of India",
    description:
      "Government platform UI modules for PAN 2.0 — wallet management, invoice systems, approval flows, and document verification for a nationwide rollout.",
    highlights: [
      "Role-based dashboards, approval flows, and wallet/billing systems with full auth and route protection.",
      "SonarQube A grade: 5% duplicate code, 0% reliability issues, 0 security hotspots.",
      "Delivered features in Agile sprints alongside backend and QA teams.",
    ],
    tech: ["React.js", "TypeScript", "Redux", "ESLint", "SonarQube"],
    domain: "Government · Compliance",
    liveLink: null,
  },
  {
    index: "03",
    title: "Wasalt",
    subtitle: "AI-driven real estate platform with map-based discovery",
    status: "Live in Production",
    live: true,
    company: "Quara AI Tech",
    description:
      "AI-driven real estate and property management platform with map-based property discovery, 10K+ listings analytics, and full multilingual RTL support.",
    highlights: [
      "Map-driven property discovery with real-time geolocation and advanced filtering across 10K+ listings.",
      "Full multilingual support (English & Arabic RTL) for international markets.",
      "Analytics dashboards with Highcharts visualizing property market insights for agents.",
    ],
    tech: ["Next.js", "TypeScript", "Mapbox GL", "Highcharts", "Tailwind CSS"],
    domain: "Real Estate · Analytics",
    liveLink: null,
  },
];

function ProjectCard({ project, index, isDark, accent }) {
  const [hovered, setHovered] = useState(false);

  const borderColor = hovered
    ? isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.14)"
    : isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  const cardBg = hovered
    ? isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.018)"
    : "transparent";

  const divider = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const techBg   = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)";
  const techBorder = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 80}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 18,
        border: `1px solid ${borderColor}`,
        background: cardBg,
        padding: "32px 36px",
        transition: "background 0.25s ease, border-color 0.25s ease",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* large ghost index */}
      <div aria-hidden style={{
        position: "absolute",
        right: 28,
        top: 20,
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: "clamp(5rem, 10vw, 7.5rem)",
        lineHeight: 1,
        letterSpacing: "-0.05em",
        opacity: isDark ? 0.03 : 0.04,
        pointerEvents: "none",
        userSelect: "none",
        color: accent,
      }}>
        {project.index}
      </div>

      {/* top row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "8px 16px", marginBottom: 20 }}>
        <div>
          {/* index + domain */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10, marginBottom: 10,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, fontWeight: 500, letterSpacing: "0.1em",
            textTransform: "uppercase", opacity: 0.38,
          }}>
            <span style={{ color: accent, opacity: 1 }}>{project.index}</span>
            <span>·</span>
            <span>{project.domain}</span>
          </div>

          {/* title */}
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 6,
          }}>
            {project.title}
          </h3>

          {/* subtitle */}
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11.5, fontWeight: 500,
            letterSpacing: "0.03em",
            color: accent,
            opacity: 0.75,
          }}>
            {project.subtitle}
          </p>
        </div>

        {/* status badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9.5, fontWeight: 500,
          letterSpacing: "0.1em", textTransform: "uppercase",
          color: project.live ? "#22c55e" : (isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.45)"),
          padding: "4px 12px",
          borderRadius: 100,
          border: `1px solid ${project.live ? "rgba(34,197,94,0.3)" : (isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)")}`,
          background: project.live ? "rgba(34,197,94,0.07)" : "transparent",
          flexShrink: 0,
          marginTop: 4,
        }}>
          {project.live && (
            <span style={{
              width: 5, height: 5, borderRadius: "50%",
              background: "#22c55e", display: "inline-block", flexShrink: 0,
              animation: "live-pulse 2s ease-in-out infinite",
            }} />
          )}
          {project.status}
        </div>
      </div>

      {/* company */}
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10.5, letterSpacing: "0.06em",
        opacity: 0.3, marginBottom: 16,
        textTransform: "uppercase",
      }}>
        {project.company}
      </p>

      {/* divider */}
      <div style={{ height: 1, background: divider, marginBottom: 18 }} />

      {/* description */}
      <p style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: 13.5, lineHeight: 1.75,
        opacity: 0.65, marginBottom: 22,
      }}>
        {project.description}
      </p>

      {/* highlights */}
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 26px", display: "flex", flexDirection: "column", gap: 9 }}>
        {project.highlights.map((h, j) => (
          <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, color: accent, opacity: 0.5, flexShrink: 0, marginTop: "0.15em",
            }}>→</span>
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 13, lineHeight: 1.65, opacity: 0.68,
            }}>{h}</span>
          </li>
        ))}
      </ul>

      {/* bottom row: tech + link */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.map((t, ti) => (
            <span key={ti} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, fontWeight: 500, letterSpacing: "0.06em",
              padding: "4px 12px", borderRadius: 100,
              border: `1px solid ${techBorder}`,
              background: techBg, opacity: 0.85,
            }}>
              {t}
            </span>
          ))}
        </div>

        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9.5, opacity: 0.25, letterSpacing: "0.08em",
          textTransform: "uppercase", fontStyle: "italic",
        }}>
          Confidential
        </span>
      </div>
    </div>
  );
}

const Projects = () => {
  const { isDark } = useDarkMode();
  const accent  = isDark ? "#f87171" : "#2563eb";
  const divider = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <section
      id="projects"
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
        BUILD
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
          <span style={{ color: accent, opacity: 1 }}>// 04</span>
          <span>·</span>
          <span>Projects</span>
          <div style={{ height: 1, background: divider, width: 64, flexShrink: 0 }} />
        </div>

        {/* headline */}
        <div data-aos="fade-up" data-aos-delay="50" style={{ marginBottom: "3.5rem" }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            lineHeight: 1.1, letterSpacing: "-0.03em",
          }}>
            Things I've{" "}
            <span style={{ color: accent }}>built.</span>
          </h2>
        </div>

        {/* cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {projectData.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              isDark={isDark}
              accent={accent}
            />
          ))}
        </div>

        {/* footnote */}
        <div data-aos="fade-up" style={{
          marginTop: "3rem",
          textAlign: "center",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, letterSpacing: "0.06em",
          opacity: 0.3,
        }}>
          All listed projects are production deployments under NDA. Source code is confidential.
        </div>
      </div>
    </section>
  );
};

export default Projects;
