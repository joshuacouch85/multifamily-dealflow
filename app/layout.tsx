import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Dealflow AI",
  description: "Pre-screened multifamily land deals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            padding: "20px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <strong>Dealflow AI</strong>

          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/">Home</Link>
            <Link href="/sample-report">Sample Report</Link>
            <Link href="/demo">Request Demo</Link>
            <Link href="/order">Order Screen</Link>
          </nav>
        </header>

        <main style={{ padding: "40px" }}>{children}</main>
      </body>
    </html>
  );
}