import React from 'react';
import TodoList from '../components/TodoList';


const TodoPage = () => {
  return (
    <React.Fragment>
      <h1 className="mt-3 mb-3">待办事项</h1>
      <TodoList preview={false} />
    </React.Fragment>
  );
}

export default TodoPage;