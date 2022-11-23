import React from 'react';
import './DisplayTodo.scss';

const DisplayTodo = (props) => {
  return (
    <div className="card div-display-todo">
      <div className="card-header">
        <span>{'#' + props.id}</span>
        <span className="fw-light ms-2">{props.isDeadLine ? props.end : props.begin}</span>
        <span className="float-end"><i className={`me-2 bi bi-${props.isDeadLine ? "alarm" : "check2-square"}`}></i></span>
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.title ? props.title : "无标题"}</h2>
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
      </div>
    </div>
  );
}

export default DisplayTodo;