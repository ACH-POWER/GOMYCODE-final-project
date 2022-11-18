import React from "react";

const sprites = () => {
  return (
    <div className="spritesSection">
      <div className="sprites">
        <div className="sprites-item">
          <div className="sprites-icon sprites-icon-1"></div>
          <div className="sprites-info">
            <h3>free Delivery</h3>
            <span>free Shipping On All Order</span>
          </div>
        </div>
        <div className="sprites-item">
          <div className="sprites-icon sprites-icon-2"></div>
          <div className="sprites-info">
            <h3>Money Return</h3>
            <span>Back Guarantee in 7 days</span>
          </div>
        </div>
        <div className="sprites-item">
          <div className="sprites-icon sprites-icon-3"></div>
          <div className="sprites-info">
            <h3>Member Discount</h3>
            <span>On every order over $130.00</span>
          </div>
        </div>
        <div className="sprites-item">
          <div className="sprites-icon sprites-icon-4"></div>
          <div className="sprites-info">
            <h3>Online Support</h3>
            <span>Support 24 hours a day</span>
          </div>
        </div>
        <div className="sprites-item">
          <div className="sprites-icon sprites-icon-5"></div>
          <div className="sprites-info">
            <h3>Return Policy</h3>
            <span>Send within 30 days</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="sapce"></div>
    </div>
  );
};

export default sprites;
