import dayjs from 'dayjs';
import React, { Component } from 'react';
import { Route, Routes, useParams } from 'react-router';
import EditReminder from '../components/editReminder';
import ShowReminder from '../components/showReminder';

class NoteDetail extends Component {
    state = {
        reminderData: [],
        selectedData: {},
        selectedIndex: 0,
    }

    constructor(props) {
        super();
        const localStorageData = localStorage.getItem('reminderData');
        if (localStorageData) {
            this.state.reminderData = JSON.parse(localStorageData);
            this.state.selectedIndex = this.state.reminderData.findIndex(x => x.id === parseInt(props.params.id));
            this.state.selectedData = this.state.reminderData[this.state.selectedIndex];
        }
    }

    handleDelete = () => {
        const reminderData = this.state.reminderData.filter(
            x => x.id !== this.state.selectedData.id
        );
        this.setState({ reminderData });
        localStorage.setItem("reminderData", JSON.stringify(reminderData));
        window.history.back(-1);
    }

    handleEdit = (title, content) => {
        const reminderData = [...this.state.reminderData];
        const selectedData = this.state.selectedData;
        selectedData.title = title;
        selectedData.content = content;
        selectedData.date = dayjs().format("YYYY-MM-DD HH:mm");
        this.setState({ selectedData });
        reminderData[this.state.selectedIndex] = selectedData;
        this.setState({ reminderData });
        localStorage.setItem('reminderData', JSON.stringify(reminderData));
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="mt-3 mb-3">我的便签</h1>
                <Routes>
                    <Route path="/" element={<ShowReminder {...this.state.selectedData} handleDelete={this.handleDelete} />}></Route>
                    <Route path="/edit" element={<EditReminder {...this.state.selectedData} handleEdit={this.handleEdit} />}></Route>
                </Routes>
            </React.Fragment>
        );
    }
}

export default (props) => (
    <NoteDetail
        {...props}
        params={useParams()}
    />
)