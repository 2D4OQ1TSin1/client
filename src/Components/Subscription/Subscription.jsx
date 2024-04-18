import React from "react";
import "./Subscription.css";

const Subscription = () => {
  return (
    <div className="subscription">
      <h1>Get Exclusive Email Offers</h1>
      <p>Subscribe to our newsletter to stay in tune!</p>
      <div>
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscription;
