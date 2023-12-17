import React from 'react';
import './style.css'; // Make sure to adjust the path according to your project structure

const Cart = (props) => {
  return (
    <div className="card">
      <div className="profile-pic">
        <img
          src={props.Link}
          alt="Profile Pic"
        />
      </div>

      <div className="details">
        <div className="content">
          <h2>{props.name}</h2>
          <p className="tag">Weidth :{props.width}x{props.height}</p>
          <p className="about">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            minima provident esse hic
          </p>
        </div>

        <div className="buttons">
          <div className="social">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-github"></i>
          </div>
          <a href="#" className="link">
            View <i className="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
