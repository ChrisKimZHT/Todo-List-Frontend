import React, { Component } from 'react';
import './reminder.css'

class Reminder extends Component {
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
        this.props.handleAdd(this.state.inputTitle, this.state.inputContent)
        this.handleReset()
    }

    // 重置输入框
    handleReset = () => {
        this.setState({
            inputTitle: "",
            inputContent: "",
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
                    {this.props.reminderData.map(x =>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{x.title}</h4>
                                    <div className="card-text">{x.content}</div>
                                    <div className="fw-light float-end">{x.date}</div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <input type="text" className="form-control" placeholder="添加新的便签" value={this.state.inputTitle} onChange={(val) => this.inputTitleChange(val)} />
                                <textarea className="form-control mt-2" rows="6" placeholder="在此输入内容" value={this.state.inputContent} onChange={(val) => this.inputContentChange(val)}></textarea>
                                <button type="button" className="btn btn-primary ms-2 mt-2 float-end" onClick={this.handleAdd}>保存</button>
                                <button type="button" className="btn btn-danger ms-2 mt-2 float-end" onClick={this.handleReset}>重置</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Reminder;