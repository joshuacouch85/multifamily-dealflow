export default function DemoPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto" }}>
      <h1>Request a Demo</h1>
      <p>
        Tell us your market, target product, or a parcel you want screened.
      </p>

      <form
        action="https://formsubmit.co/joshua.couch85@gmail.com"
        method="POST"
        style={{
          display: "grid",
          gap: 16,
          marginTop: 24,
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          style={{ padding: 12, fontSize: 16 }}
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          style={{ padding: 12, fontSize: 16 }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          style={{ padding: 12, fontSize: 16 }}
        />

        <textarea
          name="notes"
          placeholder="Target markets, acreage, product type, or sample parcel"
          rows={6}
          style={{ padding: 12, fontSize: 16 }}
        />

        <button
          type="submit"
          style={{
            padding: 14,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </main>
  );
}