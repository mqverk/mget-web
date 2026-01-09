const searchCmd = "./mget -f luckperms";
const pluginCmd = "./mget -p luckperms -v 1.21.8 -s paper";
const modCmd = "./mget -m travelersbackpack -v 1.20.1 -l fabric";

const options = [
  "-f, --find <name> - Search for a project by name",
  "-p, --plugin <slug> - Plugin slug to download",
  "-m, --mod <slug> - Mod slug to download",
  "-v, --version <version> - Target Minecraft version",
  "-l, --loader <type> - Mod loader (forge, fabric, neoforge, quilt, etc.)",
  "-s, --server <type> - Server type (paper, spigot, bukkit, etc.)",
  "-h, --help - Show help"
];

export default function UsagePage() {
  return (
    <section className="section">
      <h2>Usage</h2>
      <p>Run mget from the project root after building. These are the fast paths you will use most often.</p>

      <div className="grid" style={{ marginTop: 18 }}>
        <div className="card">
          <h3>Search for projects</h3>
          <div className="code-block">
            <pre style={{ margin: 0 }}>
              <code>{searchCmd}</code>
            </pre>
          </div>
        </div>
        <div className="card">
          <h3>Download a plugin</h3>
          <div className="code-block">
            <pre style={{ margin: 0 }}>
              <code>{pluginCmd}</code>
            </pre>
          </div>
        </div>
        <div className="card">
          <h3>Download a mod</h3>
          <div className="code-block">
            <pre style={{ margin: 0 }}>
              <code>{modCmd}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 22 }}>
        <h3>CLI flags</h3>
        <ul style={{ paddingLeft: 18, color: "var(--muted)", marginBottom: 0 }}>
          {options.map((item) => (
            <li key={item} style={{ marginBottom: 8 }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
