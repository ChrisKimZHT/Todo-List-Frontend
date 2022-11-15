import React, { Component } from 'react';
import dayjs from 'dayjs';

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
        // console.log(this.state.inputTitle)
    }

    // 监测内容输入
    inputDetailChange = (val) => {
        this.setState({ inputDetail: val.target.value });
        // console.log(this.state.inputDetail)
    }

    // 监测DDL开关
    isDeadLineChange = (val) => {
        this.setState({ isDeadLine: val.target.checked });
        // console.log(this.state.isDeadLine)
    }

    // 监测起始时间
    inputBeginTimeChange = (val) => {
        this.setState({ inputBeginTime: val.target.value });
        // console.log(this.state.inputBeginTime);
    }

    // 监测结束时间
    inputEndTimeChange = (val) => {
        this.setState({ inputEndTime: val.target.value });
        // console.log(this.state.inputEndTime);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {`#${this.props.id} - 编辑中`}
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text">标题</span>
                        <input type="text" className="form-control" onChange={this.inputTitleChange} value={this.state.inputTitle} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">详情</span>
                        <textarea rows="3" className="form-control" onChange={this.inputDetailChange} value={this.state.inputDetail} />
                    </div>
                    <div className="form-check form-switch mb-3">
                        <label className="form-check-label" htmlFor="is-ddl">DDL 模式</label>
                        <input className="form-check-input" type="checkbox" role="switch" id="is-ddl" onChange={this.isDeadLineChange} checked={this.state.isDeadLine} />
                    </div>
                    <div className="input-group mb-3">
                        {
                            this.state.isDeadLine ? (
                                <React.Fragment>
                                    <span className="input-group-text">截止时间</span>
                                    <input type="datetime-local" className="form-control" onChange={this.inputEndTimeChange} value={this.state.inputEndTime} />
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <span className="input-group-text">起始时间</span>
                                    <input type="datetime-local" className="form-control" onChange={this.inputBeginTimeChange} value={this.state.inputBeginTime} />
                                    <span className="input-group-text">结束时间</span>
                                    <input type="datetime-local" className="form-control" onChange={this.inputEndTimeChange} value={this.state.inputEndTime} />
                                </React.Fragment>
                            )
                        }
                    </div>
                    <button onClick={() => this.props.handleEdit({
                        id: this.props.id,
                        title: this.state.inputTitle,
                        detail: this.state.inputDetail,
                        isDeadLine: this.state.isDeadLine,
                        begin: dayjs(this.state.inputBeginTime).format("YYYY-MM-DD HH:mm"),
                        end: dayjs(this.state.inputEndTime).format("YYYY-MM-DD HH:mm"),
                    })} className="btn btn-success float-end ms-2">完成</button>
                </div>
            </div >
        );
    }
}

export default EditTodo;