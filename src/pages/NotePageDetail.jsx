import dayjs from 'dayjs';
import React, { Component } from 'react';
import { Route, Routes, useParams } from 'react-router';
import EditNote from '../components/EditNote';
import DisplayNote from '../components/DisplayNote';
import { connect } from 'react-redux';

class NotePageDetailClass extends Component {
  state = {
    selectedData: {},
    selectedIndex: 0,
  }

  constructor(props) {
    super();
    this.state.selectedIndex = props.noteData.findIndex(x => x.id === parseInt(props.params.id));
    this.state.selectedData = props.noteData[this.state.selectedIndex];
  }

  handleDelete = () => {
    this.props.deleteNoteByIndex(this.state.selectedIndex);
    window.history.back(-1);
  }

  handleEdit = (title, content) => {
    const newData = { ...this.state.selectedData };
    newData.title = title;
    newData.content = content;
    newData.date = dayjs().format("YYYY-MM-DD HH:mm");
    this.props.updateNote(this.state.selectedIndex, newData);
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="mt-3 mb-3">我的便签</h1>
        <Routes>
          <Route path="/" element={<DisplayNote {...this.state.selectedData} handleDelete={this.handleDelete} />}></Route>
          <Route path="/edit" element={<EditNote {...this.state.selectedData} handleEdit={this.handleEdit} />}></Route>
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