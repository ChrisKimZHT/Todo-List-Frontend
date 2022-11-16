import dayjs from 'dayjs';
import React, { Component } from 'react';
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

  constructor() {
    super();
    const now = dayjs();
    this.state.year = now.year();
    this.state.month = now.month() + 1; // 1~12
    this.state.day = now.date(); // 1~31
    const localStorageNoteData = localStorage.getItem('noteData');
    if (localStorageNoteData) {
      this.state.noteData = JSON.parse(localStorageNoteData);
    }
    const localStorageTodoData = localStorage.getItem('todoData');
    if (localStorageTodoData) {
      this.state.todoData = JSON.parse(localStorageTodoData);
    }
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
    this.filterTodoList(this.state.year, this.state.month, day);
  }

  filterTodoList = (year, month, day) => {
    const filteredTodo = this.state.todoData.filter(x => {
      if (x.isDeadLine) {
        return dayjs(x.end).isSame(`${year}-${month}-${day}`, 'day');
      } else {
        return dayjs(x.begin).isSame(`${year}-${month}-${day}`, 'day');
      }
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
              <div className="col-7">
                <h3>{`${this.state.year} 年 ${this.state.month} 月 ${this.state.day} 日的待办`}</h3>
                <TodoList
                  todoData={this.state.filteredTodo}
                  handleDelete={this.handleDelete}
                  onlyTitle={true}
                />
              </div>
              <div className="col-5">
                <div className="card p-3">
                  <div className="input-group mb-2">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.handleMonthDecreace}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                      </svg>
                    </button>
                    <input type="number" className="form-control" value={this.state.year} onChange={this.inputYearChange} />
                    <input type="number" className="form-control" value={this.state.month} onChange={this.inputMonthChange} />
                    <button className="btn btn-outline-secondary" type="button" onClick={this.handleMonthIncreace}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
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
        <div className="card">
          <div className="card-header">我的便签</div>
          <div className="card-body">
            <NoteList
              noteData={this.state.noteData}
              onlyDisplay={true}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;