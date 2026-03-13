import Image from "next/image";

export default function Home() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px" }}>
      
      {/* HERO SECTION */}
      <section style={{ textAlign: "center", padding: "60px 0" }}>
        <h1 style={{ fontSize: 48, marginBottom: 20 }}>
          Pre-Screened Multifamily Land Deals
        </h1>

        <p style={{ fontSize: 20, maxWidth: 700, margin: "0 auto 40px auto" }}>
          We scan listed and off-market land parcels and deliver ranked
          multifamily development opportunities with estimated unit yield,
          land cost per door, and major risk flags.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          <a
            href="/demo"
            style={{
              padding: "14px 20px",
              border: "1px solid #111",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Request Demo
          </a>

          <a
            href="/order"
            style={{
              padding: "14px 20px",
              border: "1px solid #111",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Order Site Screen
          </a>
        </div>

        <div style={{ marginTop: 40 }}>
          <Image
            src="/multifamily-site.jpg"
            width={1000}
            height={500}
            alt="Multifamily development site"
            style={{ borderRadius: 12 }}
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ marginTop: 60 }}>
        <h2 style={{ textAlign: "center", marginBottom: 30 }}>
          What Developers Receive
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 12 }}>
            <h3>Unit Yield Estimate</h3>
            <p>Scenario-based multifamily unit count projections.</p>
          </div>

          <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 12 }}>
            <h3>Land Cost per Door</h3>
            <p>Instant check if land pricing makes sense.</p>
          </div>

          <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 12 }}>
            <h3>Risk Flags</h3>
            <p>Utilities, floodplain, zoning, and access risks.</p>
          </div>

          <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 12 }}>
            <h3>Go / No-Go Recommendation</h3>
            <p>Pursue, pursue with caution, or pass.</p>
          </div>
        </div>
      </section>

      {/* REPORT SECTION */}
      <section style={{ marginTop: 80 }}>
        <h2 style={{ textAlign: "center", marginBottom: 30 }}>
          Example Developer Report
        </h2>

        <p style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 30px auto" }}>
          Each screening includes estimated unit yield, land cost per door,
          and major development risk flags so you can quickly decide whether
          a site is worth pursuing.
        </p>

        <div style={{ textAlign: "center" }}>
          <Image
            src="/report-example.png"
            width={900}
            height={600}
            alt="Example feasibility report"
            style={{ borderRadius: 12 }}
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ marginTop: 80, textAlign: "center" }}>
        <h2>Start Screening Land Deals Today</h2>

        <p style={{ marginBottom: 20 }}>
          Upload a parcel or request a demo to see how the platform works.
        </p>

        <a
          href="/order"
          style={{
            padding: "16px 24px",
            border: "1px solid #111",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Order a Site Screen
        </a>
      </section>

    </main>
  );
}