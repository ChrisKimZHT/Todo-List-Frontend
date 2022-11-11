import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Todo from './todo'
import Note from './note';

class App extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/todo' element={<Todo />}></Route>
                        <Route path='/note' element={<Note />}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}

export default App;