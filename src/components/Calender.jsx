import React, { Component } from 'react';
import getCalenderMat from '../utils/calenderMat';
import './Calender.scss';

class Calender extends Component {
    state = {
        calenderMat: [],
    }

    render() {
        return (
            <React.Fragment>
                <table className="table table-bordered table-striped div-calender">
                    <thead>
                        <tr>
                            <th>日</th>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getCalenderMat(this.props.year, this.props.month).map(r => ( // 行
                                <tr>
                                    {
                                        r.map(c => ( // 列
                                            <td>
                                                {c ? c.date() : ""}
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Calender;