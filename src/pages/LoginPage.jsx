import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { service } from '../service/service';
import useAlert from '../utils/useAlert.js'
import './LoginPage.scss';


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setAlert } = useAlert();

  const handleSubmit = async () => {
    await service.auth.login(username, password)
      .then((res) => {
        if (res.data.status === 0) {
          setAlert("登录成功", "success", 3000);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("uid", res.data.uid);
          localStorage.setItem("username", username);
          window.location.reload();
          window.location.href = "./home";
        }
        else {
          setAlert(`登录失败：${res.data.message}`, "warning", 3000);
        }
      })
      .catch((err) => { setAlert(`[ERROR]: ${err.message} in /auth/login`, "danger", 0) })
  }

  return (
    <div className="card p-5 div-login">
      <h1 className="mb-5 text-center">登录</h1>
      <div className="input-group mb-4">
        <span className="input-group-text">账号</span>
        <input type="text" className="form-control" value={username}
          onChange={(x) => {
            const val = x.target.value;
            setUsername(val);
          }}
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">密码</span>
        <input type="password" className="form-control" value={password}
          onChange={(x) => {
            const val = x.target.value;
            setPassword(val);
          }}
        />
      </div>
      <p className="text-end mb-3">没有账号？这就<Link to="/register">注册</Link></p>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        <i className="bi bi-rocket-takeoff me-2"></i>
        登录！
      </button>
    </div>
  );
}

export default LoginPage;

