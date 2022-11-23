import dayjs from 'dayjs';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calender from '../components/Calender';
import NoteList from '../components/NoteList';
import TodoList from '../components/TodoList';

class HomePage extends Component {
  state = {
    year: 0,
    month: 0, // 1~12
    day: 0,   // 1~31
    todoData: [],
    filteredTodo: [],
    noteData: [],
    filteredNote: [],
  }

  constructor(props) {
    super();
    const now = dayjs();
    this.state.year = now.year();
    this.state.month = now.month() + 1; // 1~12
    this.state.day = now.date(); // 1~31
    this.state.todoData = props.todoData;
    this.state.noteData = props.noteData;
    this.state.filteredTodo = props.todoData.filter(x => {
      return dayjs(x.isDeadLine ? x.end : x.begin).isSame(`${now.year()}-${now.month() + 1}-${now.date()}`, 'day');
    }); // 默认筛选出今天的待办
  }

  inputYearChange = (val) => {
    this.setState({ year: val.target.value });
  }

  inputMonthChange = (val) => {
    if (val.target.value < 1) {
      this.setState({ month: 12 });
      this.setState({ year: this.state.year - 1 });
    }
    else if (val.target.value > 12) {
      this.setState({ month: 1 });
      this.setState({ year: this.state.year + 1 });
    }
    else {
      this.setState({ month: val.target.value });
    }
  }

  handleMonthDecreace = () => {
    if (this.state.month - 1 < 1) {
      this.setState({ year: this.state.year - 1 });
      this.setState({ month: 12 });
    }
    else {
      this.setState({ month: this.state.month - 1 });
    }
  }

  handleMonthIncreace = () => {
    if (this.state.month + 1 > 12) {
      this.setState({ year: this.state.year + 1 });
      this.setState({ month: 1 });
    }
    else {
      this.setState({ month: this.state.month + 1 });
    }
  }

  handleSelectDay = (day) => {
    this.setState({ day });
    const filteredTodo = this.state.todoData.filter(x => {
      return dayjs(x.isDeadLine ? x.end : x.begin).isSame(`${this.state.year}-${this.state.month}-${day}`, 'day');
    });
    this.setState({ filteredTodo });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="mt-3 mb-3">提醒事项</h1>
        <div className="card mb-3">
          <div className="card-header">待办事项</div>
          <div className="card-body">
            <div className="row">
              <h3>{`${this.state.year} 年 ${this.state.month} 月 ${this.state.day} 日的待办`}</h3>
              <div className="col-xl-8 col-lg-7 col-md-6">
                <TodoList
                  todoData={this.state.filteredTodo}
                  handleDelete={this.handleDelete}
                  preview={true}
                />
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="card p-3 sticky-top homepage-calender" style={{ top: "70px", zIndex: "980" }}>
                  <div className="input-group mb-2">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.handleMonthDecreace}>
                      <i className="bi bi-caret-left-fill"></i>
                    </button>
                    <input type="number" className="form-control" value={this.state.year} onChange={this.inputYearChange} />
                    <input type="number" className="form-control" value={this.state.month} onChange={this.inputMonthChange} />
                    <button className="btn btn-outline-secondary" type="button" onClick={this.handleMonthIncreace}>
                      <i className="bi bi-caret-right-fill"></i>
                    </button>
                  </div>
                  <Calender
                    year={this.state.year}
                    month={this.state.month - 1} // 0~11
                    day={this.state.day} // 1~31
                    handleSelectDay={this.handleSelectDay}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">收藏便签</div>
          <div className="card-body">
            <NoteList
              noteData={this.state.noteData}
              preview={true}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    todoData: state.todo.data,
    noteData: state.note.data,
  };
}

export default connect(mapStateToProps)(HomePage);