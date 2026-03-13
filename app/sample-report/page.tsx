export default function SampleReportPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto" }}>
      <h1>Sample Report</h1>
      <p>
        Here is an example of the type of multifamily land screening report we
        provide.
      </p>

      <section style={{ marginTop: 30, padding: 24, border: "1px solid #ddd", borderRadius: 12 }}>
        <h2>Example Parcel</h2>
        <p><strong>Location:</strong> Rogers, Arkansas</p>
        <p><strong>Parcel Size:</strong> 14.0 acres</p>
        <p><strong>Asking Price:</strong> $2,000,000</p>
        <p><strong>Likely Product Type:</strong> Garden Apartments</p>
      </section>

      <section style={{ marginTop: 24, padding: 24, border: "1px solid #ddd", borderRadius: 12 }}>
        <h2>Estimated Yield</h2>
        <p><strong>Net Usable Acres:</strong> 8.4</p>
        <p><strong>Estimated Units:</strong> 134</p>
        <p><strong>Land Cost Per Door:</strong> $14,925</p>
      </section>

      <section style={{ marginTop: 24, padding: 24, border: "1px solid #ddd", borderRadius: 12 }}>
        <h2>Major Risk Flags</h2>
        <ul>
          <li>Elevated land basis relative to target unit count</li>
          <li>Unknown sewer capacity</li>
          <li>Stormwater burden should be reviewed during diligence</li>
        </ul>
      </section>

      <section style={{ marginTop: 24, padding: 24, border: "1px solid #ddd", borderRadius: 12 }}>
        <h2>Recommendation</h2>
        <p>
          <strong>Pursue with caution.</strong> This site may work for a garden
          multifamily product, but pricing and utility verification are the key
          gating items.
        </p>
      </section>
    </main>
  );
}