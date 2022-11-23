import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditTodo from '../components/EditTodo';

class NewTodoPage extends Component {
  state = {}

  handleAdd = (data) => {
    this.props.addTodo(data);
  }

  render() {
    return (
      <React.Fragment>
        <h1 className='mt-3 mb-3'>新待办事项</h1>
        <EditTodo
          id={this.props.todoIndex} title="" detail=""
          isDeadLine={false} begin="" end=""
          addMode={true}
          handleEdit={this.handleAdd}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    todoIndex: state.todo.index,
  };
}

const mapDispatchToProps = {
  'addTodo': (data) => {
    return {
      type: 'addTodo',
      value: data,
    };
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoPage);