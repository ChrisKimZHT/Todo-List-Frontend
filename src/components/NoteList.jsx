import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteList.scss'

class NoteList extends Component {
  state = {
    inputTitle: "",
    inputContent: "",
  }

  // 获取输入框标题数据
  inputTitleChange = (val) => {
    this.setState({ inputTitle: val.target.value });
  }

  // 获取输入框内容数据
  inputContentChange = (val) => {
    this.setState({ inputContent: val.target.value });
  }

  // 调用外层函数保存便签数据
  handleAdd = () => {
    this.props.handleAdd(this.state.inputTitle, this.state.inputContent);
    this.handleReset();
  }

  // 重置输入框
  handleReset = () => {
    this.setState({
      inputTitle: "",
      inputContent: "",
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="div-reminder row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {this.props.noteData.map((data, idx) =>
            <div className="col" key={data.id} style={{ display: !this.props.preview || data.star ? "block" : "none" }}>
              <div className="card">
                <div className="card-body">
                  <Link className="detail-link" to={`/note/${data.id}`}>
                    <h2 className="h2 card-title">{data.title ? data.title : "无标题"}</h2>
                  </Link>
                  <div className="card-text">{data.content}</div>
                  <div style={{ display: this.props.preview ? "none" : "inline", cursor: 'pointer' }} onClick={() => this.props.handleStar(idx)}>
                    <i className={`bi bi-star${data.star ? "-fill" : ""}`}></i>
                  </div>
                  <div className="fw-light float-end">{data.date}</div>
                </div>
              </div>
            </div>
          )}
          <div className="col" style={{ display: this.props.preview ? "none" : "block" }}>
            <div className="card new-note">
              <div className="card-body">
                <input type="text" className="form-control" placeholder="添加新的便签" value={this.state.inputTitle} onChange={(val) => this.inputTitleChange(val)} />
                <textarea className="form-control mt-2" rows="6" placeholder="在此输入内容" value={this.state.inputContent} onChange={(val) => this.inputContentChange(val)}></textarea>
                <button title="保存" type="button" className="btn btn-primary ms-2 mt-2 float-end" onClick={this.handleAdd}>
                  <i class="bi bi-check-circle"></i>
                </button>
                <button title="重置" type="button" className="btn btn-danger ms-2 mt-2 float-end" onClick={this.handleReset}>
                  <i class="bi bi-arrow-counterclockwise"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NoteList;