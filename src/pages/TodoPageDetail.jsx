import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Routes, useParams } from 'react-router';
import DisplayTodo from '../components/DisplayTodo';
import EditTodo from '../components/EditTodo';

class TodoPageDetailClass extends Component {
  state = {
    selectedData: {},
    selectedIndex: 0,
  }

  constructor(props) {
    super();
    this.state.selectedIndex = props.todoData.findIndex(x => x.id === parseInt(props.params.id));
    this.state.selectedData = props.todoData[this.state.selectedIndex];
  }

  handleDelete = () => {
    this.props.deleteTodoByIndex(this.state.selectedIndex);
    window.history.back(-1);
  }

  handleEdit = (data) => {
    this.props.updateTodo(this.state.selectedIndex, data);
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

const TodoPageDetail = (props) => {
  return (
    <TodoPageDetailClass
      {...props}
      params={useParams()}
    />
  );
}

const mapStateToProps = (state, props) => {
  return {
    todoData: state.todo.data,
  };
}

const mapDispatchToProps = {
  deleteTodoByIndex: (index) => {
    return {
      type: 'deleteTodoByIndex',
      value: index,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPageDetail);