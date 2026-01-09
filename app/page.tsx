import Link from "next/link";

const highlights = [
  {
    title: "Zero-fat CLI",
    body: "C, libcurl, json-c. No runtime baggage, just a tiny binary that speaks Modrinth fast.",
    tags: ["Single binary", "MIT licensed"]
  },
  {
    title: "Exact targets",
    body: "Filter by loader, server, and version so you pull the right artifact the first time.",
    tags: ["Forge/Fabric/NeoForge", "Paper/Spigot/Bukkit"]
  },
  {
    title: "CI friendly",
    body: "Scriptable interface that drops artifacts into predictable paths for builds and deploys.",
    tags: ["Deterministic", "Fast network IO"]
  }
];

const heroCommands = [`./mget -f luckperms`, `./mget -p luckperms -v 1.21.8 -s paper`, `./mget -m travelersbackpack -v 1.20.1 -l fabric`];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Fast Modrinth CLI
          </div>
          <h1>mget pulls plugins and mods without leaving your terminal.</h1>
          <p>
            Search, filter, and download directly from Modrinth. Built in C, tuned for speed, and ready to drop into automation or live server tooling.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/install">
              Install mget
            </Link>
            <a className="button secondary" href="https://github.com/mqverk/mget" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
          <div className="stat-line" style={{ marginTop: 16 }}>
            <span className="accent-text">Search</span>
            <span>Filter</span>
            <span>Download</span>
            <span className="accent-text">Repeat</span>
          </div>
        </div>
        <div>
          <div className="card terminal-card">
            <p style={{ margin: 0, color: "var(--muted)" }}>Terminal preview</p>
            <div className="code-block">
              <pre style={{ margin: 0 }}>
                <code>{heroCommands.join("\n")}</code>
              </pre>
            </div>
            <div className="stat-line">
              <span className="accent-text">Modrinth</span>
              <span>API driven</span>
              <span>Stable output</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Why mget</h2>
        <p>
          Built for operators and pack authors who need a reliable Modrinth fetcher. No fluff, just direct calls and deterministic output you can script around.
        </p>
        <div className="grid">
          {highlights.map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
