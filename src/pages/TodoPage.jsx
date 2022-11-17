import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';


class TodoPage extends Component {
  state = {}

  // 将事项数据加入数据列表
  handleAdd = (data) => {
    this.props.addTodo(data);
  }

  handleDelete = (id) => {
    this.props.deleteTodoByID(id);
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="mt-3 mb-3">待办事项</h1>
        <TodoList
          todoData={this.props.todoData}
          handleDelete={this.handleDelete}
          onlyTitle={false}
        />
        <Link to="/todo/new" className="btn btn-primary float-end mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          &nbsp;新建
        </Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    todoData: state.todo.data,
    todoIndex: state.todo.index,
  };
}

const mapDispatchToProps = {
  addTodo: (data) => {
    return {
      type: 'addTodo',
      value: data,
    };
  },
  deleteTodoByID: (id) => {
    return {
      type: 'deleteTodoByID',
      value: id,
    };
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);