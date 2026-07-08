export default function SummaryRow() {
  return (
    <section className="row summary-row">
      <article className="card summary-card">
        <h3 className="card-title">Top month</h3>
        <div className="summary-value">November</div>
        <span className="summary-sub">2019</span>
      </article>

      <article className="card summary-card">
        <h3 className="card-title">Top year</h3>
        <div className="summary-value">2023</div>
        <span className="summary-sub">96K sold so far</span>
      </article>

      <article className="card summary-card buyer-card">
        <h3 className="card-title">Top buyer</h3>
        <img
          src="https://picsum.photos/seed/maggie-johnson-portrait/72/72"
          alt="Maggie Johnson"
          className="buyer-avatar"
        />
        <div className="buyer-meta">
          <span className="buyer-name">Maggie Johnson</span>
          <span className="buyer-org">Oasis Organic Co.</span>
        </div>
      </article>
    </section>
  );
}
