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
<div
  style={{
    maxWidth: 900,
    margin: "0 auto 30px auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
  }}
>
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: 12,
      padding: 24,
      textAlign: "center",
    }}
  >
    <p style={{ margin: 0, fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>
      Deal Score
    </p>
    <p style={{ fontSize: 40, fontWeight: 700, margin: "10px 0" }}>7.4 / 10</p>
    <p style={{ margin: 0 }}>Strong enough for real diligence</p>
  </div>

  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: 12,
      padding: 24,
      textAlign: "center",
    }}
  >
    <p style={{ margin: 0, fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>
      Recommendation
    </p>
    <p style={{ fontSize: 26, fontWeight: 700, margin: "10px 0" }}>
      Pursue with Caution
    </p>
    <p style={{ margin: 0 }}>Verify utilities and grading before acquisition</p>
  </div>

  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: 12,
      padding: 24,
      textAlign: "center",
    }}
  >
    <p style={{ margin: 0, fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>
      Estimated Yield
    </p>
    <p style={{ fontSize: 40, fontWeight: 700, margin: "10px 0" }}>136</p>
    <p style={{ margin: 0 }}>Projected multifamily units</p>
  </div>
</div>
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
  <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", marginBottom: 16 }}>
    Built by Multifamily Developers
  </h2>

  <p
    style={{
      maxWidth: 800,
      fontSize: "clamp(16px, 2.5vw, 18px)",
      lineHeight: 1.7,
      marginBottom: 16,
    }}
  >
    <strong>Dealflow AI was built by operators actively evaluating multifamily
    development sites</strong> in Arkansas, Oklahoma, and surrounding Midwest markets.
    The purpose is simple: identify viable sites faster, eliminate bad dirt early,
    and focus time on deals that warrant real diligence.
  </p>

  <p
    style={{
      maxWidth: 800,
      fontSize: "clamp(16px, 2.5vw, 18px)",
      lineHeight: 1.7,
    }}
  >
    <strong>Our screening reports mirror real-world early-stage underwriting</strong>
    performed by developers before engaging full civil, architectural, and financial teams.
  </p>
</section>
<section style={{ marginTop: 60 }}>
  <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", marginBottom: 16 }}>
    Focused on Midwest Multifamily Markets
  </h2>

  <p
    style={{
      maxWidth: 800,
      fontSize: "clamp(16px, 2.5vw, 18px)",
      lineHeight: 1.7,
      marginBottom: 16,
    }}
  >
    <strong>Initial coverage focuses on Arkansas, Oklahoma, and surrounding Midwest markets</strong>
    where multifamily development opportunities remain strong and land pricing is still attainable.
  </p>

  <p
    style={{
      maxWidth: 800,
      fontSize: "clamp(16px, 2.5vw, 18px)",
      lineHeight: 1.7,
    }}
  >
    The platform is designed to expand into a nationwide land screening tool
    supporting developers across the entire lower 48.
  </p>
</section>
<section style={{ marginTop: 80 }}>
  <h2 style={{ textAlign: "center", marginBottom: 30 }}>
    Parcel Overview
  </h2>

  <p
    style={{
      textAlign: "center",
      maxWidth: 700,
      margin: "0 auto 30px auto",
      lineHeight: 1.6,
    }}
  >
    Evaluate sites faster with parcel-level screening, aerial context,
    and early-stage multifamily feasibility analysis.
  </p>

  <div style={{ textAlign: "center" }}>
    <Image
      src="/parcel-map.jpg"
      width={900}
      height={600}
      alt="Parcel map preview"
      style={{
        width: "100%",
        height: "auto",
        borderRadius: 12,
      }}
    />
  </div>
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