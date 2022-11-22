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
            {this.props.onlyTitle ? "" : (
              <thead>
                <tr>
                  <th scope="col" className="table-date">日期</th>
                  <th scope="col" className="table-title">事项</th>
                  <th scope="col" className="table-button">操作</th>
                </tr>
              </thead>
            )}
            <tbody>
              {this.props.todoData.map(x =>
                <tr key={x.id}>
                  {
                    this.props.onlyTitle ? "" : (
                      <td>
                        {
                          x.isDeadLine ? (
                            <i className="bi bi-alarm"></i>
                          ) : (
                            <i className="bi bi-check2-square"></i>
                          )
                        }&nbsp;
                        {
                          x.isDeadLine ? x.end : x.begin
                        }
                      </td>
                    )
                  }
                  {
                    this.props.onlyTitle ? (
                      <td className="table-title">
                        <Link to={`/todo/${x.id}`}>{x.title}</Link>
                      </td>
                    ) : (<td className="table-title">{x.title}</td>)
                  }
                  {
                    this.props.onlyTitle ? "" : (
                      <td align="center">
                        <Link to={`/todo/${x.id}`} className="p-0 ps-2 pe-2 me-2 btn btn-outline-success btn-sm">详情</Link>
                        <Link to={`/todo/${x.id}/edit`} className="p-0 ps-2 pe-2 me-2 btn btn-outline-primary btn-sm table-title">编辑</Link>
                        <button onClick={() => this.props.handleDelete(x.id)} className="p-0 ps-2 pe-2 me-2 btn btn-outline-danger btn-sm">删除</button>
                      </td>
                    )
                  }
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </React.Fragment >
    );
  }
}

export default TodoList;