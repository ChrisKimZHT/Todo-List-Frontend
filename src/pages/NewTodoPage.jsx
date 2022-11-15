import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

class NewTodoPage extends Component {
    state = {
        todoData: [],
        todoIndex: 1,
        inputTitle: "",
        inputDetail: "",
        isDeadLine: false,
        inputBeginTime: "",
        inputEndTime: "",
    }

    constructor() {
        super();
        const localStorageData = localStorage.getItem('todoData');
        const localStorageIndex = localStorage.getItem('todoIndex');
        if (localStorageData) {
            this.state.todoData = JSON.parse(localStorageData);
            this.state.todoIndex = parseInt(localStorageIndex);
        }
    }

    // 将新代办加入数据列表中
    handleAdd = () => {
        const todoData = [...this.state.todoData];
        todoData.push({
            id: this.state.todoIndex,
            title: this.state.inputTitle,
            detail: this.state.inputDetail,
            isDeadLine: this.state.isDeadLine,
            begin: dayjs(this.state.inputBeginTime).format("YYYY-MM-DD HH:mm"),
            end: dayjs(this.state.inputEndTime).format("YYYY-MM-DD HH:mm"),
        });
        this.setState({ todoData });
        localStorage.setItem('todoData', JSON.stringify(todoData));
        this.setState({ todoIndex: this.state.todoIndex + 1 });
        localStorage.setItem('todoIndex', this.state.todoIndex + 1);
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
            <React.Fragment>
                <h1 className='mt-3 mb-3'>新待办事项</h1>
                <div className="card">
                    <div className="card-header">
                        {`#${this.state.todoIndex}`}
                    </div>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text">标题</span>
                            <input type="text" className="form-control" placeholder="输入事项标题" onChange={this.inputTitleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">详情</span>
                            <textarea rows="3" className="form-control" placeholder="输入事项详情" onChange={this.inputDetailChange} />
                        </div>
                        <div className="form-check form-switch mb-3">
                            <label className="form-check-label" htmlFor="is-ddl">DDL 模式</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="is-ddl" onChange={this.isDeadLineChange} />
                        </div>
                        <div className="input-group mb-3">
                            {
                                this.state.isDeadLine ? (
                                    <React.Fragment>
                                        <span className="input-group-text">截止时间</span>
                                        <input type="datetime-local" className="form-control" onChange={this.inputEndTimeChange} />
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <span className="input-group-text">起始时间</span>
                                        <input type="datetime-local" className="form-control" onChange={this.inputBeginTimeChange} />
                                        <span className="input-group-text">结束时间</span>
                                        <input type="datetime-local" className="form-control" onChange={this.inputEndTimeChange} />
                                    </React.Fragment>
                                )
                            }
                        </div>
                        <Link to="/todo" className="btn btn-success float-end ms-2" onClick={this.handleAdd}>完成</Link>
                        <Link to="./../" className='btn btn-primary float-end ms-2'>返回</Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewTodoPage;