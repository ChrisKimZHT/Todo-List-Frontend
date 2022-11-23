import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TodoList.scss';

class TodoList extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className="div-todolist">
          <table className="table table-striped table-bordered table-hover">
            <thead style={{ display: this.props.preview ? "none" : "" }}>
              <tr>
                <th scope="col" className="table-type"></th>
                <th scope="col" className="table-date">日期</th>
                <th scope="col" className="table-title">事项</th>
                <th scope="col" className="table-button">操作</th>
              </tr>
            </thead>
            <tbody>
              {this.props.todoData.map(x =>
                <tr key={x.id}>
                  <td className="table-type">
                    <i className={`me-2 bi bi-${x.isDeadLine ? "alarm" : "check2-square"}`}></i>
                  </td>
                  <td className="table-date" style={{ display: this.props.preview ? "none" : "" }}>
                    {x.isDeadLine ? x.end : x.begin}
                  </td>
                  <td className="table-title">
                    <span style={{ display: this.props.preview ? "none" : "" }}>{x.title}</span>
                    <Link style={{ display: this.props.preview ? "" : "none" }} to={`/todo/${x.id}`}>{x.title}</Link>
                  </td>
                  <td className="table-button" align="center" style={{ display: this.props.preview ? "none" : "" }}>
                    <Link to={`/todo/${x.id}`} className="p-0 ps-2 pe-2 me-2 btn btn-outline-success btn-sm">详情</Link>
                    <Link to={`/todo/${x.id}/edit`} className="p-0 ps-2 pe-2 me-2 btn btn-outline-primary btn-sm table-title">编辑</Link>
                    <button onClick={() => this.props.handleDelete(x.id)} className="p-0 ps-2 pe-2 me-2 btn btn-outline-danger btn-sm">删除</button>
                  </td>
                </tr>
              )}
              <tr style={{ display: this.props.todoData.length ? "none" : "" }}>
                <td colSpan={4}>无待办</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment >
    );
  }
}

export default TodoList;