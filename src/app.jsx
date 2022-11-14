import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage'
import NotePage from './pages/NotePage';
import NotePageDetail from './pages/NotePageDetail';

class App extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<HomePage />}></Route>
                        <Route path='/todo' element={<TodoPage />}></Route>
                        <Route path='/todo/:id/*'></Route>
                        <Route path='/note' element={<NotePage />}></Route>
                        <Route path='/note/:id/*' element={<NotePageDetail />}></Route>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}

export default App;