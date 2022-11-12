import React, { Component } from 'react';
import Reminder from '../components/reminder';
import dayjs from 'dayjs';


class Note extends Component {
    state = {
        reminderData: [],
        reminderIndex: 1,
    }

    constructor() {
        super();
        const localStorageData = localStorage.getItem('reminderData');
        const localStorageIndex = localStorage.getItem('reminderIndex');
        if (localStorageData) {
            this.state.reminderData = JSON.parse(localStorageData);
            this.state.reminderIndex = parseInt(localStorageIndex);
        }
    }

    // 将备忘录加入数据列表中
    handleAdd = (title, content) => {
        const reminderData = [...this.state.reminderData];
        reminderData.push({
            id: this.state.reminderIndex,
            title: title,
            content: content,
            date: dayjs().format("YYYY-MM-DD HH:mm"),
        });
        this.setState({ reminderData });
        localStorage.setItem('reminderData', JSON.stringify(reminderData));
        this.setState({ reminderIndex: this.state.reminderIndex + 1 });
        localStorage.setItem('reminderIndex', this.state.reminderIndex + 1);
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="mt-3 mb-3">我的便签</h1>
                <Reminder
                    reminderData={this.state.reminderData}
                    handleAdd={this.handleAdd}
                />
            </React.Fragment>
        );
    }
}

export default Note;