import React, { Component } from 'react';
import Reminder from '../components/reminder';
import dayjs, { Dayjs } from 'dayjs';


class Note extends Component {
    state = {
        reminderData: [],
    }

    constructor() {
        super();
        const localStorageData = localStorage.getItem('reminderData');
        if (localStorageData) {
            this.state.reminderData = JSON.parse(localStorageData);
        }
    }

    // 将备忘录加入数据列表中
    handleAdd = (title, content) => {
        const reminderData = [...this.state.reminderData];
        reminderData.push({
            id: reminderData.length + 1,
            title: title,
            content: content,
            date: dayjs().format("YYYY-MM-DD HH:mm"),
        })
        localStorage.setItem('reminderData', JSON.stringify(reminderData));
        this.setState({ reminderData })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Note Component</h1>
                <Reminder
                    reminderData={this.state.reminderData}
                    handleAdd={this.handleAdd}
                />
            </React.Fragment>
        );
    }
}

export default Note;