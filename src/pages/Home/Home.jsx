import React from "react";
import "./style.css";
import listImg from "./../../img/Calendar.svg";
import DoneListImg from "./../../img/Activity.svg";

import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="Home">
      <div className="List">
          <img src={listImg} alt="list" />
        <Link to="/todolist">
          <p>Задачи</p>
        </Link>
      </div>
      <div className="Donelist">
          <img src={DoneListImg} alt="list" />
        <Link to='/done'>
          <p>Выполнено</p>
        </Link>
      </div>
    </div>
  );
};
