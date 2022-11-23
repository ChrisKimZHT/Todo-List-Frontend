import React from 'react';
import './DisplayNote.scss';

const DisplayNote = (props) => {
  return (
    <div className="card div-display-note">
      <div className="card-header">
        <span>{'#' + props.id}</span>
        <span className="fw-light ms-2">{props.date}</span>
        <span className="float-end" style={{ cursor: 'pointer' }} onClick={props.handleStar}>
          <i className={`bi bi-star${props.star ? "-fill" : ""}`}></i>
        </span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{props.title ? props.title : "无标题"}</h3>
        <hr />
        <p className="card-text">{props.content ? props.content : "无内容"}</p>
      </div>
    </div>
  );
}

export default DisplayNote;