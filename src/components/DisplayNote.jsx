import React from 'react';
import { Link } from 'react-router-dom';


const DisplayNote = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                {`#${props.id} - ${props.date}`}
            </div>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <hr />
                <p className="card-text">{props.content}</p>
                <button onClick={props.handleDelete} className="btn btn-danger float-end ms-2">删除</button>
                <Link to="./edit" className="btn btn-primary float-end ms-2">编辑</Link>
                <Link to="/note" className="btn btn-success float-end ms-2">完成</Link>
            </div>
        </div>
    );
}

export default DisplayNote;