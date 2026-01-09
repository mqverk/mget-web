const linuxDeps = `# Ubuntu / Debian
sudo apt-get install build-essential libcurl4-openssl-dev libjson-c-dev

# Fedora
sudo dnf install gcc make libcurl-devel json-c-devel

# Arch
sudo pacman -S base-devel curl json-c`;

const buildSteps = `git clone https://github.com/mqverk/mget.git
cd mget
cd src
make

# optional clean
make clean`;

export default function InstallPage() {
  return (
    <section className="section">
      <h2>Install mget</h2>
      <p>mget is a small C project. Install two libs, run make, and the binary lands in src/.</p>

      <div className="stack" style={{ marginTop: 20 }}>
        <div className="card">
          <h3>Prereqs</h3>
          <p>Compiler plus two lightweight dependencies.</p>
          <div className="tag-row">
            <span className="tag">GCC or Clang</span>
            <span className="tag">Make</span>
            <span className="tag">libcurl</span>
            <span className="tag">json-c</span>
          </div>
        </div>
        <div className="card">
          <h3>Install dependencies</h3>
          <div className="code-block">
            <pre style={{ margin: 0 }}>
              <code>{linuxDeps}</code>
            </pre>
          </div>
        </div>
        <div className="card">
          <h3>Build from source</h3>
          <div className="code-block">
            <pre style={{ margin: 0 }}>
              <code>{buildSteps}</code>
            </pre>
          </div>
          <p style={{ color: "var(--muted)", marginTop: 12 }}>
            On macOS, install curl and json-c via Homebrew: brew install curl json-c.
          </p>
        </div>
      </div>
    </section>
  );
}
