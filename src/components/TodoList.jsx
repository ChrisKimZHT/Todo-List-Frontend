import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TodoList.scss';

class TodoList extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="div-todolist">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col" className="table-date">日期</th>
                                <th scope="col" className="table-title">事项</th>
                                <th scope="col" className="table-button">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.todoData.map(x =>
                                <tr key={x.id}>
                                    <td>{x.date}</td>
                                    <td>{x.title}</td>
                                    <td align="center">
                                        <Link to={`/todo/${x.id}`} className="p-0 ps-2 pe-2 me-2 btn btn-outline-success btn-sm">详情</Link>
                                        <Link to={`/todo/${x.id}/edit`} className="p-0 ps-2 pe-2 me-2 btn btn-outline-primary btn-sm">编辑</Link>
                                        <button onClick={() => this.props.handleDelete(x.id)} className="p-0 ps-2 pe-2 me-2 btn btn-outline-danger btn-sm">删除</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </React.Fragment >
        );
    }
}

export default TodoList;