import "../styles/Navbar.css";
import {FaWallet,FaChartPie,FaCog,FaExchangeAlt} from "react-icons/fa";
function Navbar({
  darkMode,
  setDarkMode,
}) {
  return (
    <nav>
      <h1>Personal Finanace Tracker</h1>
      <ul>
        <li><FaWallet /> Dashboard</li>
        <li><FaExchangeAlt /> Transactions</li>
        <li><FaChartPie /> Analytics</li>
        <li><FaCog /> Settings</li>
      </ul>
      <button onClick={() => setDarkMode(!darkMode)}> {darkMode ? "☀️ Light" : "🌙 Dark"} </button>
    </nav>
  );
}

export default Navbar
