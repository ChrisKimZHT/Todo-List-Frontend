import React, { useEffect, useState } from 'react';
import { service } from '../service/service.js';
import formatDatetime from '../utils/formatDatetime.js';
import './DisplayTodo.scss';

const DisplayTodo = (props) => {
  const [todoData, setTodoData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await service.todo.get(props.id);
      setTodoData(res.data.data);
    }
    fetchData();
  }, []);

  return (
    <div className="card div-display-todo">
      <div className="card-header">
        <span>{'#' + todoData.id}</span>
        <span className="fw-light ms-2">{formatDatetime(todoData.isDeadLine ? todoData.end : todoData.begin)}</span>
        <span className="float-end"><i className={`me-2 bi bi-${todoData.isDeadLine ? "alarm" : "check2-square"}`}></i></span>
      </div>
      <div className="card-body">
        <h2 className="card-title">{todoData.title ? todoData.title : "无标题"}</h2>
        <hr />
        <ul>
          <li>类别：{todoData.isDeadLine ? "DDL" : "日程"}</li>
          <div style={{ display: todoData.isDeadLine ? "none" : "" }}>
            <li>起始时间：{formatDatetime(todoData.begin)}</li>
            <li>结束时间：{formatDatetime(todoData.end)}</li>
          </div>
          <div style={{ display: todoData.isDeadLine ? "" : "none" }}>
            <li>截止时间：{formatDatetime(todoData.end)}</li>
          </div>
        </ul>
        <hr />
        <p className="card-text">{todoData.detail ? todoData.detail : "无备注"}</p>
      </div>
    </div>
  );
}

export default DisplayTodo;