import React from 'react';
import EditTodo from '../components/EditTodo';

const NewTodoPage = () => {
  return (
    <React.Fragment>
      <h1 className='mt-3 mb-3'>新待办事项</h1>
      <EditTodo addMode={true} />
    </React.Fragment>
  );
}

export default NewTodoPage;