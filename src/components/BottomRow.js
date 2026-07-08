import { Plus } from "lucide-react";

const chatAvatars = [
  { seed: "chat-amelia-portrait", unread: true },
  { seed: "chat-devon-portrait", unread: true },
  { seed: "chat-omar-portrait", unread: false },
  { seed: "chat-liam-portrait", unread: false },
];

const topStates = [
  { code: "NY", value: "120K", pct: 100 },
  { code: "MA", value: "80K", pct: 68 },
  { code: "NH", value: "70K", pct: 58 },
  { code: "OR", value: "50K", pct: 42 },
];

const newDeals = [
  "Fruit2Go",
  "Marshall's Mkt",
  "CCNT",
  "Joana Mini-market",
  "Little Brazil Vegan",
  "Target",
  "Organic Place",
  "Morello's",
];

export default function BottomRow() {
  return (
    <section className="row bottom-row">
      <article className="card chats-card">
        <h3 className="card-title lg">Chats</h3>
        <p className="stat-caption">2 unread messages</p>
        <div className="chat-avatars">
          {chatAvatars.map((a) => (
            <div className="chat-avatar-wrap" key={a.seed}>
              <img src={`https://picsum.photos/seed/${a.seed}/64/64`} alt="" />
              {a.unread && <span className="chat-dot" />}
            </div>
          ))}
        </div>
      </article>

      <article className="card states-card">
        <h3 className="card-title lg">Top states</h3>
        <ul className="state-bars">
          {topStates.map((s) => (
            <li key={s.code} className="state-bar-row">
              <div className="state-bar" style={{ width: `${s.pct}%` }}>
                <span className="state-code">{s.code}</span>
              </div>
              <span className="state-value">{s.value}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="card deals-card">
        <h3 className="card-title lg">New deals</h3>
        <div className="deal-pills">
          {newDeals.map((d) => (
            <button className="deal-pill" type="button" key={d}>
              <span className="deal-plus">
                <Plus size={14} strokeWidth={2.4} />
              </span>
              {d}
            </button>
          ))}
        </div>
      </article>
    </section>
  );
}
