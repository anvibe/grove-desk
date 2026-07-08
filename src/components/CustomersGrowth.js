import { useState } from "react";
import { MessageCircle, Star, Pencil, MoreVertical, ArrowRight } from "lucide-react";

const customers = [
  {
    id: "chris",
    name: "Chris Friedkly",
    org: "Riverside Market",
    seed: "chris-friedkly-portrait",
  },
  {
    id: "maggie",
    name: "Maggie Johnson",
    org: "Oasis Organic Co.",
    seed: "maggie-johnson-portrait",
    highlighted: true,
  },
  {
    id: "gael",
    name: "Gael Harry",
    org: "Northport Fruit Co.",
    seed: "gael-harry-portrait",
  },
  {
    id: "jenna",
    name: "Jenna Sullivan",
    org: "Cascade Grocers",
    seed: "jenna-sullivan-portrait",
  },
];

const growthPoints = [
  { year: "2016", value: 6 },
  { year: "2017", value: 22 },
  { year: "2018", value: 46 },
  { year: "2019", value: 58 },
  { year: "2020", value: 12 },
  { year: "2021", value: 24 },
  { year: "2022", value: 55 },
  { year: "2023", value: 96 },
];

function buildPath(points, width, height, max) {
  const stepX = width / (points.length - 1);
  return points
    .map((p, i) => {
      const x = i * stepX;
      const y = height - (p.value / max) * height;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

export default function CustomersGrowth() {
  const [activeId, setActiveId] = useState("maggie");
  const width = 620;
  const height = 220;
  const max = 100;
  const linePath = buildPath(growthPoints, width, height, max);
  const areaPath = `${linePath} L ${width} ${height} L 0 ${height} Z`;

  return (
    <section className="row split-row">
      <article className="card customers-card">
        <div className="card-header">
          <h3 className="card-title lg" data-cms-key="heading_10">Customers</h3>
          <button className="sort-btn" type="button">
            Sort by <strong>Newest</strong>
          </button>
        </div>

        <ul className="customer-list">
          {customers.map((c) => (
            <li
              key={c.id}
              className={`customer-row${activeId === c.id ? " active" : ""}`}
              onMouseEnter={() => setActiveId(c.id)}
            >
              <img
                src={`https://picsum.photos/seed/${c.seed}/72/72`}
                alt={c.name}
                className="customer-avatar"
              />
              <div className="customer-meta">
                <span className="customer-name">{c.name}</span>
                <span className="customer-org">{c.org}</span>
              </div>
              {activeId === c.id && (
                <div className="customer-actions">
                  <button type="button" aria-label="Message">
                    <MessageCircle size={16} />
                  </button>
                  <button type="button" aria-label="Favorite">
                    <Star size={16} />
                  </button>
                  <button type="button" aria-label="Edit">
                    <Pencil size={16} />
                  </button>
                  <span className="divider" />
                  <button type="button" aria-label="More">
                    <MoreVertical size={16} />
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>

        <a className="card-link" href="#customers">
          All customers <ArrowRight size={15} />
        </a>
      </article>

      <article className="card growth-card">
        <div className="card-header">
          <h3 className="card-title lg" data-cms-key="heading_11">Growth</h3>
          <button className="sort-btn" type="button">
            <strong>Yearly</strong>
          </button>
        </div>

        <div className="growth-chart-wrap">
          <div className="growth-axis">
            <span>100k</span>
            <span>50k</span>
            <span>20k</span>
            <span>10k</span>
            <span>0</span>
          </div>
          <svg viewBox={`0 0 ${width} ${height}`} className="growth-svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(52,168,83,0.35)" />
                <stop offset="100%" stopColor="rgba(52,168,83,0)" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#growthFill)" stroke="none" />
            <path d={linePath} className="growth-line" />
          </svg>
        </div>
        <div className="growth-years">
          {growthPoints.map((p) => (
            <span key={p.year}>{p.year}</span>
          ))}
        </div>
      </article>
    </section>
  );
}
