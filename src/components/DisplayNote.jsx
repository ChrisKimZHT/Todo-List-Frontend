import React, { useEffect, useState } from 'react';
import { service } from '../service/service.js';
import { stamp2str } from '../utils/formatDatetime';
import useAlert from '../utils/useAlert.js';
import './DisplayNote.scss';

const DisplayNote = (props) => {
  const [noteData, setNoteData] = useState({});
  const { setAlert } = useAlert();

  const refreshData = () => {
    const fetchData = async () => {
      await service.note.get(props.id)
        .then(res => {
          setNoteData(res.data.data);
        })
        .catch(err => setAlert(`[ERROR]: ${err.message} in /todo/nextID`, "danger", 0));
    }
    fetchData();
  }

  useEffect(refreshData, [props.id, setAlert]);

  const handleStar = async () => {
    await service.note.toggleStar(props.id);
    refreshData();
  }

  return (
    <div className="card div-display-note">
      <div className="card-header">
        <span>{'#' + noteData.id}</span>
        <span className="fw-light ms-2">{stamp2str(noteData.date)}</span>
        <span className="float-end" style={{ cursor: 'pointer' }} onClick={handleStar}>
          <i className={`bi bi-star${noteData.isStared ? "-fill" : ""}`}></i>
        </span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{noteData.title ? noteData.title : "无标题"}</h3>
        <hr />
        <p className="card-text">{noteData.content ? noteData.content : "无内容"}</p>
      </div>
    </div>
  );
}

export default DisplayNote;