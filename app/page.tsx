export default function Home() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto" }}>
      <section style={{ padding: "60px 0" }}>
        <p style={{ fontSize: 14, letterSpacing: 1, textTransform: "uppercase" }}>
          Operator-built acquisition intelligence
        </p>

        <h1 style={{ fontSize: 48, marginTop: 10, marginBottom: 20 }}>
          Pre-Screened Multifamily Land Deals, Delivered Automatically
        </h1>

        <p style={{ fontSize: 20, lineHeight: 1.6, maxWidth: 800 }}>
          We scan listed and off-market land parcels, screen them for multifamily
          feasibility, and deliver ranked development opportunities with unit
          yield, land cost per door, and major site risk flags.
        </p>

        <div style={{ display: "flex", gap: 16, marginTop: 30, flexWrap: "wrap" }}>
          <a
            href="/demo"
            style={{
              padding: "14px 20px",
              border: "1px solid #111",
              borderRadius: 10,
              textDecoration: "none",
              color: "#111",
              fontWeight: 600,
            }}
          >
            Request a Demo
          </a>

          <a
            href="/order"
            style={{
              padding: "14px 20px",
              border: "1px solid #111",
              borderRadius: 10,
              textDecoration: "none",
              color: "#111",
              fontWeight: 600,
            }}
          >
            Order a Site Screen
          </a>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 20 }}>
          <h3>Estimated Unit Yield</h3>
          <p>Quick scenario-based unit count estimates by product type.</p>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 20 }}>
          <h3>Land Cost Per Door</h3>
          <p>Instant visibility into whether basis is likely workable.</p>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 20 }}>
          <h3>Major Risk Flags</h3>
          <p>Utilities, pricing, floodplain, access, and site constraints.</p>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 20 }}>
          <h3>Go / No-Go Guidance</h3>
          <p>Pursue, pursue with caution, or pass.</p>
        </div>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>Who This Is For</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Multifamily developers screening acquisition opportunities</li>
          <li>Land brokers packaging sites for buyers</li>
          <li>Investors evaluating development potential before diligence</li>
        </ul>
      </section>

      <section style={{ marginTop: 60 }}>
        <h2>Pricing</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            marginTop: 20,
          }}
        >
          <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 24 }}>
            <h3>Instant Screen</h3>
            <p style={{ fontSize: 28, fontWeight: 700 }}>$149</p>
            <p>Quick parcel screen with yield, flags, and recommendation.</p>
          </div>

          <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 24 }}>
            <h3>Developer Report</h3>
            <p style={{ fontSize: 28, fontWeight: 700 }}>$399</p>
            <p>Deeper report with scenario analysis and diligence guidance.</p>
          </div>

          <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 24 }}>
            <h3>Subscription Feed</h3>
            <p style={{ fontSize: 28, fontWeight: 700 }}>$1,500/mo</p>
            <p>Recurring feed of ranked listed and off-market opportunities.</p>
          </div>
        </div>
      </section>
    </main>
  );
}