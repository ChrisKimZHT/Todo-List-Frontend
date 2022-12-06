import React, { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage'
import NotePage from './pages/NotePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotePageDetail from './pages/NotePageDetail';
import TodoPageDetail from './pages/TodoPageDetail';
import NewTodoPage from './pages/NewTodoPage';
import AlertBox from './components/AlertBox';
import { checkLogin } from './service/service';

class App extends Component {
  render() {
    checkLogin();
    return (
      <React.Fragment>
        <NavBar />
        <AlertBox />
        <div className='container'>
          <Routes>
            <Route index element={<Navigate to={localStorage.getItem("token") === null ? "/login" : "/home"} />}></Route>
            <Route path='/home' element={<HomePage />}></Route>
            <Route path='/todo' element={<TodoPage />}></Route>
            <Route path='/todo/new' element={<NewTodoPage />}></Route>
            <Route path='/todo/:id/*' element={<TodoPageDetail />}></Route>
            <Route path='/note' element={<NotePage />}></Route>
            <Route path='/note/:id/*' element={<NotePageDetail />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/register' element={<RegisterPage />}></Route>
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;