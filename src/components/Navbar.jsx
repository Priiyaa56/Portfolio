import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const navRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { threshold: 0.5 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const moveIndicator = () => {
      if (window.innerWidth <= 760) return;
      const activeLink = navRef.current?.querySelector(`a[href="${active}"]`);
      if (activeLink && indicatorRef.current) {
        indicatorRef.current.style.width = `${activeLink.offsetWidth}px`;
        indicatorRef.current.style.transform = `translateX(${activeLink.offsetLeft}px)`;
      }
    };
    moveIndicator();
    window.addEventListener("resize", moveIndicator);
    return () => window.removeEventListener("resize", moveIndicator);
  }, [active]);

  return (
    <header>
      <nav>
        <div className="logo">
          <img src = "public/cool-anime-girl-pfp-hu-tao-6cjtrrhyvr2g24ik.jpg" alt="Logo" className = "logo-mark"/>
          <span className="logo-text">Priya Hariyale</span>
          <span className="status-pill">
            <span className="status-dot"></span>open to work
          </span>
        </div>

        <ul className={`navlinks ${open ? "open" : ""}`} ref={navRef}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <span className="nav-indicator" ref={indicatorRef}></span>
        </ul>

        <div className="nav-right">
          <button
            className="theme-toggle"
            aria-label="Toggle light and dark theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <button
            className="menu-btn"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
