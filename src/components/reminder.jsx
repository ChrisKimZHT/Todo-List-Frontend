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
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">标题</th>
                            <th scope="col">摘要</th>
                            <th scope="col">添加日期</th>
                        </tr>
                    </thead>
                    <tbody> {this.props.reminderData.map(x =>
                        <tr key={x.id}>
                            <th scope="row">{x.id}</th>
                            <td>{x.title}</td>
                            <td>{x.content}</td>
                            <td>{x.date.format('YYYY-MM-DD HH:mm')}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <h3>添加新便签</h3>
                <div className="mb-2">
                    <label htmlFor="title" className="form-label">标题</label>
                    <input type="text" className="form-control" id="title" value={this.state.inputTitle} onChange={(val) => this.inputTitleChange(val)} />
                </div>
                <div className="mb-2">
                    <label htmlFor="content" className="form-label">内容</label>
                    <textarea className="form-control" id="content" rows="4" value={this.state.inputContent} onChange={(val) => this.inputContentChange(val)}></textarea>
                </div>
                <button type="button" className="btn btn-primary m-2" onClick={this.handleAdd}>保存</button>
                <button type="button" className="btn btn-danger m-2" onClick={this.handleReset}>重置</button>
            </React.Fragment>
        );
    }
}

export default Reminder;