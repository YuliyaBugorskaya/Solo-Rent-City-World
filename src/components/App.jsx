import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import TodoForm from './TodoForm';
import NavBar from './NavBar';
import SignUp from './registration/SignUp';
import SignIn from './registration/SignIn';
import MainPage from './MainPage';
import AllApartments from './AllApartments';
import Apartments from './Apartments';

export default function App({ name, masApartments, currentUserId }) {
  return (
    <div className="container">
      <NavBar name={name} />

      <Routes>

        <Route path="/reg" element={<SignUp />} />
        <Route path="/avt" element={<SignIn />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/addapartment" element={<AllApartments masApartments={masApartments} currentUserId={currentUserId} />} />
        <Route path="/apartments" element={<Apartments masApartments={masApartments} currentUserId={currentUserId} />} />
      </Routes>
    </div>
  );
}
