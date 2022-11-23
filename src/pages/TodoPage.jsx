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
          preview={false}
        />
        <Link to="/todo/new" className="btn btn-primary float-end mt-1">
          <i className="bi bi-plus-circle"></i>
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