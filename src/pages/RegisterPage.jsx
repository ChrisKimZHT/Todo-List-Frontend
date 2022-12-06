import React from 'react';
import { useState } from 'react';
import useAlert from '../utils/useAlert.js'
import { service } from '../service/service';
import { Link } from 'react-router-dom';
import './RegisterPage.scss';

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const { setAlert } = useAlert();

  const handleSubmit = async () => {
    if (password !== confirm) {
      setAlert("两次输入密码不一致", "warning", 3000);
      return;
    }
    if (username.length < 3 || username.length > 16) {
      setAlert("账号长度不合法", "warning", 3000);
      return;
    }
    if (password.length < 6 || password.length > 16) {
      setAlert("密码长度不合法", "warning", 3000);
      return;
    }
    await service.auth.register(username, password)
      .then((res) => {
        if (res.data.status === 0)
          setAlert("注册成功", "success", 3000);
        else
          setAlert(`注册失败：${res.data.message}`, "warning", 3000);
      })
      .catch((err) => { setAlert(`[ERROR]: ${err.message} in /auth/register`, "danger", 0) })
  }

  return (
    <div className="card p-5 div-register">
      <h1 className="mb-5 text-center">注册</h1>
      <div className="input-group mb-4">
        <span className="input-group-text">账号</span>
        <input type="text" className="form-control" value={username}
          onChange={(x) => {
            const val = x.target.value;
            setUsername(val);
          }}
          placeholder="长度3~16位"
        />
      </div>
      <div className="input-group mb-4">
        <span className="input-group-text">密码</span>
        <input type="password" className="form-control" value={password}
          onChange={(x) => {
            const val = x.target.value;
            setPassword(val);
          }}
          placeholder="长度6~16位"
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">确认</span>
        <input type="password" className="form-control" value={confirm}
          onChange={(x) => {
            const val = x.target.value;
            setConfirm(val);
          }}
          placeholder="重复密码"
        />
      </div>
      <p className="text-end mb-3">已有账号？这就<Link to="/login">登录</Link></p>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        <i className="bi bi-rocket-takeoff me-2"></i>
        注册！
      </button>
    </div>
  );
}

export default RegisterPage;