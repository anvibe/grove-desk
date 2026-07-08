import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function TopStats() {
  return (
    <section className="row top-row">
      <article className="card stat-card">
        <h3 className="card-title">Revenues</h3>
        <div className="stat-value-row">
          <span className="stat-value">15%</span>
          <span className="stat-trend up">
            <ArrowUpRight size={20} strokeWidth={2.4} />
          </span>
        </div>
        <p className="stat-caption">Increase compared to last week</p>
        <a className="card-link" href="#revenues">
          Revenues report <ArrowRight size={15} />
        </a>
      </article>

      <article className="card stat-card">
        <h3 className="card-title">Lost deals</h3>
        <div className="stat-value-row">
          <span className="stat-value">4%</span>
        </div>
        <p className="stat-caption">You closed 96 out of 100 deals</p>
        <a className="card-link" href="#deals">
          All deals <ArrowRight size={15} />
        </a>
      </article>

      <article className="card goal-card">
        <h3 className="card-title">Quarter goal</h3>
        <div className="goal-gauge">
          <svg viewBox="0 0 200 110" className="gauge-svg">
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              className="gauge-track"
            />
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              className="gauge-fill"
              style={{ strokeDasharray: "251.2", strokeDashoffset: "40.2" }}
            />
          </svg>
          <span className="gauge-value">84%</span>
        </div>
        <a className="card-link" href="#goals">
          All goals <ArrowRight size={15} />
        </a>
      </article>
    </section>
  );
}
