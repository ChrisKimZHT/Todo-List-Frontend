import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteList from '../components/NoteList';
import dayjs from 'dayjs';


class NotePage extends Component {
  state = {}

  // 将备忘录加入数据列表中
  handleAdd = (title, content) => {
    this.props.addNote({
      id: this.props.noteIndex,
      title: title,
      content: content,
      star: false,
      date: dayjs().format("YYYY-MM-DD HH:mm"),
    });
  }

  handleStar = (idx) => {
    const newData = { ...this.props.noteData[idx] };
    newData.star = !newData.star;
    this.props.updateNote(idx, newData);
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="mt-3 mb-3">我的便签</h1>
        <div className="mb-4">
          <NoteList
            noteData={this.props.noteData}
            preview={false}
            handleAdd={this.handleAdd}
            handleStar={this.handleStar}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    noteData: state.note.data,
    noteIndex: state.note.index,
  };
}

const mapDispatchToProps = {
  addNote: (data) => {
    return {
      type: 'addNote',
      value: data,
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

export default connect(mapStateToProps, mapDispatchToProps)(NotePage);