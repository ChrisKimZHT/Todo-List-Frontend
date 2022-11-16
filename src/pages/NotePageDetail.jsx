import dayjs from 'dayjs';
import React, { Component } from 'react';
import { Route, Routes, useParams } from 'react-router';
import EditNote from '../components/EditNote';
import DisplayNote from '../components/DisplayNote';

class NotePageDetailClass extends Component {
  state = {
    noteData: [],
    selectedData: {},
    selectedIndex: 0,
  }

  constructor(props) {
    super();
    const localStorageData = localStorage.getItem('noteData');
    if (localStorageData) {
      this.state.noteData = JSON.parse(localStorageData);
      this.state.selectedIndex = this.state.noteData.findIndex(x => x.id === parseInt(props.params.id));
      this.state.selectedData = this.state.noteData[this.state.selectedIndex];
    }
  }

  handleDelete = () => {
    const noteData = this.state.noteData.filter(
      x => x.id !== this.state.selectedData.id
    );
    this.setState({ noteData });
    localStorage.setItem("noteData", JSON.stringify(noteData));
    window.history.back(-1);
  }

  handleEdit = (title, content) => {
    const noteData = [...this.state.noteData];
    const selectedData = this.state.selectedData;
    selectedData.title = title;
    selectedData.content = content;
    selectedData.date = dayjs().format("YYYY-MM-DD HH:mm");
    this.setState({ selectedData });
    noteData[this.state.selectedIndex] = selectedData;
    this.setState({ noteData });
    localStorage.setItem('noteData', JSON.stringify(noteData));
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

export default NotePageDetail;