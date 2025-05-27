import { useEffect } from "react";

export const Service = () => {
  useEffect(() => {
    document.title = "Detrone AI | Services";
  }, []);

  return (
    <section className="service-hero-section">
      <div className="service-hero-content">
        <h1 className="service-hero-title">Our Services</h1>
        <p className="service-hero-desc">
          Explore the cutting-edge solutions and features DETRONE AI offers to revolutionize your mobility, convenience, and security.
        </p>
      </div>
      <div className="service-features-grid">
        <div className="service-feature-card">
          <h3>Smart Ride Matching</h3>
          <p>
            Get matched with the nearest, most reliable drivers using our intelligent AI-powered algorithms for faster pickups and better routes.
          </p>
        </div>
        <div className="service-feature-card">
          <h3>Real-Time Vehicle Tracking</h3>
          <p>
            Track your ride live, share your trip status, and stay updated with accurate ETAs, all through our seamless app interface.
          </p>
        </div>
        <div className="service-feature-card">
          <h3>Advanced Safety</h3>
          <p>
            Enjoy peace of mind with verified drivers, 24/7 support, and in-app emergency features designed for your security.
          </p>
        </div>
        <div className="service-feature-card">
          <h3>Flexible Payments</h3>
          <p>
            Pay your way with secure cashless transactions—supporting cards, UPI, wallets, and more.
          </p>
        </div>
        <div className="service-feature-card">
          <h3>Business Solutions</h3>
          <p>
            Manage business travel, set up corporate accounts, and access analytics with Detrone AI for Business.
          </p>
        </div>
        <div className="service-feature-card">
          <h3>Customer Support</h3>
          <p>
            Our dedicated support team is always ready to assist you, ensuring smooth and hassle-free rides every time.
          </p>
        </div>
      </div>
    </section>
  );
};