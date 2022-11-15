import React, { Component } from 'react';
import { Route, Routes, useParams } from 'react-router';
import DisplayTodo from '../components/DisplayTodo';
import EditTodo from '../components/EditTodo';

class TodoPageDetail extends Component {
    state = {
        todoData: [],
        selectedData: {},
        selectedIndex: 0,
    }

    constructor(props) {
        super();
        const localStorageData = localStorage.getItem('todoData');
        if (localStorageData) {
            this.state.todoData = JSON.parse(localStorageData);
            this.state.selectedIndex = this.state.todoData.findIndex(x => x.id === parseInt(props.params.id));
            this.state.selectedData = this.state.todoData[this.state.selectedIndex];
        }
    }

    handleDelete = () => {
        const todoData = this.state.todoData.filter(
            x => x.id !== this.state.selectedData.id
        );
        this.setState({ todoData });
        localStorage.setItem("todoData", JSON.stringify(todoData));
        window.history.back(-1);
    }

    handleEdit = (data) => {
        const todoData = [...this.state.todoData];
        const selectedData = { ...data };
        this.setState({ selectedData });
        todoData[this.state.selectedIndex] = selectedData;
        this.setState({ todoData });
        localStorage.setItem('todoData', JSON.stringify(todoData));
        window.history.back(-1);
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="mt-3 mb-3">待办事项</h1>
                <Routes>
                    <Route path="/" element={<DisplayTodo {...this.state.selectedData} handleDelete={this.handleDelete} />}></Route>
                    <Route path="/edit" element={<EditTodo {...this.state.selectedData} handleEdit={this.handleEdit} />}></Route>
                </Routes>
            </React.Fragment>
        );
    }
}

export default (props) => (
    <TodoPageDetail
        {...props}
        params={useParams()}
    />
)