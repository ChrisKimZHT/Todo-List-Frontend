import React, { Component } from 'react';
import './EditNote.scss';

class EditNote extends Component {
  state = {
    inputTitle: "",
    inputContent: "",
  }

  constructor(props) {
    super();
    this.state.inputTitle = props.title;
    this.state.inputContent = props.content;
  }

  // 获取输入框标题数据
  inputTitleChange = (val) => {
    this.setState({ inputTitle: val.target.value });
  }

  // 获取输入框内容数据
  inputContentChange = (val) => {
    this.setState({ inputContent: val.target.value });
  }

  handleEdit = () => {
    this.props.handleEdit(this.state.inputTitle, this.state.inputContent);
    window.history.back(-1);
  }

  render() {
    return (
      <React.Fragment>
        <div className="card div-edit-note">
          <div className="card-header">
            <span>{'#' + this.props.id}</span>
            <span className="fw-light ms-2">编辑中</span>
            <span className="float-end" style={{ cursor: 'pointer' }} onClick={this.props.handleStar}>
              <i className={`bi bi-star${this.props.star ? "-fill" : ""}`}></i>
            </span>
          </div>
          <div className="card-body">
            <h5>标题</h5>
            <textarea className="form-control mt-2" rows="2" value={this.state.inputTitle} onChange={(val) => this.inputTitleChange(val)}></textarea>
            <h5 className="mt-2">内容</h5>
            <textarea className="form-control mt-2" rows="10" value={this.state.inputContent} onChange={(val) => this.inputContentChange(val)}></textarea>
          </div>
        </div>
        <button onClick={this.handleEdit} title="完成" className="btn btn-success float-end ms-2 mt-2"><i class="bi bi-check-circle"></i></button>
      </React.Fragment >
    );
  }
}

export default EditNote;