import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { service } from '../service/service.js';
import dayjs from 'dayjs';
import './TodoList.scss';

class TodoList extends Component {
  state = {
    todoData: [],
  }

  async componentDidMount() {
    await this.refreshTodoData();
  }

  refreshTodoData = async () => {
    const res = await service.todo.list();
    this.setState({ todoData: res.data.data });
  }

  handleToggleFinish = async (id) => {
    await service.todo.toggleFinish(id);
    await this.refreshTodoData();
  }

  handleDeleteFinished = async () => {
    for (const todo of this.state.todoData) {
      if (todo.isFinished === true) {
        await service.todo.delete(todo.id)
      }
    }
    await this.refreshTodoData();
  }

  render() {
    return (
      <React.Fragment>
        <Link to="/todo/new" className="btn btn-primary float-end mb-1" style={{ display: this.props.preview ? "none" : "" }}>
          <i className="bi bi-plus-circle me-2"></i>
          <span>新建</span>
        </Link>
        <h4>未完成</h4>
        <div className="div-todolist">
          <table className="table table-striped table-bordered table-hover">
            <thead style={{ display: this.props.preview ? "none" : "" }}>
              <tr>
                <th scope="col" className="table-type"></th>
                <th scope="col" className="table-date">日期</th>
                <th scope="col" className="table-title">事项</th>
                <th scope="col" className="table-finish"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.todoData.map((data) =>
                <tr key={data.id} style={{ display: data.isFinished ? "none" : "" }}>
                  <td className="table-type">
                    <i className={`me-2 bi bi-${data.isDeadLine ? "alarm" : "check2-square"}`}></i>
                  </td>
                  <td className="table-date" style={{ display: this.props.preview ? "none" : "" }}>
                    {dayjs.unix(data.isDeadLine ? data.end : data.begin).format("YYYY-MM-DD HH:mm")}
                  </td>
                  <td className="table-title">
                    <Link to={`/todo/${data.id}`}>{data.title ? data.title : "无标题"}</Link>
                  </td>
                  <td className="table-finish" align="center" onClick={() => this.handleToggleFinish(data.id)}
                    style={{ display: this.props.preview ? "none" : "", cursor: 'pointer' }}>
                    <i className="bi bi-check-circle"></i>
                  </td>
                </tr>
              )}
              <tr style={{ display: this.state.todoData.filter(x => x.isFinished === false).length ? "none" : "" }}>
                <td colSpan={4}>无未完成待办</td>
              </tr>
            </tbody>
          </table>
        </div>



        <button className="btn btn-danger float-end mb-1" onClick={this.handleDeleteFinished}
          style={{ display: this.props.preview ? "none" : "" }}>
          <i className="bi bi-trash3 me-2"></i>
          <span>清空</span>
        </button>
        <h4>已完成</h4>
        <div className="div-todolist">
          <table className="table table-striped table-bordered table-hover">
            <thead style={{ display: this.props.preview ? "none" : "" }}>
              <tr>
                <th scope="col" className="table-type"></th>
                <th scope="col" className="table-date">日期</th>
                <th scope="col" className="table-title">事项</th>
                <th scope="col" className="table-finish"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.todoData.map((data) =>
                <tr key={data.id} style={{ display: data.isFinished ? "" : "none" }}>
                  <td className="table-type">
                    <i className={`me-2 bi bi-${data.isDeadLine ? "alarm" : "check2-square"}`}></i>
                  </td>
                  <td className="table-date" style={{ display: this.props.preview ? "none" : "" }}>
                    {dayjs.unix(data.isDeadLine ? data.end : data.begin).format("YYYY-MM-DD HH:mm")}
                  </td>
                  <td className="table-title">
                    <Link to={`/todo/${data.id}`}>{data.title ? data.title : "无标题"}</Link>
                  </td>
                  <td className="table-finish" align="center" onClick={() => this.handleToggleFinish(data.id)}
                    style={{ display: this.props.preview ? "none" : "", cursor: 'pointer' }}>
                    <i className="bi bi-x-circle"></i>
                  </td>
                </tr>
              )}
              <tr style={{ display: this.state.todoData.filter(x => x.isFinished === true).length ? "none" : "" }}>
                <td colSpan={4}>无已完成待办</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment >
    );
  }
}

export default TodoList;