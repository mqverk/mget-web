import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/install", label: "Install" },
  { href: "/usage", label: "Usage" }
];

export function NavBar() {
  return (
    <nav>
      <Link className="nav-brand" href="/">
        <span className="nav-dot" />
        <span>mget</span>
      </Link>
      <div className="nav-links">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
