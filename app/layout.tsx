import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/NavBar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "mget | Fast Modrinth downloader",
  description: "mget is a fast CLI to fetch Modrinth plugins straight from your terminal.",
  metadataBase: new URL("https://mget.dev")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <NavBar />
        <main>{children}</main>
        <footer className="footer">
          <p>mget is open source on GitHub. Built for fast Modrinth downloads.</p>
        </footer>
      </body>
    </html>
  );
}
