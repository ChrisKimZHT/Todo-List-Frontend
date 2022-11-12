import React, { Component } from 'react';
import { Route, Routes, useParams } from 'react-router';
import EditReminder from '../components/editReminder';
import ShowReminder from '../components/showReminder';

class NoteDetail extends Component {
    state = {
        reminderData: [],
        selectedData: {},
    }

    constructor(props) {
        super();
        const localStorageData = localStorage.getItem('reminderData');
        if (localStorageData) {
            this.state.reminderData = JSON.parse(localStorageData);
            this.state.selectedData = this.state.reminderData[props.params.id - 1];
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

    render() {
        return (
            <React.Fragment>
                <h1 className="mt-3 mb-3">我的便签</h1>
                <Routes>
                    <Route path="/" element={<ShowReminder {...this.state.selectedData} handleDelete={this.handleDelete} />}></Route>
                    <Route path="/edit" element={<EditReminder />}></Route>
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