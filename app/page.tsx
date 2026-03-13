import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "24px 16px",
      }}
    >
      <section style={{ textAlign: "center", padding: "40px 0" }}>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 48px)",
            marginBottom: 20,
            lineHeight: 1.1,
          }}
        >
          Pre-Screened Multifamily Land Deals
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            maxWidth: 700,
            margin: "0 auto 32px auto",
            lineHeight: 1.6,
          }}
        >
          We scan listed and off-market land parcels and deliver ranked
          multifamily development opportunities with estimated unit yield,
          land cost per door, and major risk flags.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          <a
            href="/demo"
            style={{
              padding: "14px 20px",
              border: "1px solid #111",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
              color: "#111",
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
              color: "#111",
            }}
          >
            Order Site Screen
          </a>
        </div>

        <div style={{ marginTop: 20 }}>
          <Image
            src="/multifamily-site.jpg"
            width={1000}
            height={500}
            alt="Multifamily development site"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 12,
            }}
          />
        </div>
      </section>

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

      <section style={{ marginTop: 80 }}>
        <h2 style={{ textAlign: "center", marginBottom: 30 }}>
          Developer Screening Report
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto 30px auto",
            lineHeight: 1.6,
          }}
        >
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
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 12,
            }}
          />
        </div>
      </section>

      <section style={{ marginTop: 80 }}>
        <h2>Built by Multifamily Developers</h2>

        <p style={{ maxWidth: 700, lineHeight: 1.7 }}>
          Dealflow AI was created by operators actively evaluating multifamily
          development sites across Arkansas and Oklahoma. The goal is simple:
          quickly identify viable sites and eliminate bad dirt before spending
          time and capital on full diligence.
        </p>

        <p style={{ maxWidth: 700, lineHeight: 1.7 }}>
          Our screening reports are designed to mirror the early-stage
          feasibility analysis developers perform when underwriting land
          acquisitions.
        </p>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>Focused on Midwest Multifamily Markets</h2>

        <p style={{ maxWidth: 700, lineHeight: 1.7 }}>
          Our initial coverage focuses on Arkansas, Oklahoma, and surrounding
          Midwest markets where multifamily development opportunities remain
          strong and land pricing is still attainable.
        </p>

        <p style={{ maxWidth: 700, lineHeight: 1.7 }}>
          Over time the platform will expand to support developers searching
          for multifamily land across the lower 48.
        </p>
      </section>

      <section style={{ marginTop: 80, textAlign: "center", paddingBottom: 40 }}>
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
            color: "#111",
          }}
        >
          Order a Site Screen
        </a>
      </section>
    </main>
  );
}