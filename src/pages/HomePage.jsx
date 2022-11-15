import dayjs from 'dayjs';
import React, { Component } from 'react';
import Calender from '../components/Calender';

class HomePage extends Component {
    state = {
        year: 0,
        month: 0,
        day: 0,
    }

    constructor() {
        super();
        const now = dayjs();
        this.state.year = now.year();
        this.state.month = now.month() + 1; // 1~12
        this.state.day = now.daysInMonth(); // 1~31
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
            this.setState({ year: this.state.year - 1 })
            this.setState({ month: 12 });
        }
        else {
            this.setState({ month: this.state.month - 1 });
        }
    }

    handleMonthIncreace = () => {
        if (this.state.month + 1 > 12) {
            this.setState({ year: this.state.year + 1 })
            this.setState({ month: 1 });
        }
        else {
            this.setState({ month: this.state.month + 1 });
        }
    }

    handleSelectDay = (day) => {
        console.log(day);
        this.setState({ day });
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="mt-3 mb-3">提醒事项</h1>
                <div className="row">
                    <div className="col">
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
                    <div className="col">
                        <h1>awa!!!</h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;