import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import icon from '../static/images/icon.png';
import './NavBar.scss';

const NavBar = () => {
  const currentPath = useLocation().pathname;

  const handleLogout = () => {
    localStorage.clear("uid");
    localStorage.clear("username");
    localStorage.clear("token");
    window.location.reload();
    window.location.href = "./login";
  }

  return (
    <nav className="navbar sticky-top navbar-expand navbar-dark bg-dark div-navbar">
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
        {localStorage.getItem("uid") === null ? (
          <span className="navbar-text float-end">
            <Link to="/login">登录</Link>
            &nbsp;/&nbsp;
            <Link to="/register">注册</Link>
          </span>
        ) : (
          <span className="navbar-text float-end">
            {`${localStorage.getItem("username")} (UID: ${localStorage.getItem("uid")})`}
            <span className="ms-2 logout" onClick={handleLogout}>登出</span>
          </span>
        )}
      </div>
    </nav >
  );
}

export default NavBar;