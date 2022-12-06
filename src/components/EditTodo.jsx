import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { service } from '../service/service';
import { stamp2str, str2stamp } from '../utils/formatDatetime';
import useAlert from '../utils/useAlert';
import './EditTodo.scss';

class EditTodoClass extends Component {
  state = {
    id: 0,
    inputTitle: "",
    inputDetail: "",
    isDeadLine: false,
    inputBeginTime: 0,
    inputEndTime: 0,
  }

  async componentDidMount() {
    if (!this.props.addMode) {
      this.refreshTodoData();
    }
  }

  refreshTodoData = async () => {
    await service.todo.get(this.props.id)
      .then(res => {
        const data = res.data.data;
        this.setState({ id: data.id });
        this.setState({ inputTitle: data.title });
        this.setState({ inputDetail: data.detail });
        this.setState({ isDeadLine: data.isDeadLine });
        this.setState({ inputBeginTime: stamp2str(data.begin) });
        this.setState({ inputEndTime: stamp2str(data.end) });
      })
      .catch(err => this.props.setAlert(`[ERROR]: ${err.message} in /todo/get`, "danger", 0));
  }

  // 监测标题输入
  inputTitleChange = (val) => {
    this.setState({ inputTitle: val.target.value });
  }

  // 监测内容输入
  inputDetailChange = (val) => {
    this.setState({ inputDetail: val.target.value });
  }

  // 监测DDL开关
  isDeadLineChange = (val) => {
    this.setState({ isDeadLine: val.target.checked });
  }

  // 监测起始时间
  inputBeginTimeChange = (val) => {
    this.setState({ inputBeginTime: val.target.value });
  }

  // 监测结束时间
  inputEndTimeChange = (val) => {
    this.setState({ inputEndTime: val.target.value });
  }

  handleEdit = async () => {
    const data = {
      id: this.state.id,
      title: this.state.inputTitle,
      detail: this.state.inputDetail,
      isDeadLine: this.state.isDeadLine,
      begin: str2stamp(this.state.inputBeginTime),
      end: str2stamp(this.state.inputEndTime),
      isFinished: false,
    };
    if (this.props.addMode) {
      await service.todo.create(data)
        .catch(err => this.props.setAlert(`[ERROR]: ${err.message} in /todo/create`, "danger", 0));
    } else {
      await service.todo.update(data)
        .catch(err => this.props.setAlert(`[ERROR]: ${err.message} in /todo/update`, "danger", 0));
    }
    window.history.back(-1);
  }

  render() {
    return (
      <React.Fragment>
        <div className="card div-edit-todo">
          <div className="card-header">
            <span>{'#' + this.state.id}</span>
            <span className="fw-light ms-2">{this.props.addMode ? "新建中" : "编辑中"}</span>
            <span className="float-end"><i className={`me-2 bi bi-${this.state.isDeadLine ? "alarm" : "check2-square"}`}></i></span>
          </div>
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text">标题</span>
              <input type="text" className="form-control" onChange={this.inputTitleChange} value={this.state.inputTitle} />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">详情</span>
              <textarea rows="9" className="form-control" onChange={this.inputDetailChange} value={this.state.inputDetail} />
            </div>
            <div className="form-check form-switch mb-3">
              <label className="form-check-label" htmlFor="is-ddl">DDL 模式</label>
              <input className="form-check-input" type="checkbox" role="switch" id="is-ddl" onChange={this.isDeadLineChange} checked={this.state.isDeadLine} />
            </div>
            <div className="input-group mb-3" style={{ display: this.state.isDeadLine ? "" : "none" }}>
              <span className="input-group-text">截止时间</span>
              <input type="datetime-local" className="form-control" onChange={this.inputEndTimeChange} value={this.state.inputEndTime} />
            </div>
            <div className="input-group mb-3" style={{ display: this.state.isDeadLine ? "none" : "" }}>
              <span className="input-group-text">起始时间</span>
              <input type="datetime-local" className="form-control" onChange={this.inputBeginTimeChange} value={this.state.inputBeginTime} />
              <span className="input-group-text">结束时间</span>
              <input type="datetime-local" className="form-control" onChange={this.inputEndTimeChange} value={this.state.inputEndTime} />
            </div>
          </div>
        </div >
        <div className="float-end mt-2">
          <Link to="./../" title="返回" className="btn btn-success"><i className="bi bi-arrow-return-left"></i></Link>
          <button onClick={this.handleEdit} title="完成" className="btn btn-primary float-end ms-2"><i className="bi bi-check-circle"></i></button>
        </div>
      </React.Fragment>
    );
  }
}

const EditTodo = (props) => {
  const { setAlert } = useAlert();
  return (
    <EditTodoClass {...props} setAlert={setAlert} />
  );
}

export default EditTodo;