import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './page/navbar';
import Home from './page/home';
import Todo from './page/todo'
import Note from './page/note';

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