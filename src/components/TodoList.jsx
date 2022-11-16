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
                        {this.props.onlyTitle ? "" : (
                            <thead>
                                <tr>
                                    <th scope="col" className="table-date">日期</th>
                                    <th scope="col" className="table-title">事项</th>
                                    <th scope="col" className="table-button">操作</th>
                                </tr>
                            </thead>
                        )}
                        <tbody>
                            {this.props.todoData.map(x =>
                                <tr key={x.id}>
                                    {
                                        this.props.onlyTitle ? "" : (
                                            <td>
                                                {
                                                    x.isDeadLine ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
                                                            <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                            <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                                        </svg>

                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                                        </svg>
                                                    )
                                                }&nbsp;
                                                {
                                                    x.isDeadLine ? x.end : x.begin
                                                }
                                            </td>
                                        )
                                    }
                                    {
                                        this.props.onlyTitle ? (
                                            <td className="table-title">
                                                <Link to={`/todo/${x.id}`}>{x.title}</Link>
                                            </td>
                                        ) : (<td className="table-title">{x.title}</td>)
                                    }
                                    {
                                        this.props.onlyTitle ? "" : (
                                            <td align="center">
                                                <Link to={`/todo/${x.id}`} className="p-0 ps-2 pe-2 me-2 btn btn-outline-success btn-sm">详情</Link>
                                                <Link to={`/todo/${x.id}/edit`} className="p-0 ps-2 pe-2 me-2 btn btn-outline-primary btn-sm table-title">编辑</Link>
                                                <button onClick={() => this.props.handleDelete(x.id)} className="p-0 ps-2 pe-2 me-2 btn btn-outline-danger btn-sm">删除</button>
                                            </td>
                                        )
                                    }
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