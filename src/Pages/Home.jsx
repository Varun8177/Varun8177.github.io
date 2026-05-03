import { RxGithubLogo } from "react-icons/rx";
import { BsLinkedin } from "react-icons/bs";
import { TfiDownload, TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { useDarkMode } from "../context/DarkModeContext";

const socials = [
  { icon: RxGithubLogo, label: "Github", href: "https://github.com/Varun8177", external: true },
  { icon: BsLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/varun8177", external: true },
  { icon: FiPhoneCall, label: "Phone", href: "tel:+918177836651", external: false },
  { icon: TfiEmail, label: "Email", href: "mailto:varunergurala9999@gmail.com", external: false },
];

const ticker = [
  "React.js", "Next.js", "TypeScript", "Redux", "Socket.IO",
  "Mapbox GL", "Highcharts", "Tailwind CSS", "SonarQube", "Aadhaar eSign",
  "REST APIs", "ESLint", "Git", "Agile / Scrum", "Fintech",
];

// Fake syntax-highlighted code representing Varun's actual work
function CodeWindow({ isDark }) {
  const bg = isDark ? "#0d1117" : "#f8f9fb";
  const border = isDark ? "#21262d" : "#dde1e7";
  const lineNum = isDark ? "#3d444d" : "#c1c8d0";

  const tokens = {
    kw:  isDark ? "#ff7b72" : "#d73a49",
    fn:  isDark ? "#d2a8ff" : "#6f42c1",
    str: isDark ? "#a5d6ff" : "#032f62",
    cmt: isDark ? "#3d444d" : "#6a737d",
    num: isDark ? "#79c0ff" : "#005cc5",
    def: isDark ? "#e6edf3" : "#24292e",
    op:  isDark ? "#ff7b72" : "#d73a49",
  };

  const lines = [
    [{ t: "// varun.ts", c: "cmt" }],
    [],
    [{ t: "type ", c: "kw" }, { t: "Domain", c: "fn" }, { t: " =", c: "op" }],
    [{ t: "  | ", c: "op" }, { t: "'Fintech'", c: "str" }, { t: " | ", c: "op" }, { t: "'Government'", c: "str" }, { t: " | ", c: "op" }, { t: "'Real Estate'", c: "str" }],
    [],
    [{ t: "const ", c: "kw" }, { t: "varun", c: "fn" }, { t: " = {", c: "def" }],
    [{ t: "  role:", c: "num" }, { t: "    ", c: "def" }, { t: "'Frontend Engineer'", c: "str" }, { t: ",", c: "def" }],
    [{ t: "  stack:", c: "num" }, { t: "   ", c: "def" }, { t: "['React'", c: "str" }, { t: ", ", c: "def" }, { t: "'Next.js'", c: "str" }, { t: ", ", c: "def" }, { t: "'TypeScript'", c: "str" }, { t: "],", c: "def" }],
    [{ t: "  exp:", c: "num" }, { t: "     ", c: "def" }, { t: "'2.5 yrs · 4 companies'", c: "str" }, { t: ",", c: "def" }],
    [{ t: "  quality:", c: "num" }, { t: "  ", c: "def" }, { t: "'SonarQube A'", c: "str" }, { t: ",", c: "def" }],
    [{ t: "  available:", c: "num" }, { t: " ", c: "def" }, { t: "true", c: "kw" }, { t: ",", c: "def" }],
    [{ t: "}", c: "def" }],
    [],
    [{ t: "export default ", c: "kw" }, { t: "varun", c: "fn" }],
  ];

  return (
    <div
      className="float-card rounded-2xl overflow-hidden shadow-2xl"
      style={{ background: bg, border: `1px solid ${border}`, fontFamily: "'JetBrains Mono', monospace", fontSize: "12.5px", lineHeight: "1.7" }}
    >
      {/* Title bar */}
      <div style={{ background: isDark ? "#161b22" : "#eaedf0", borderBottom: `1px solid ${border}`, padding: "10px 16px" }} className="flex items-center gap-2">
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
        <span style={{ marginLeft: 12, color: lineNum, fontSize: 11 }}>varun.ts</span>
      </div>
      {/* Code */}
      <div style={{ padding: "16px 0" }}>
        {lines.map((line, i) => (
          <div key={i} style={{ display: "flex", paddingLeft: 16, paddingRight: 20, minHeight: "1.7em" }}>
            <span style={{ color: lineNum, minWidth: 24, textAlign: "right", marginRight: 20, userSelect: "none", fontSize: 11 }}>
              {i + 1}
            </span>
            <span>
              {line.map((tok, j) => (
                <span key={j} style={{ color: tokens[tok.c] }}>{tok.t}</span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  const { isDark } = useDarkMode();

  const accent = isDark ? "#f87171" : "#2563eb";
  const dotColor = isDark ? "rgba(248,113,113,0.07)" : "rgba(37,99,235,0.06)";
  const glowColor = isDark ? "radial-gradient(ellipse 60% 50% at 15% 40%, rgba(248,113,113,0.12) 0%, transparent 70%)"
                           : "radial-gradient(ellipse 60% 50% at 15% 40%, rgba(37,99,235,0.08) 0%, transparent 70%)";
  const badgeBg = isDark ? "rgba(248,113,113,0.1)" : "rgba(37,99,235,0.07)";
  const badgeBorder = isDark ? "rgba(248,113,113,0.25)" : "rgba(37,99,235,0.2)";
  const badgeText = accent;
  const ruleBg = isDark ? "rgba(248,113,113,0.35)" : "rgba(37,99,235,0.25)";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      {/* ── Background: dot grid ── */}
      <div
        className="absolute inset-0 dot-grid pointer-events-none"
        style={{ color: dotColor, opacity: 1 }}
      />
      {/* ── Background: glow orb ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: glowColor }}
      />
      {/* ── Background: bottom-right secondary glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse 40% 40% at 90% 85%, rgba(248,113,113,0.08) 0%, transparent 70%)"
            : "radial-gradient(ellipse 40% 40% at 90% 85%, rgba(37,99,235,0.05) 0%, transparent 70%)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex items-center justify-between gap-12 px-6 md:px-16 xl:px-24 w-full max-w-[1280px] mx-auto">

        {/* ── Left column ── */}
        <div className="flex-1 min-w-0">

          {/* Live badge */}
          <div className="hero-reveal hero-d1 inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full text-xs font-medium tracking-wide"
            style={{ background: badgeBg, border: `1px solid ${badgeBorder}`, color: badgeText, fontFamily: "'JetBrains Mono', monospace" }}>
            <span className="live-dot" />
            Currently building IndiSign · Hapticware
          </div>

          {/* Name — large Syne display */}
          <div className="hero-reveal hero-d2">
            <h1
              className="leading-none tracking-tight mb-3"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              Varun<br />
              <span style={{ color: accent }}>Ergurala</span>
            </h1>
          </div>

          {/* Thin accent rule */}
          <div className="hero-reveal hero-d2 overflow-hidden mb-5" style={{ height: 2 }}>
            <div className="accent-rule h-full" style={{ background: ruleBg }} />
          </div>

          {/* Typewriter role */}
          <div
            className="hero-reveal hero-d3 text-lg md:text-2xl font-medium mb-6 min-h-[1.5em]"
            style={{ fontFamily: "'JetBrains Mono', monospace", opacity: 0.8 }}
          >
            <Typewriter
              options={{
                strings: ["Frontend Engineer", "React · Next.js · TypeScript", "Fintech · Govt · Real Estate"],
                autoStart: true,
                loop: true,
                deleteSpeed: 35,
                delay: 60,
              }}
            />
          </div>

          {/* Bio */}
          <p className="hero-reveal hero-d4 text-sm md:text-base leading-relaxed mb-8 max-w-lg" style={{ opacity: 0.7 }}>
            2.5+ years shipping production-grade web apps across fintech, government,
            and real estate. SonarQube A grade · eSign platforms · 10K+ listing dashboards.
          </p>

          {/* Socials + CTA row */}
          <div className="hero-reveal hero-d5 flex flex-wrap items-center gap-4">
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="social-icon"
                  style={{
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                    color: "inherit",
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 32, background: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)" }} />

            {/* Resume CTA */}
            <a
              href="Varun_Ergurala_Resume.pdf"
              download="Varun_Ergurala_Resume.pdf"
              rel="noreferrer"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: accent,
                color: "#fff",
                fontFamily: "'Poppins', sans-serif",
                boxShadow: `0 4px 20px ${isDark ? "rgba(96,165,250,0.25)" : "rgba(37,99,235,0.25)"}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 28px ${isDark ? "rgba(96,165,250,0.35)" : "rgba(37,99,235,0.35)"}`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 20px ${isDark ? "rgba(96,165,250,0.25)" : "rgba(37,99,235,0.25)"}`; }}
            >
              Resume <TfiDownload size={13} />
            </a>
          </div>
        </div>

        {/* ── Right column: code window ── */}
        <div className="hero-reveal hero-d6 hidden lg:block flex-shrink-0 w-[380px] xl:w-[420px]">
          <CodeWindow isDark={isDark} />
        </div>
      </div>

      {/* ── Tech ticker ── */}
      <div
        className="relative z-10 mt-16 ticker-wrap overflow-hidden"
        style={{ borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`, paddingTop: "1rem", paddingBottom: "0.75rem" }}
      >
        <div className="ticker-track select-none">
          {[...ticker, ...ticker].map((item, i) => (
            <span
              key={i}
              className="text-xs font-medium tracking-widest uppercase"
              style={{
                marginRight: "2.5rem",
                opacity: 0.35,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {item}
              <span style={{ marginLeft: "2.5rem", opacity: 0.4 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
