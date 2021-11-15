import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import  Search from './components/Search';
import Profiles from './components/Profiles/Profiles';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
// import Profile from './components/Profiles/Profile';
import PostService from './API/PostService';
import LoaderDisabled from './Loader/Loader';



function App() {
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
      setIsUsersLoading(true);
        const response = await PostService.getAll();
        setUsers(response.items);
        setIsUsersLoading(false);
    };



  return (
    <>
    
    <Container className='containerStyle' fluid>
    <Search/>
    
      {isUsersLoading
      ? <LoaderDisabled />
      : <Profiles users={users} />}
    <Routes>
    {/* <Route path="/:profileId" element={<Profile/>}/> */}
    </Routes>
    </Container>
    </>
  );
}

export default App;
