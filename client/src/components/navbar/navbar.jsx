const links = [
  { label: "Overview", href: "#overview" },
  { label: "Campus", href: "#campus" },
  { label: "Energy", href: "#energy" },
  { label: "Alerts", href: "#alerts" },
];

export default function Navbar() {
  return (
    <aside className="sidebar">
      <a className="brand" href="#overview">
        <span className="brand-mark">C</span>
        <span>
          <strong>CampusTwin</strong>
          <small>SMART CAMPUS</small>
        </span>
      </a>

      <nav aria-label="Main navigation">
        <p className="nav-heading">WORKSPACE</p>

        {links.map((link, index) => (
          <a
            className={`nav-link ${index === 0 ? "active" : ""}`}
            href={link.href}
            key={link.label}
          >
            <span className="nav-dot" aria-hidden="true" />
            {link.label}
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot" aria-hidden="true" />
        Demo data · Simulated
      </div>
    </aside>
  );
}