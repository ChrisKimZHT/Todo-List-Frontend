import React, { Component } from 'react';
import TodoList from '../components/TodoList';


class TodoPage extends Component {
    state = {
        todoData: [],
        todoIndex: 1,
    }

    constructor() {
        super();
        const localStorageData = localStorage.getItem('todoData');
        const localStorageIndex = localStorage.getItem('todoIndex');
        if (localStorageData) {
            this.state.todoData = JSON.parse(localStorageData);
            this.state.todoIndex = parseInt(localStorageIndex);
        }
        // debug-data
        this.state.todoData.push({
            id: 1,
            date: "Loooooooooooooooooooooooooooooooooog",
            title: "Loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
        })
        this.state.todoData.push({
            id: 2,
            date: "test!",
            title: "ahhhhhhh",
        })
        this.state.todoData.push({
            id: 3,
            date: "awa!",
            title: "awawaawawa!",
        })
        // debug-data-end
    }

    // 将事项数据加入数据列表
    handleAdd = (data) => {
        const todoData = [...this.state.todoData];
        todoData.push(data);
        this.state({ todoData });
        localStorage.setItem('todoData', JSON.stringify(todoData));
        this.state({ todoIndex: this.state.todoIndex + 1 });
        localStorage.setItem('todoIndex', this.state.todoIndex + 1);
    }

    handleDelete = (id) => {
        const todoData = this.state.todoData.filter(
            x => x.id !== id
        );
        this.setState({ todoData });
        localStorage.setItem("todoData", JSON.stringify(todoData));
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="mt-3 mb-3">待办事项</h1>
                <TodoList
                    todoData={this.state.todoData}
                    handleDelete={this.handleDelete}
                />
            </React.Fragment>
        );
    }
}

export default TodoPage;