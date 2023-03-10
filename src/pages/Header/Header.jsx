import React from "react";
import "./style.css";
import img from './../../img/LogoRt.svg'
import profile from './../../img/Profile.svg'
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <Link to='/'><img src={img} alt="" /></Link> 
        <p>Доброе утро, Андрей!</p>
        <button className="logo"><img src={profile} alt="logo" /></button>
      </div>
    </div>
  );
};
