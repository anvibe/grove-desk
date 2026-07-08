import {
  Citrus,
  Search,
  LayoutDashboard,
  Users,
  ClipboardList,
  Globe2,
  MessageCircle,
  Handshake,
  UploadCloud,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Customers", chevron: true },
  { icon: ClipboardList, label: "All reports" },
  { icon: Globe2, label: "Geography" },
  { icon: MessageCircle, label: "Conversations" },
  { icon: Handshake, label: "Deals" },
  { icon: UploadCloud, label: "Export" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="brand">
          <span className="brand-icon">
            <Citrus size={20} strokeWidth={2.4} />
          </span>
          <span className="brand-name">GroveDesk</span>
        </div>

        <label className="search-box">
          <Search size={16} strokeWidth={2} />
          <input type="text" placeholder="Search" aria-label="Search" />
        </label>

        <nav className="nav-list">
          {navItems.map(({ icon: Icon, label, active, chevron }) => (
            <button
              key={label}
              className={`nav-item${active ? " active" : ""}`}
              type="button"
            >
              <Icon size={18} strokeWidth={2} />
              <span>{label}</span>
              {chevron && <ChevronDown size={16} className="nav-chevron" />}
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="user-card">
          <img
            src="https://picsum.photos/seed/gustavo-xavier-admin/64/64"
            alt="Gustavo Xavier"
            className="user-avatar"
            data-cms-key="image_1"
          />
          <div className="user-meta">
            <span className="user-name">Gustavo Xavier</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
        <button className="sidebar-link" type="button">
          <Settings size={17} strokeWidth={2} />
          <span>Settings</span>
        </button>
        <button className="sidebar-link logout" type="button">
          <LogOut size={17} strokeWidth={2} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
