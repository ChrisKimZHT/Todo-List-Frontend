import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import './EditTodo.scss';

class EditTodo extends Component {
  state = {
    inputTitle: this.props.title,
    inputDetail: this.props.detail,
    isDeadLine: this.props.isDeadLine,
    inputBeginTime: this.props.begin,
    inputEndTime: this.props.end,
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

  // 新建/编辑时外层需要传入不同的函数，但函数名需要均为handleEdit
  handleEdit = () => {
    this.props.handleEdit({
      id: this.props.id,
      title: this.state.inputTitle,
      detail: this.state.inputDetail,
      isDeadLine: this.state.isDeadLine,
      begin: dayjs(this.state.inputBeginTime).format("YYYY-MM-DD HH:mm"),
      end: dayjs(this.state.inputEndTime).format("YYYY-MM-DD HH:mm"),
      isFinished: false,
    });
    window.history.back(-1);
  }

  render() {
    return (
      <React.Fragment>
        <div className="card div-edit-todo">
          <div className="card-header">
            <span>{'#' + this.props.id}</span>
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

export default EditTodo;