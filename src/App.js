import "./styles.css";
import Sidebar from "./components/Sidebar";
import TopStats from "./components/TopStats";
import CustomersGrowth from "./components/CustomersGrowth";
import SummaryRow from "./components/SummaryRow";
import BottomRow from "./components/BottomRow";

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <TopStats />
        <CustomersGrowth />
        <SummaryRow />
        <BottomRow />
      </main>
    </div>
  );
}
