import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

/* ── terminal colour palette (always dark) ──────── */
const T = {
  bg:       "#0d1117",
  bgHover:  "#161b22",
  bgBar:    "#010409",
  border:   "#21262d",
  lineNum:  "#3d444d",
  punct:    "#6e7681",
  key:      "#e6edf3",
  valStr:   "#a5d6ff",
  comment:  "#484f58",
  blue:     "#60a5fa",
  violet:   "#c084fc",
  green:    "#4ade80",
  amber:    "#fbbf24",
  prompt:   "#22c55e",
};

/* ── structured JSON lines ──────────────────────── */
//  Each line: { id, tokens[], skill?, cat?, comma? }
const LINES = [
  { id: "ob",   tokens: [{ c: T.key, t: '"skills"' }, { c: T.punct, t: ': {' }] },

  /* ─ frontend ─ */
  { id: "fh", tokens: [{ c: T.blue, t: '"frontend"' }, { c: T.punct, t: ': {' }], indent: 1 },

  { id: "react", skill: "React.js",          cat: "frontend",
    tokens: [{ c: T.key, t: '"react"' },      { c: T.punct, t: ':  ' }, { c: T.valStr, t: '"^18.2.0"' }, { c: T.punct, t: ',' }, { c: T.comment, t: '   // primary ⭐' }],
    indent: 2 },
  { id: "next",  skill: "Next.js",           cat: "frontend",
    tokens: [{ c: T.key, t: '"next"' },       { c: T.punct, t: ':   ' }, { c: T.valStr, t: '"^14.0.0"' }, { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "ts",    skill: "TypeScript",        cat: "frontend",
    tokens: [{ c: T.key, t: '"typescript"' }, { c: T.punct, t: ':' }, { c: T.valStr, t: '"^5.0.0"' },  { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "tw",    skill: "Tailwind CSS",      cat: "frontend",
    tokens: [{ c: T.key, t: '"tailwindcss"' },{ c: T.punct, t: ':' }, { c: T.valStr, t: '"^4.0.0"' },  { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "mui",   skill: "Material UI",       cat: "frontend",
    tokens: [{ c: T.key, t: '"material-ui"' },{ c: T.punct, t: ':' }, { c: T.valStr, t: '"^5.0.0"' },  { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "html",  skill: "HTML5",             cat: "frontend",
    tokens: [{ c: T.key, t: '"html5"' },      { c: T.punct, t: ':      ' }, { c: T.valStr, t: '"*"' },       { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "css",   skill: "CSS3",              cat: "frontend",
    tokens: [{ c: T.key, t: '"css3"' },       { c: T.punct, t: ':       ' }, { c: T.valStr, t: '"*"' }],
    indent: 2 },

  { id: "fc", tokens: [{ c: T.punct, t: '},' }], indent: 1 },
  { id: "b1", tokens: [], blank: true },

  /* ─ libraries ─ */
  { id: "lh", tokens: [{ c: T.violet, t: '"libraries"' }, { c: T.punct, t: ': {' }], indent: 1 },

  { id: "redux",  skill: "Redux",           cat: "libs",
    tokens: [{ c: T.key, t: '"redux"' },      { c: T.punct, t: ':       ' }, { c: T.valStr, t: '"^4.2.0"' }, { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "rq",     skill: "React Query",     cat: "libs",
    tokens: [{ c: T.key, t: '"react-query"' },{ c: T.punct, t: ':' }, { c: T.valStr, t: '"^5.0.0"' }, { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "sio",    skill: "Socket.IO",       cat: "libs",
    tokens: [{ c: T.key, t: '"socket.io"' },  { c: T.punct, t: ':  ' }, { c: T.valStr, t: '"^4.7.0"' }, { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "mapbox", skill: "Mapbox GL",       cat: "libs",
    tokens: [{ c: T.key, t: '"mapbox-gl"' },  { c: T.punct, t: ':  ' }, { c: T.valStr, t: '"^3.0.0"' }, { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "gmaps",  skill: "Google Maps API", cat: "libs",
    tokens: [{ c: T.key, t: '"google-maps"' }, { c: T.punct, t: ':' }, { c: T.valStr, t: '"^3.0.0"' }, { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "hc",     skill: "Highcharts",      cat: "libs",
    tokens: [{ c: T.key, t: '"highcharts"' }, { c: T.punct, t: ': ' }, { c: T.valStr, t: '"^11.0.0"' }, { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "axios",  skill: "Axios",           cat: "libs",
    tokens: [{ c: T.key, t: '"axios"' },      { c: T.punct, t: ':       ' }, { c: T.valStr, t: '"^1.6.0"' }],
    indent: 2 },

  { id: "lc", tokens: [{ c: T.punct, t: '},' }], indent: 1 },
  { id: "b2", tokens: [], blank: true },

  /* ─ dev tools ─ */
  { id: "dh", tokens: [{ c: T.green, t: '"devTools"' }, { c: T.punct, t: ':  {' }], indent: 1 },

  { id: "git",  skill: "Git",       cat: "tools",
    tokens: [{ c: T.key, t: '"git"' },      { c: T.punct, t: ':          ' }, { c: T.valStr, t: '"*"' }, { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "eslint", skill: "ESLint",  cat: "tools",
    tokens: [{ c: T.key, t: '"eslint"' },   { c: T.punct, t: ':       ' }, { c: T.valStr, t: '"^8.0.0"' }, { c: T.punct, t: ',' }],
    indent: 2 },
  { id: "sq",   skill: "SonarQube", cat: "tools",
    tokens: [{ c: T.key, t: '"sonarqube"' },{ c: T.punct, t: ':   ' }, { c: T.valStr, t: '"^10.0.0"' }, { c: T.punct, t: ',' }, { c: T.comment, t: ' // A grade 🏆' }],
    indent: 2 },
  { id: "xo",   skill: "XO",        cat: "tools",
    tokens: [{ c: T.key, t: '"xo"' },       { c: T.punct, t: ':          ' }, { c: T.valStr, t: '"^0.58.0"' }],
    indent: 2 },

  { id: "dc", tokens: [{ c: T.punct, t: '}' }], indent: 1 },
  { id: "cb", tokens: [{ c: T.punct, t: '}' }] },
];

const INDENT = "  "; // 2 spaces per level

function TerminalLine({ line, lineNo, hovered, onHover }) {
  const isHovered = hovered === line.id;
  const isSkill   = !!line.skill;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: line.blank ? "0.9em" : "auto",
        padding: "1px 0",
        background: isHovered && isSkill ? T.bgHover : "transparent",
        borderRadius: 4,
        transition: "background 0.12s ease",
        cursor: isSkill ? "default" : "text",
        margin: "0 -12px",
        padding: "1px 12px",
        position: "relative",
      }}
      onMouseEnter={() => isSkill && onHover(line.id)}
      onMouseLeave={() => isSkill && onHover(null)}
    >
      {/* active indicator bar */}
      {isHovered && isSkill && (
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 2,
          background:
            line.cat === "frontend" ? T.blue :
            line.cat === "libs"     ? T.violet : T.green,
          borderRadius: 2,
        }} />
      )}

      {/* line number */}
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        color: isHovered && isSkill ? "#6e7681" : T.lineNum,
        minWidth: 28,
        textAlign: "right",
        marginRight: 20,
        userSelect: "none",
        flexShrink: 0,
        transition: "color 0.12s",
      }}>
        {line.blank ? "" : lineNo}
      </span>

      {/* indentation + tokens */}
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.7 }}>
        {(line.indent ? INDENT.repeat(line.indent) : "")}
        {line.tokens.map((tok, i) => (
          <span key={i} style={{ color: tok.c }}>{tok.t}</span>
        ))}

        {/* hover tooltip: skill name */}
        {isHovered && isSkill && (
          <span style={{
            marginLeft: 16,
            fontFamily: "'Poppins', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            color:
              line.cat === "frontend" ? T.blue :
              line.cat === "libs"     ? T.violet : T.green,
            opacity: 0.9,
            letterSpacing: "0.04em",
          }}>
            ← {line.skill}
          </span>
        )}
      </span>
    </div>
  );
}

const Skills = () => {
  const { isDark } = useDarkMode();
  const [hovered, setHovered] = useState(null);

  const accentBlue = isDark ? "#f87171" : "#2563eb";
  const divider    = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  /* assign sequential line numbers to non-blank lines */
  let lineCounter = 0;
  const numbered = LINES.map(line => ({
    ...line,
    lineNo: line.blank ? null : ++lineCounter,
  }));

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        padding: "clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)",
        overflow: "hidden",
      }}
    >
      {/* ghost */}
      <div aria-hidden style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "'Syne', sans-serif", fontWeight: 800,
        fontSize: "clamp(6rem, 20vw, 16rem)", letterSpacing: "-0.05em",
        opacity: isDark ? 0.02 : 0.028,
        pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap", lineHeight: 1,
      }}>SKILLS</div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* section label */}
        <div data-aos="fade-up" style={{
          display: "flex", alignItems: "center", gap: 10,
          marginBottom: "2.75rem",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
          textTransform: "uppercase", opacity: 0.45,
        }}>
          <span style={{ color: accentBlue, opacity: 1 }}>// 02</span>
          <span>·</span>
          <span>Skills</span>
          <div style={{ height: 1, background: divider, width: 64, flexShrink: 0 }} />
        </div>

        {/* headline + terminal side-by-side on large screens */}
        <div className="skills-layout">

          {/* left: text */}
          <div className="skills-text">
            <div data-aos="fade-up" data-aos-delay="60">
              <h2 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                lineHeight: 1.15, letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
              }}>
                The stack I{" "}
                <span style={{ color: accentBlue }}>trust</span>{" "}
                in production.
              </h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="120">
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(0.8rem, 1.3vw, 0.95rem)",
                lineHeight: 1.85, opacity: 0.55,
                marginBottom: "2rem", maxWidth: 360,
              }}>
                Hover any line in the file to identify the skill. These are the tools I use daily in production across fintech and government platforms.
              </p>

              {/* legend */}
              {[
                { color: T.blue,   label: "Frontend" },
                { color: T.violet, label: "Libraries & APIs" },
                { color: T.green,  label: "Dev Tools" },
              ].map(({ color, label }) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: 8,
                  marginBottom: 8,
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: color, boxShadow: `0 0 6px ${color}80`,
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11, letterSpacing: "0.06em",
                    textTransform: "uppercase", opacity: 0.5,
                  }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right: terminal */}
          <div data-aos="fade-left" data-aos-delay="100" className="skills-terminal">
            <div style={{
              background: T.bg,
              border: `1px solid ${T.border}`,
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: isDark
                ? "0 24px 60px rgba(0,0,0,0.5)"
                : "0 24px 60px rgba(0,0,0,0.25)",
            }}>

              {/* title bar */}
              <div style={{
                background: T.bgBar,
                borderBottom: `1px solid ${T.border}`,
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
                <span style={{
                  marginLeft: 12, color: T.lineNum,
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                }}>
                  skills.json
                </span>
              </div>

              {/* prompt line */}
              <div style={{
                padding: "10px 16px 6px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                borderBottom: `1px solid ${T.border}`,
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <span style={{ color: T.prompt }}>❯</span>
                <span style={{ color: T.lineNum }}>~/varun-ergurala</span>
                <span style={{ color: T.punct }}>$</span>
                <span style={{ color: T.key }}>&nbsp;cat skills.json</span>
                <span style={{
                  display: "inline-block",
                  width: 7, height: 14,
                  background: T.key,
                  opacity: 0.8,
                  animation: "blink 1.1s step-end infinite",
                  verticalAlign: "middle",
                  marginLeft: 2,
                }} />
              </div>

              {/* code body */}
              <div className="terminal-code" style={{
                padding: "12px 12px 16px",
                overflowX: "auto",
                overflowY: "auto",
                maxHeight: 520,
              }}>
                {numbered.map(line => (
                  <TerminalLine
                    key={line.id}
                    line={line}
                    lineNo={line.lineNo}
                    hovered={hovered}
                    onHover={setHovered}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0.8; }
          50%       { opacity: 0; }
        }

        /* ── terminal scrollbar ── */
        .terminal-code::-webkit-scrollbar        { width: 5px; height: 5px; }
        .terminal-code::-webkit-scrollbar-track  { background: transparent; }
        .terminal-code::-webkit-scrollbar-thumb  { background: #30363d; border-radius: 4px; }
        .terminal-code::-webkit-scrollbar-thumb:hover { background: #484f58; }
        .terminal-code { scrollbar-width: thin; scrollbar-color: #30363d transparent; }

        /* ── layout ── */
        .skills-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        .skills-text     { order: 2; min-width: 0; }
        .skills-terminal { order: 1; min-width: 0; }

        @media (min-width: 900px) {
          .skills-layout {
            grid-template-columns: minmax(260px, 360px) 1fr;
            gap: 4rem;
          }
          .skills-text     { order: 1; }
          .skills-terminal { order: 2; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
