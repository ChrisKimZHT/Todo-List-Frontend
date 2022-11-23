import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayTodo.scss';

const DisplayTodo = (props) => {
  return (
    <div className="card div-display-todo">
      <div className="card-header">
        {`#${props.id}`}
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <hr />
        <ul>
          <li>类别：{props.isDeadLine ? "DDL" : "日程"}</li>
          <div style={{ display: props.isDeadLine ? "none" : "" }}>
            <li>起始时间：{props.begin}</li>
            <li>结束时间：{props.end}</li>
          </div>
          <div style={{ display: props.isDeadLine ? "" : "none" }}>
            <li>截止时间：{props.end}</li>
          </div>
        </ul>
        <hr />
        <p className="card-text">{props.detail ? props.detail : "无备注"}</p>
        <hr />
        <button onClick={props.handleDelete} className="btn btn-danger float-end ms-2">删除</button>
        <Link to="./edit" className="btn btn-primary float-end ms-2">编辑</Link>
        <Link to="/todo" className="btn btn-success float-end ms-2">完成</Link>
      </div>
    </div>
  );
}

export default DisplayTodo;