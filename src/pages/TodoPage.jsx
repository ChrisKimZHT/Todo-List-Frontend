import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  handleFinish = (idx) => {
    const newData = { ...this.props.todoData[idx] };
    newData.isFinished = !newData.isFinished;
    this.props.updateTodo(idx, newData);
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="mt-3 mb-3">待办事项</h1>
        <TodoList
          todoData={this.props.todoData}
          handleDelete={this.handleDelete}
          handleFinish={this.handleFinish}
          preview={false}
        />
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
  updateTodo: (idx, data) => {
    return {
      type: 'updateTodo',
      value: {
        idx: idx,
        data: data,
      }
    };
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);