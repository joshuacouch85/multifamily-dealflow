export default function OrderPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px 60px" }}>
      <section style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: "clamp(30px, 5vw, 42px)", marginBottom: 12 }}>
          Submit a Site for Screening
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 18px)",
            lineHeight: 1.7,
            maxWidth: 760,
          }}
        >
          Send us a parcel, address, or land opportunity for multifamily review.
          We will use the information below to perform an initial screening and
          recommend the appropriate next step.
        </p>
      </section>

      <form
        action="https://formsubmit.co/joshua.couch85@gmail.com"
        method="POST"
        style={{
          display: "grid",
          gap: 20,
        }}
      >
        <input type="hidden" name="_subject" value="New Parcel Screening Submission" />
        <input type="hidden" name="_captcha" value="false" />

        <section
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 24,
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: 20 }}>Contact Information</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                style={{ width: "100%", padding: 12, fontSize: 16 }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Company
              </label>
              <input
                type="text"
                name="company"
                placeholder="Company name"
                style={{ width: "100%", padding: 12, fontSize: 16 }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                style={{ width: "100%", padding: 12, fontSize: 16 }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Phone
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                style={{ width: "100%", padding: 12, fontSize: 16 }}
              />
            </div>
          </div>
        </section>

        <section
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 24,
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: 20 }}>Site Information</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Parcel Number / APN
              </label>
              <input
                type="text"
                name="parcel_number"
                placeholder="APN or parcel number"
                style={{ width: "100%", padding: 12, fontSize: 16 }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Property Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Street address"
                style={{ width: "100%", padding: 12, fontSize: 16 }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                City / State
              </label>
              <input
                type="text"
                name="city_state"
                placeholder="City / State"
                style={{ width: "100%", padding: 12, fontSize: 16 }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                County
              </label>
              <input
                type="text"
                name="county"
                placeholder="County"
                style={{ width: "100%", padding: 12, fontSize: 16 }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Approximate Acreage
              </label>
              <input
                type="text"
                name="acreage"
                placeholder="Ex: 14.2"
                style={{ width: "100%", padding: 12, fontSize: 16 }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Asking Price
              </label>
              <input
                type="text"
                name="asking_price"
                placeholder="Ex: $2,000,000"
                style={{ width: "100%", padding: 12, fontSize: 16 }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Current Zoning
              </label>
              <input
                type="text"
                name="zoning"
                placeholder="Ex: R-3, MF, Planned Development"
                style={{ width: "100%", padding: 12, fontSize: 16 }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Target Product Type
              </label>
              <select
                name="target_product"
                style={{ width: "100%", padding: 12, fontSize: 16 }}
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="Garden Apartments">Garden Apartments</option>
                <option value="Townhomes">Townhomes</option>
                <option value="Wrap / Podium">Wrap / Podium</option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </div>
          </div>
        </section>

        <section
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 24,
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: 20 }}>Utilities and Notes</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Water
              </label>
              <select name="water" style={{ width: "100%", padding: 12, fontSize: 16 }} defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option value="Available">Available</option>
                <option value="Nearby / Likely">Nearby / Likely</option>
                <option value="Unknown">Unknown</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Sewer
              </label>
              <select name="sewer" style={{ width: "100%", padding: 12, fontSize: 16 }} defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option value="Available">Available</option>
                <option value="Nearby / Likely">Nearby / Likely</option>
                <option value="Unknown">Unknown</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Electric
              </label>
              <select name="electric" style={{ width: "100%", padding: 12, fontSize: 16 }} defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option value="Available">Available</option>
                <option value="Nearby / Likely">Nearby / Likely</option>
                <option value="Unknown">Unknown</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
                Gas
              </label>
              <select name="gas" style={{ width: "100%", padding: 12, fontSize: 16 }} defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option value="Available">Available</option>
                <option value="Nearby / Likely">Nearby / Likely</option>
                <option value="Unknown">Unknown</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
              Deal Notes
            </label>
            <textarea
              name="notes"
              rows={7}
              placeholder="Add any details you know about the site, utilities, topography, pricing expectations, target unit count, or known constraints."
              style={{ width: "100%", padding: 12, fontSize: 16 }}
            />
          </div>
        </section>

        <section
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 24,
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: 12 }}>Screening Options</h2>
          <p style={{ marginTop: 0, lineHeight: 1.7 }}>
            <strong>Instant Screen:</strong> $149 — High-level parcel review with
            yield estimate, risk flags, and pursue / caution / pass guidance.
          </p>
          <p style={{ lineHeight: 1.7 }}>
            <strong>Developer Report:</strong> $399 — Expanded screening with
            scenario analysis, rough development framework, and diligence guidance.
          </p>
        </section>

        <button
          type="submit"
          style={{
            padding: "16px 24px",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            borderRadius: 10,
            border: "1px solid #111",
            background: "white",
          }}
        >
          Submit Site for Screening
        </button>
      </form>
    </main>
  );
}