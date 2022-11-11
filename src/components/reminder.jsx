import React, { Component } from 'react';
import './reminder.css'

class Reminder extends Component {
    state = {
        reminderData: [],
        inputTitle: "",
        inputContent: "",
    }

    inputTitleChange = (val) => {
        this.setState({ inputTitle: val.target.value });
    }

    inputContentChange = (val) => {
        this.setState({ inputContent: val.target.value });
    }

    handleSave = () => {
        let reminderData = [...this.state.reminderData];
        reminderData.push({
            id: reminderData.length + 1,
            title: this.state.inputTitle,
            content: this.state.inputContent,
            date: "awa!",
        })
        this.setState({ reminderData })
        this.handleReset()
    }

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
                            <th scope="col">#</th>
                            <th scope="col">标题</th>
                            <th scope="col">摘要</th>
                            <th scope="col">添加日期</th>
                        </tr>
                    </thead>
                    <tbody> {this.state.reminderData.map(x =>
                        <tr key={x.id}>
                            <th scope="row">{x.id}</th>
                            <td>{x.title}</td>
                            <td>{x.content}</td>
                            <td>{x.date}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <h3>添加新便签</h3>
                <div class="mb-2">
                    <label for="title" class="form-label">标题</label>
                    <input type="text" class="form-control" id="title" value={this.state.inputTitle} onChange={(val) => this.inputTitleChange(val)} />
                </div>
                <div class="mb-2">
                    <label for="content" class="form-label">内容</label>
                    <textarea class="form-control" id="content" rows="4" value={this.state.inputContent} onChange={(val) => this.inputContentChange(val)}></textarea>
                </div>
                <button type="button" class="btn btn-primary m-2" onClick={this.handleSave}>保存</button>
                <button type="button" class="btn btn-danger m-2" onClick={this.handleReset}>重置</button>
            </React.Fragment>
        );
    }
}

export default Reminder;