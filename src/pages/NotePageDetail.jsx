import React from 'react';
import { Route, Routes, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import EditNote from '../components/EditNote';
import DisplayNote from '../components/DisplayNote';
import { service } from '../service/service';

const NotePageDetail = () => {
  const id = useParams().id;

  const handleDelete = async () => {
    await service.note.delete(id);
    window.history.back(-1);
  }

  return (
    <React.Fragment>
      <h1 className="mt-3 mb-3">我的便签</h1>
      <Routes>
        <Route path="/" element={
          <React.Fragment>
            <DisplayNote id={id} />
            <div className="mt-2 float-end">
              <Link to="/note" title="返回" className="btn btn-success me-2"><i className="bi bi-arrow-return-left"></i></Link>
              <Link to="./edit" title="编辑" className="btn btn-primary me-2"><i className="bi bi-pen"></i></Link>
              <button onClick={handleDelete} title="删除" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
            </div>
          </React.Fragment>
        }></Route>
        <Route path="/edit" element={
          <EditNote id={id} />
        }></Route>
      </Routes>
    </React.Fragment>
  );
}

export default NotePageDetail;