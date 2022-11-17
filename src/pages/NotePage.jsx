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
      date: dayjs().format("YYYY-MM-DD HH:mm"),
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="mt-3 mb-3">我的便签</h1>
        <NoteList
          noteData={this.props.noteData}
          onlyDisplay={false}
          handleAdd={this.handleAdd}
        />
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
  'addNote': (data) => {
    return {
      type: 'addNote',
      value: data,
    };
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(NotePage);