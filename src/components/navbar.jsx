import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../static/images/icon.png'


class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={icon} alt="icon" width="25" height="25" className="d-inline-block align-text-top"></img>
                        &nbsp;提醒事项
                    </Link>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">首页</Link>
                            <Link className="nav-link" to="/todo">代办</Link>
                            <Link className="nav-link" to="/note">便签</Link>
                        </div>
                    </div>
                </div>
            </nav >
        );
    }
}

export default Navbar;