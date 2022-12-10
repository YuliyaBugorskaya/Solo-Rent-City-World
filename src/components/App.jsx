import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import TodoForm from './TodoForm';
import NavBar from './NavBar';
import SignUp from './registration/SignUp';
import SignIn from './registration/SignIn';
import MainPage from './MainPage';

export default function App({ name }) {
  return (
    <div className="container">
      <NavBar name={name} />

      <Routes>

        <Route path="/reg" element={<SignUp />} />
        <Route path="/avt" element={<SignIn />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}
