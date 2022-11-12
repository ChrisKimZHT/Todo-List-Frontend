import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './page/navbar';
import Home from './page/home';
import Todo from './page/todo'
import Note from './page/note';
import NoteDetail from './page/noteDetail';

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
                        <Route path='/note/:id/*' element={<NoteDetail />}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}

export default App;