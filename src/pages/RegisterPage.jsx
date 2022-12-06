import React from 'react';
import './RegisterPage.scss';

const RegisterPage = () => {
  return (
    <div className="card p-5 div-register">
      <h1 className="mb-5 text-center">注册</h1>
      <div className="input-group mb-4">
        <span className="input-group-text">账号</span>
        <input type="text" className="form-control" />
      </div>
      <div className="input-group mb-4">
        <span className="input-group-text">密码</span>
        <input type="password" className="form-control" />
      </div>
      <div className="input-group mb-5">
        <span className="input-group-text">确认</span>
        <input type="password" className="form-control" />
      </div>
      <button type="button" className="btn btn-primary">
        <i className="bi bi-rocket-takeoff me-2"></i>
        注册！
      </button>
    </div>
  );
}

export default RegisterPage;