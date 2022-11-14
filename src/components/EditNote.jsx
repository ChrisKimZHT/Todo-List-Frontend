import React, { Component } from 'react';

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
                <div className="card div-editReminder">
                    <div className="card-header">
                        {`#${this.props.id} - 编辑中`}
                    </div>
                    <div className="card-body">
                        <h5>标题</h5>
                        <textarea className="form-control mt-2" rows="2" value={this.state.inputTitle} onChange={(val) => this.inputTitleChange(val)}></textarea>
                        <h5 className="mt-2">内容</h5>
                        <textarea className="form-control mt-2" rows="16" value={this.state.inputContent} onChange={(val) => this.inputContentChange(val)}></textarea>
                        <button onClick={this.handleEdit} className="btn btn-success float-end ms-2 mt-2">完成</button>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default EditNote;