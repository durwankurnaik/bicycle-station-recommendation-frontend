import { Routes, Route, Link } from "react-router-dom";
import Age from "../pages/Age/Age";
import CustomerType from "../pages/CustomerType/CustomerType";
import DateTime from "../pages/DateTime/DateTime";
import Gender from "../pages/Gender/Gender";
import Usage from "../pages/Usage/Usage";
import WeatherImpact from "../pages/WeatherImpact/WeatherImpact";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="tab">
        <li>
          <Link to="/">Age Distribution</Link>
        </li>
        <li>
          <Link to="customer-type">Customer Type</Link>
        </li>
        <li>
          <Link to="date-time">Date-Time Analysis</Link>
        </li>
        <li>
          <Link to="gender">Gender Distribution</Link>
        </li>
        <li>
          <Link to="usage">Usage Analysis</Link>
        </li>
        <li>
          <Link to="weather-impact">Weather Impact Analysis</Link>
        </li>
      </div>

      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<Age />} />
          <Route path="/customer-type" element={<CustomerType />} />
          <Route path="/date-time" element={<DateTime />} />
          <Route path="/gender" element={<Gender />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/weather-impact" element={<WeatherImpact />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;
