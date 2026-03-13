export default function OrderPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto" }}>
      <h1>Order a Site Screen</h1>
      <p>
        Submit a parcel or address for a multifamily feasibility screen.
      </p>

      <section
        style={{
          marginTop: 24,
          padding: 24,
          border: "1px solid #ddd",
          borderRadius: 12,
        }}
      >
        <h2>Instant Screen — $149</h2>
        <p>
          High-level parcel review with estimated unit yield, risk flags, and a
          pursue / caution / pass recommendation.
        </p>
        <a
          href="https://buy.stripe.com/YOUR-INSTANT-SCREEN-LINK"
          style={{
            display: "inline-block",
            marginTop: 16,
            padding: "12px 18px",
            border: "1px solid #111",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          Buy Instant Screen
        </a>
      </section>

      <section
        style={{
          marginTop: 24,
          padding: 24,
          border: "1px solid #ddd",
          borderRadius: 12,
        }}
      >
        <h2>Developer Report — $399</h2>
        <p>
          Deeper feasibility report with unit scenarios, rough development cost,
          and recommended due diligence.
        </p>
        <a
          href="https://buy.stripe.com/YOUR-DEVELOPER-REPORT-LINK"
          style={{
            display: "inline-block",
            marginTop: 16,
            padding: "12px 18px",
            border: "1px solid #111",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          Buy Developer Report
        </a>
      </section>

      <section
        style={{
          marginTop: 24,
          padding: 24,
          border: "1px solid #ddd",
          borderRadius: 12,
        }}
      >
        <h2>What Happens Next</h2>
        <ol>
          <li>You submit your parcel details</li>
          <li>You complete payment</li>
          <li>We review the site and generate your report</li>
          <li>You receive your screen and next-step recommendation</li>
        </ol>
      </section>
    </main>
  );
}