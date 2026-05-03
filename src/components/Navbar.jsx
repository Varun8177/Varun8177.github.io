import { useState, useEffect } from "react";
import * as Scroll from "react-scroll";
import { TfiDownload } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import ColorModeToggle from "./Darkmode";
import { useDarkMode } from "../context/DarkModeContext";

const navLinks = [
  { label: "Home",       to: "home" },
  { label: "About",      to: "about" },
  { label: "Skills",     to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects",   to: "projects" },
  { label: "Contact",    to: "contact" },
];

function Navbar() {
  const { isDark } = useDarkMode();
  const [scrolled,    setScrolled]    = useState(false);
  const [progress,    setProgress]    = useState(0);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  /* ── Scroll tracking ── */
  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrolled(sy > 60);
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (sy / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const accent = isDark ? "#f87171" : "#2563eb";

  const glassBg = isDark
    ? "rgba(8, 8, 14, 0.80)"
    : "rgba(247, 246, 241, 0.88)";

  const glassBorder = isDark
    ? "rgba(255,255,255,0.07)"
    : "rgba(0,0,0,0.07)";

  return (
    <>
      {/* ── Scroll progress bar (fixed, sits above navbar) ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${accent}, ${isDark ? "#fb923c" : "#7c3aed"})`,
          zIndex: 200,
          transition: "width 0.12s linear",
          boxShadow: `0 0 10px ${accent}80`,
          pointerEvents: "none",
        }}
      />

      {/* ── Navbar ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled ? glassBg : "transparent",
          borderBottom: `1px solid ${scrolled ? glassBorder : "transparent"}`,
          backdropFilter: scrolled ? "blur(18px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px) saturate(180%)" : "none",
          transition: "background 0.45s ease, border-color 0.45s ease, height 0.35s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: scrolled ? 58 : 70,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 clamp(1rem, 4vw, 4rem)",
            transition: "height 0.35s ease",
          }}
        >
          {/* ── Logo ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 22,
              letterSpacing: "-0.02em",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "inherit",
              padding: 0,
              lineHeight: 1,
            }}
          >
            VE<span style={{ color: accent }}>.</span>
          </button>

          {/* ── Desktop links ── */}
          <div style={{ display: "none", alignItems: "center", gap: 4 }} className="md-flex">
            {navLinks.map((link) => (
              <Scroll.Link
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={500}
                activeStyle={{ color: accent, opacity: 1 }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11.5,
                  fontWeight: 500,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  padding: "7px 13px",
                  borderRadius: 8,
                  cursor: "pointer",
                  opacity: 0.65,
                  transition: "opacity 0.2s, background 0.2s, color 0.2s",
                  display: "block",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
                }}
                onMouseLeave={e => {
                  // Keep full opacity if active class is present
                  if (!e.currentTarget.style.color.includes("60a5fa") && !e.currentTarget.style.color.includes("2563eb")) {
                    e.currentTarget.style.opacity = "0.65";
                  }
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </Scroll.Link>
            ))}

            {/* Separator */}
            <div style={{
              width: 1,
              height: 22,
              background: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
              margin: "0 8px",
            }} />

            {/* Resume */}
            <NavResume accent={accent} />

            <ColorModeToggle />
          </div>

          {/* ── Mobile: dark toggle + hamburger ── */}
          <div className="mobile-flex" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ColorModeToggle />
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 38,
                borderRadius: 10,
                border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`,
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                cursor: "pointer",
                color: "inherit",
              }}
            >
              {mobileOpen ? <IoClose size={17} /> : <RxHamburgerMenu size={17} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile fullscreen overlay ── */}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 150,
            background: isDark ? "#08080C" : "#F7F6F1",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Overlay header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 70,
            padding: "0 clamp(1.5rem, 6vw, 3rem)",
            borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
          }}>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 22,
              letterSpacing: "-0.02em",
            }}>
              VE<span style={{ color: accent }}>.</span>
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 38,
                borderRadius: 10,
                border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`,
                background: "transparent",
                cursor: "pointer",
                color: "inherit",
              }}
            >
              <IoClose size={17} />
            </button>
          </div>

          {/* Big typographic links */}
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem clamp(1.5rem, 8vw, 4rem)",
            gap: "0.15rem",
          }}>
            {navLinks.map((link, i) => (
              <Scroll.Link
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={() => setMobileOpen(false)}
                activeStyle={{ opacity: 1, color: accent }}
                className="mobile-nav-item"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 10vw, 4rem)",
                  lineHeight: 1.15,
                  cursor: "pointer",
                  opacity: 0.12,
                  letterSpacing: "-0.03em",
                  transition: "opacity 0.18s ease, color 0.18s ease",
                  animationDelay: `${i * 0.05}s`,
                  display: "block",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "0.12"; }}
              >
                {link.label}
              </Scroll.Link>
            ))}
          </div>

          {/* Bottom resume row */}
          <div style={{
            padding: "1.5rem clamp(1.5rem, 8vw, 4rem)",
            borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <a
              href="Varun_Ergurala_Resume.pdf"
              download="Varun_Ergurala_Resume.pdf"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 28px",
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                background: accent,
                color: "#fff",
                textDecoration: "none",
                boxShadow: `0 4px 16px ${accent}40`,
              }}
            >
              Download Resume <TfiDownload size={12} />
            </a>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              opacity: 0.3,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>
              varun8177.github.io
            </span>
          </div>
        </div>
      )}

      {/* Responsive style — Tailwind md: not available on inline elements */}
      <style>{`
        @media (min-width: 768px) {
          .md-flex   { display: flex !important; }
          .mobile-flex { display: none !important; }
        }
        @keyframes overlay-slide-in {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobile-link-in {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 0.12; transform: translateX(0); }
        }
        .mobile-overlay {
          animation: overlay-slide-in 0.28s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .mobile-nav-item {
          animation: mobile-link-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </>
  );
}

function NavResume({ accent }) {
  return (
    <a
      href="Varun_Ergurala_Resume.pdf"
      download="Varun_Ergurala_Resume.pdf"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "7px 16px",
        borderRadius: 10,
        fontSize: 11.5,
        fontWeight: 600,
        fontFamily: "'Poppins', sans-serif",
        background: accent,
        color: "#fff",
        textDecoration: "none",
        letterSpacing: "0.02em",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        boxShadow: `0 2px 10px ${accent}40`,
        marginRight: 4,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = `0 6px 20px ${accent}50`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = `0 2px 10px ${accent}40`;
      }}
    >
      Resume <TfiDownload size={11} />
    </a>
  );
}

export default Navbar;
