import React, { Component } from 'react';
import NoteList from '../components/NoteList';
import dayjs from 'dayjs';


class NotePage extends Component {
    state = {
        noteData: [],
        noteIndex: 1,
    }

    constructor() {
        super();
        const localStorageData = localStorage.getItem('noteData');
        const localStorageIndex = localStorage.getItem('noteIndex');
        if (localStorageData) {
            this.state.noteData = JSON.parse(localStorageData);
            this.state.noteIndex = parseInt(localStorageIndex);
        }
    }

    // 将备忘录加入数据列表中
    handleAdd = (title, content) => {
        const noteData = [...this.state.noteData];
        noteData.push({
            id: this.state.noteIndex,
            title: title,
            content: content,
            date: dayjs().format("YYYY-MM-DD HH:mm"),
        });
        this.setState({ noteData });
        localStorage.setItem('noteData', JSON.stringify(noteData));
        this.setState({ noteIndex: this.state.noteIndex + 1 });
        localStorage.setItem('noteIndex', this.state.noteIndex + 1);
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="mt-3 mb-3">我的便签</h1>
                <NoteList
                    noteData={this.state.noteData}
                    handleAdd={this.handleAdd}
                />
            </React.Fragment>
        );
    }
}

export default NotePage;