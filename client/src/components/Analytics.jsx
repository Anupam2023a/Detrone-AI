

export const Analytics = () => {
  return (
    <div className="analytics-section">
      <h1>Analytics</h1>
      <div className="analytics-grid">
        <div className="analytics-card">
          <h2>Website Traffic</h2>
          <p>10,000 visitors last month</p>
          <span className="analytics-icon">
            <i className="fas fa-chart-line"></i>
          </span>
        </div>
        <div className="analytics-card">
          <h2>Conversion Rate</h2>
          <p>25% conversion rate last quarter</p>
          <span className="analytics-icon">
            <i className="fas fa-chart-pie"></i>
          </span>
        </div>
        <div className="analytics-card">
          <h2>Average Order Value</h2>
          <p>$100 average order value last year</p>
          <span className="analytics-icon">
            <i className="fas fa-chart-bar"></i>
          </span>
        </div>
      </div>
    </div>
  );
};