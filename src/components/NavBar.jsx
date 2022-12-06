import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import icon from '../static/images/icon.png';


const NavBar = () => {
  const currentPath = useLocation().pathname;
  return (
    <nav className="navbar sticky-top navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={icon} alt="icon" width="25" height="25" className="d-inline-block align-text-top"></img>
          &nbsp;提醒事项
        </Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link className={`nav-link ${localStorage.getItem("token") === null ? "disabled" : ""} ${currentPath.substring(0, 5) === "/home" ? "active" : ""}`} to="/home">首页</Link>
            <Link className={`nav-link ${localStorage.getItem("token") === null ? "disabled" : ""} ${currentPath.substring(0, 5) === "/todo" ? "active" : ""}`} to="/todo">待办</Link>
            <Link className={`nav-link ${localStorage.getItem("token") === null ? "disabled" : ""} ${currentPath.substring(0, 5) === "/note" ? "active" : ""}`} to="/note">便签</Link>
          </div>
        </div>
      </div>
    </nav >
  );
}

export default NavBar;