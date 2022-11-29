import React from 'react';
import { Route, Routes, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { service } from '../service/service';
import DisplayTodo from '../components/DisplayTodo';
import EditTodo from '../components/EditTodo';


const TodoPageDetail = () => {
  const id = useParams().id;

  const handleDelete = async () => {
    const res = await service.todo.delete(id)
    window.history.back(-1);
  }

  return (
    <React.Fragment>
      <h1 className="mt-3 mb-3">待办事项</h1>
      <Routes>
        <Route path="/" element={
          <React.Fragment>
            <DisplayTodo id={id} />
            <div className="mt-2 float-end">
              <Link to="/todo" title="完成" className="btn btn-success me-2"><i className="bi bi-check-circle"></i></Link>
              <Link to="./edit" title="编辑" className="btn btn-primary me-2"><i className="bi bi-pen"></i></Link>
              <button onClick={handleDelete} title="删除" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
            </div>
          </React.Fragment>
        }></Route>
        <Route path="/edit" element={
          <EditTodo addMode={false} id={id} />
        }></Route>
      </Routes>
    </React.Fragment>
  );
}

export default TodoPageDetail;