import dayjs from 'dayjs';
import React, { Component } from 'react';
import { Route, Routes, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import EditNote from '../components/EditNote';
import DisplayNote from '../components/DisplayNote';
import { connect } from 'react-redux';

class NotePageDetailClass extends Component {
  state = {
    selectedIndex: 0,
  }

  constructor(props) {
    super();
    this.state.selectedIndex = props.noteData.findIndex(x => x.id === parseInt(props.params.id));
  }

  handleDelete = () => {
    this.props.deleteNoteByIndex(this.state.selectedIndex);
    window.history.back(-1);
  }

  handleEdit = (title, content) => {
    const newData = { ...this.props.noteData[this.state.selectedIndex] };
    newData.title = title;
    newData.content = content;
    newData.date = dayjs().format("YYYY-MM-DD HH:mm");
    this.props.updateNote(this.state.selectedIndex, newData);
  }

  handleStar = () => {
    const newData = { ...this.props.noteData[this.state.selectedIndex] };
    newData.star = !newData.star;
    this.props.updateNote(this.state.selectedIndex, newData);
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="mt-3 mb-3">我的便签</h1>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <DisplayNote
                {...this.props.noteData[this.state.selectedIndex]}
                handleDelete={this.handleDelete}
                handleStar={this.handleStar}
              />
              <div className="mt-2 float-end">
                <Link to="/note" title="完成" className="btn btn-success me-2"><i className="bi bi-check-circle"></i></Link>
                <Link to="./edit" title="编辑" className="btn btn-primary me-2"><i className="bi bi-pen"></i></Link>
                <button onClick={this.handleDelete} title="删除" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
              </div>
            </React.Fragment>
          }></Route>
          <Route path="/edit" element={
            <EditNote
              {...this.props.noteData[this.state.selectedIndex]}
              handleEdit={this.handleEdit}
              handleStar={this.handleStar}
            />
          }></Route>
        </Routes>
      </React.Fragment>
    );
  }
}

const NotePageDetail = (props) => {
  return (
    <NotePageDetailClass
      {...props}
      params={useParams()}
    />
  );
}

const mapStateToProps = (state, props) => {
  return {
    noteData: state.note.data,
  };
}

const mapDispatchToProps = {
  deleteNoteByIndex: (index) => {
    return {
      type: 'deleteNoteByIndex',
      value: index,
    };
  },
  updateNote: (idx, data) => {
    return {
      type: 'updateNote',
      value: {
        idx: idx,
        data: data,
      }
    };
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(NotePageDetail);