import GitHubCalendar from "react-github-calendar";
import { useDarkMode } from "../context/DarkModeContext";
import { RxGithubLogo } from "react-icons/rx";

const GithubStats = () => {
  const { isDark } = useDarkMode();
  const accent  = isDark ? "#f87171" : "#2563eb";
  const divider = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const panelBg     = isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.02)";
  const panelBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return (
    <section
      id="github"
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
        CODE
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
          <span style={{ color: accent, opacity: 1 }}>// 05</span>
          <span>·</span>
          <span>Github Activity</span>
          <div style={{ height: 1, background: divider, width: 64, flexShrink: 0 }} />
        </div>

        {/* headline */}
        <div data-aos="fade-up" data-aos-delay="50" style={{ marginBottom: "3.5rem" }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            lineHeight: 1.1, letterSpacing: "-0.03em",
          }}>
            Coding in{" "}
            <span style={{ color: accent }}>public.</span>
          </h2>
        </div>

        {/* contribution calendar */}
        <div
          data-aos="fade-up"
          data-aos-delay="80"
          style={{
            borderRadius: 18,
            border: `1px solid ${panelBorder}`,
            background: panelBg,
            padding: "clamp(20px, 4vw, 36px)",
            marginBottom: "2rem",
            overflow: "hidden",
          }}
        >
          {/* panel header */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 12,
            marginBottom: 28,
            paddingBottom: 20,
            borderBottom: `1px solid ${divider}`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 10,
                background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                border: `1px solid ${panelBorder}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <RxGithubLogo size={16} style={{ opacity: 0.7 }} />
              </div>
              <div>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: 15, letterSpacing: "-0.01em",
                }}>
                  Varun8177
                </div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, opacity: 0.35, letterSpacing: "0.06em",
                  textTransform: "uppercase", marginTop: 1,
                }}>
                  Contribution Graph
                </div>
              </div>
            </div>

            <a
              href="https://github.com/Varun8177"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10.5, fontWeight: 500, letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "6px 16px", borderRadius: 100,
                border: `1px solid ${panelBorder}`,
                background: "transparent",
                color: "inherit",
                textDecoration: "none",
                opacity: 0.6,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "1"}
              onMouseLeave={e => e.currentTarget.style.opacity = "0.6"}
            >
              View Profile →
            </a>
          </div>

          {/* calendar */}
          <div style={{ overflowX: "auto" }}>
            <GitHubCalendar
              username="Varun8177"
              blockSize={13}
              blockMargin={4}
              fontSize={11}
              hideTotalCount
              theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark:  ["rgba(255,255,255,0.05)", "#0d4429", "#006d32", "#26a641", "#39d353"],
              }}
              style={{ margin: "0 auto", fontFamily: "'JetBrains Mono', monospace" }}
            />
          </div>
        </div>

        {/* stats image cards */}
        <div data-aos="fade-up" data-aos-delay="120" className="github-stats-grid">
          {[
            {
              src: `https://github-readme-stats.vercel.app/api?username=Varun8177&count_private=true&show_icons=true&theme=${isDark ? "github_dark_dimmed" : "default"}&hide_border=true&bg_color=00000000&title_color=${isDark ? "60a5fa" : "2563eb"}&icon_color=${isDark ? "60a5fa" : "2563eb"}`,
              alt: "GitHub Stats",
              href: "https://github.com/Varun8177",
              label: "Overview",
            },
            {
              src: `https://github-readme-stats.vercel.app/api/top-langs/?username=Varun8177&layout=compact&theme=${isDark ? "github_dark_dimmed" : "default"}&hide_border=true&bg_color=00000000&title_color=${isDark ? "60a5fa" : "2563eb"}`,
              alt: "Top Languages",
              href: "https://github.com/Varun8177?tab=repositories",
              label: "Languages",
            },
            {
              src: `https://github-readme-streak-stats.herokuapp.com/?user=Varun8177&theme=${isDark ? "dark" : "default"}&hide_border=true&background=00000000&ring=${isDark ? "60a5fa" : "2563eb"}&fire=${isDark ? "60a5fa" : "2563eb"}&currStreakLabel=${isDark ? "60a5fa" : "2563eb"}`,
              alt: "GitHub Streak",
              href: "https://github.com/Varun8177",
              label: "Streak",
            },
          ].map(({ src, alt, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                borderRadius: 14,
                border: `1px solid ${panelBorder}`,
                background: panelBg,
                padding: 16,
                display: "block",
                textDecoration: "none",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.16)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = panelBorder;
                e.currentTarget.style.transform = "";
              }}
            >
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9.5, fontWeight: 500, letterSpacing: "0.1em",
                textTransform: "uppercase", opacity: 0.35, marginBottom: 12,
              }}>
                {label}
              </div>
              <img
                src={src}
                alt={alt}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: 6 }}
              />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .github-stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .github-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 900px) {
          .github-stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default GithubStats;
