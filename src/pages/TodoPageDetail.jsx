import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Routes, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import DisplayTodo from '../components/DisplayTodo';
import EditTodo from '../components/EditTodo';

class TodoPageDetailClass extends Component {
  state = {
    selectedIndex: 0,
  }

  constructor(props) {
    super();
    this.state.selectedIndex = props.todoData.findIndex(x => x.id === parseInt(props.params.id));
  }

  handleDelete = () => {
    this.props.deleteTodoByIndex(this.state.selectedIndex);
    window.history.back(-1);
  }

  handleEdit = (data) => {
    this.props.updateTodo(this.state.selectedIndex, data);
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="mt-3 mb-3">待办事项</h1>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <DisplayTodo
                {...this.props.todoData[this.state.selectedIndex]}
              />
              <div className="mt-2 float-end">
                <Link to="/todo" title="完成" className="btn btn-success me-2"><i className="bi bi-check-circle"></i></Link>
                <Link to="./edit" title="编辑" className="btn btn-primary me-2"><i className="bi bi-pen"></i></Link>
                <button onClick={this.handleDelete} title="删除" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
              </div>
            </React.Fragment>
          }></Route>
          <Route path="/edit" element={
            <EditTodo
              {...this.props.todoData[this.state.selectedIndex]}
              handleEdit={this.handleEdit}
            />
          }></Route>
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