import React from "react";
import logo from "./logo.svg";

const actions = [
  {
    title: "Search instantly",
    detail: "Find plugins and mods on Modrinth without leaving your terminal.",
  },
  {
    title: "Download smarter",
    detail: "Target server types, loaders, and versions in a single command.",
  },
  {
    title: "Zero bloat",
    detail: "Written in C with a tiny footprint and fast network calls.",
  },
];

const installSteps = [
  {
    label: "1. Clone",
    code: "git clone https://github.com/mqverk/mget.git\ncd mget",
    oneLine: "git clone https://github.com/mqverk/mget.git && cd mget",
  },
  {
    label: "2. Install deps",
    code: "# Debian/Ubuntu\nsudo apt-get install build-essential libcurl4-openssl-dev libjson-c-dev\n\n# Fedora\nsudo dnf install gcc make libcurl-devel json-c-devel\n\n# Arch\nsudo pacman -S base-devel curl json-c\n\n# macOS\nbrew install curl json-c",
    oneLine: "sudo apt-get install build-essential libcurl4-openssl-dev libjson-c-dev",
  },
  {
    label: "3. Build",
    code: "cd src/\nmake",
    oneLine: "cd src && make",
  },
];

const usageBlocks = [
  {
    title: "Search projects",
    code: "./mget -f luckperms",
  },
  {
    title: "Download a plugin",
    code: "./mget -p luckperms -v 1.21.8 -s paper",
  },
  {
    title: "Download a mod",
    code: "./mget -m travelersbackpack -v 1.20.1 -l fabric",
  },
];

const optionBlocks = [
  {
    flag: "-f, --find <name>",
    detail: "Search for a project by name or slug.",
  },
  {
    flag: "-p, --plugin <slug>",
    detail: "Download a plugin by slug (Paper, Spigot, Bukkit).",
  },
  {
    flag: "-m, --mod <slug>",
    detail: "Download a mod by slug (Forge, Fabric, Neoforge, Quilt).",
  },
  {
    flag: "-v, --version <ver>",
    detail: "Target a specific Minecraft version, e.g., 1.21.1.",
  },
  {
    flag: "-l, --loader <type>",
    detail: "Set loader: forge, fabric, neoforge, quilt, etc.",
  },
  {
    flag: "-s, --server <type>",
    detail: "Set server type for plugins: paper, spigot, bukkit, etc.",
  },
  {
    flag: "-h, --help",
    detail: "Show help and exit.",
  },
];

const githubUrl = "https://github.com/mqverk/mget";

function App() {
  return (
    <div className="page">
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <header className="nav">
        <div className="logo">
          <img src={logo} alt="mget" />
          <span className="logo-text">mget</span>
        </div>
        <div className="nav-actions">
          <a className="ghost" href="#install">Install</a>
          <a className="solid" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <main className="content">
        <section className="hero">
          <div className="eyebrow">Modrinth downloads from the terminal</div>
          <h1>
            Fast, minimal CLI to <span>fetch plugins</span> without leaving your shell.
          </h1>
          <p className="lede">
            mget is a C-based tool that searches Modrinth, filters by server or loader, and pulls
            exactly the builds you need. No GUI. No noise. Just precise downloads.
          </p>

          <div className="cta-row">
            <a className="solid" href={githubUrl} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
            <a className="ghost" href="#usage">
              See commands
            </a>
          </div>

          <div className="pill-row">
            <span className="pill">Paper, Spigot, Bukkit</span>
            <span className="pill">Forge, Fabric, Neoforge</span>
            <span className="pill">Tiny footprint</span>
          </div>
        </section>

        <section className="panel-grid" aria-label="Highlights">
          {actions.map((item) => (
            <article key={item.title} className="panel">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>

        <section id="install" className="section">
          <div className="section-head">
            <h2>Install</h2>
            <p>Clone, install deps, then make. Nothing else required.</p>
          </div>
          <div className="card-grid install-grid">
            {installSteps.map((step) => (
              <div key={step.label} className="card install-card">
                <div className="card-top">
                  <span className="tag">{step.label}</span>
                </div>
                <pre>
                  <code>{step.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>

        <section id="usage" className="section">
          <div className="section-head">
            <h2>Usage</h2>
            <p>Precise switches keep searches and downloads scoped.</p>
          </div>
          <div className="card-grid usage">
            {usageBlocks.map((block) => (
              <div key={block.title} className="card">
                <div className="card-top">
                  <h4>{block.title}</h4>
                </div>
                <pre>
                  <code>{block.code}</code>
                </pre>
              </div>
            ))}
          </div>
          <div className="options">
            <div className="options-head">
              <h3>Options</h3>
              <p>Flags to steer searches and downloads.</p>
            </div>
            <div className="option-grid">
              {optionBlocks.map((opt) => (
                <div key={opt.flag} className="option-card">
                  <div className="option-flag">{opt.flag}</div>
                  <div className="option-desc">{opt.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>
          mget by
          {" "}
          <a href="https://github.com/mqverk" target="_blank" rel="noreferrer">
            mqverk
          </a>
        </span>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          GitHub repo
        </a>
      </footer>
    </div>
  );
}

export default App;
