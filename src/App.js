import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import ProfilesData from './Pages/ProfilesData';
import ProfileDetails from './components/Profiles/ProfileDetails';

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<ProfilesData/>}/>
        <Route path="/user/:id" element={<ProfileDetails/>}/>
    </Routes>
    </>
  )
}

export default App
