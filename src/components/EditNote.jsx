import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { service } from '../service/service';

import './EditNote.scss';

class EditNote extends Component {
  state = {
    id: "",
    inputTitle: "",
    inputContent: "",
    star: false,
  }

  async componentDidMount() {
    this.refreshNoteData();
  }

  refreshNoteData = async () => {
    const res = await service.note.get(this.props.id);
    const data = res.data.data;
    this.setState({ id: data.id });
    this.setState({ inputTitle: data.title });
    this.setState({ inputContent: data.content });
    this.setState({ star: data.star });
  }

  // 获取输入框标题数据
  inputTitleChange = (val) => {
    this.setState({ inputTitle: val.target.value });
  }

  // 获取输入框内容数据
  inputContentChange = (val) => {
    this.setState({ inputContent: val.target.value });
  }

  handleStar = async (id) => {
    this.setState({ star: !this.state.star });
  }

  handleEdit = async () => {
    const data = {
      id: this.state.id,
      title: this.state.inputTitle,
      content: this.state.inputContent,
      date: dayjs().unix(),
      star: this.state.star,
    }
    const res = await service.note.update(data);
    window.history.back(-1);
  }

  render() {
    return (
      <React.Fragment>
        <div className="card div-edit-note">
          <div className="card-header">
            <span>{'#' + this.state.id}</span>
            <span className="fw-light ms-2">编辑中</span>
            <span className="float-end" style={{ cursor: 'pointer' }} onClick={this.handleStar}>
              <i className={`bi bi-star${this.state.star ? "-fill" : ""}`}></i>
            </span>
          </div>
          <div className="card-body">
            <h5>标题</h5>
            <textarea className="form-control mt-2" rows="2" value={this.state.inputTitle} onChange={(val) => this.inputTitleChange(val)}></textarea>
            <h5 className="mt-2">内容</h5>
            <textarea className="form-control mt-2" rows="10" value={this.state.inputContent} onChange={(val) => this.inputContentChange(val)}></textarea>
          </div>
        </div>
        <div className="float-end mt-2">
          <Link to="./../" title="返回" className="btn btn-success"><i className="bi bi-arrow-return-left"></i></Link>
          <button onClick={this.handleEdit} title="完成" className="btn btn-primary  ms-2 "><i className="bi bi-check-circle"></i></button>
        </div>
      </React.Fragment >
    );
  }
}

export default EditNote;