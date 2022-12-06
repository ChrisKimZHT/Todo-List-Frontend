import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.scss';


const LoginPage = () => {
  return (
    <div className="card p-5 div-login">
      <h1 className="mb-5 text-center">登录</h1>
      <div className="input-group mb-4">
        <span className="input-group-text">账号</span>
        <input type="text" className="form-control" />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">密码</span>
        <input type="password" className="form-control" />
      </div>
      <p className="text-end mb-3">没有账号？这就<Link to="/register">注册</Link></p>
      <button type="button" className="btn btn-primary">
        <i className="bi bi-rocket-takeoff me-2"></i>
        登录！
      </button>
    </div>
  );
}

export default LoginPage;

