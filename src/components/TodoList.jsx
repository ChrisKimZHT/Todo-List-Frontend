import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { service } from '../service/service.js';
import { stamp2str } from '../utils/formatDatetime.js';
import useAlert from '../utils/useAlert.js'
import './TodoList.scss';

class TodoListClass extends Component {
  state = {
    todoData: [],
  }

  async componentDidMount() {
    await this.refreshTodoData();
  }

  refreshTodoData = async () => {
    if (this.props.filter) {
      await service.todo.getToday(this.props.year, this.props.month, this.props.day)
        .then(res => {
          const todoData = res.data.data;
          this.setState({ todoData });
        })
        .catch(err => this.props.setAlert(`[ERROR]: ${err.message} in /todo/getToday`, "danger", 0));
    } else {
      await service.todo.list()
        .then(res => {
          const todoData = res.data.data;
          this.setState({ todoData });
        })
        .catch(err => this.props.setAlert(`[ERROR]: ${err.message} in /todo/list`, "danger", 0));
    }
  }

  handleToggleFinish = async (id) => {
    await service.todo.toggleFinish(id)
      .catch(err => this.props.setAlert(`[ERROR]: ${err.message} in /todo/toggleFinish`, "danger", 0));
    await this.refreshTodoData()
  }

  handleDeleteFinished = async () => {
    for (const todo of this.state.todoData) {
      if (todo.isFinished === true) {
        await service.todo.delete(todo.id)
          .catch(err => this.props.setAlert(`[ERROR]: ${err.message} in /todo/delete`, "danger", 0));
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
                data.isFinished ? "" : (
                  <tr key={data.id}>
                    <td className="table-type">
                      <i className={`me-2 bi bi-${data.isDeadLine ? "alarm" : "check2-square"}`}></i>
                    </td>
                    <td className="table-date" style={{ display: this.props.preview ? "none" : "" }}>
                      {stamp2str(data.isDeadLine ? data.end : data.begin)}
                    </td>
                    <td className="table-title">
                      <Link to={`/todo/${data.id}`}>{data.title ? data.title : "无标题"}</Link>
                    </td>
                    <td className="table-finish" align="center" onClick={() => this.handleToggleFinish(data.id)}
                      style={{ display: this.props.preview ? "none" : "", cursor: 'pointer' }}>
                      <i className="bi bi-check-circle"></i>
                    </td>
                  </tr>
                )
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
                data.isFinished ? (
                  <tr key={data.id} >
                    <td className="table-type">
                      <i className={`me-2 bi bi-${data.isDeadLine ? "alarm" : "check2-square"}`}></i>
                    </td>
                    <td className="table-date" style={{ display: this.props.preview ? "none" : "" }}>
                      {stamp2str(data.isDeadLine ? data.end : data.begin)}
                    </td>
                    <td className="table-title">
                      <Link to={`/todo/${data.id}`}>{data.title ? data.title : "无标题"}</Link>
                    </td>
                    <td className="table-finish" align="center" onClick={() => this.handleToggleFinish(data.id)}
                      style={{ display: this.props.preview ? "none" : "", cursor: 'pointer' }}>
                      <i className="bi bi-x-circle"></i>
                    </td>
                  </tr>
                ) : ""
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

const TodoList = (props) => {
  const { setAlert } = useAlert();
  return (
    <TodoListClass {...props} setAlert={setAlert} />
  );
}

export default TodoList;