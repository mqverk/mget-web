const features = [
  {
    title: "Search fast",
    detail: "Query Modrinth with clear tabular output so you can spot the slug you need immediately.",
    bullets: ["Snappy lookups", "Readable table output", "Filter-first workflow"]
  },
  {
    title: "Download with intent",
    detail: "Pin exact versions so your servers stay reproducible across environments.",
    bullets: ["Version-locked installs", "Paper/Spigot/Bukkit targeting", "Forge/Fabric/NeoForge loaders"]
  },
  {
    title: "Lightweight core",
    detail: "Written in C with libcurl and json-c. No heavy runtime required.",
    bullets: ["Single binary", "Low memory overhead", "MIT licensed"]
  }
];

export default function FeaturesPage() {
  return (
    <section className="section">
      <h2>Feature snapshot</h2>
      <p>mget keeps the surface area tight: search, resolve, and download. Fewer moving parts means fast runs on remote boxes and predictable output for scripts.</p>
      <div className="grid" style={{ marginTop: 20 }}>
        {features.map((feature) => (
          <div className="card" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.detail}</p>
            <ul style={{ paddingLeft: 18, color: "var(--muted)", marginBottom: 0 }}>
              {feature.bullets.map((item) => (
                <li key={item} style={{ marginBottom: 6 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
