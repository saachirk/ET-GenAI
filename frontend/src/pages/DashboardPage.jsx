import { useNavigate } from "react-router-dom";
import "../styles/DashboardPage.css";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      
      {/* Header */}
      <div className="dashboard-header">
        <h1>Hi👋</h1>
        <p>Your financial dashboard</p>
      </div>

      {/* Recommendations */}
      <h2 className="section-title">Recommended</h2>

      <div className="card">
        <h3>📈 ET Prime</h3>
        <p>Premium insights for better decisions</p>
      </div>

      <div className="card">
        <h3>💰 Start SIP</h3>
        <p>Build wealth monthly</p>
      </div>

      {/* Button */}
      <div className="button-group">
        <button
          className="primary-btn"
          onClick={() => navigate("/chat")}
        >
          Open AI Navigator
        </button>
      </div>

    </div>
  );
};

export default DashboardPage;