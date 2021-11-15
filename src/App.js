import './App.css';
import { Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import  Search from './components/Search';
import Profiles from './components/Profiles/Profiles';
import { useState, useEffect, useMemo } from 'react';
// import Profile from './components/Profiles/Profile';
import PostService from './API/PostService';
import LoaderDisabled from './Loader/Loader';
import { useFetching } from './hooks/useFetching';
import Error from './components/Error/Error';



function App() {
  const [users, setUsers] = useState([]);
  const [fetchUsers, isUsersLoading, usersError] = useFetching( async () => {
    const response = await PostService.getAll();
    setUsers(response.items);
  });
  const [selectedSort, setselectedSort] =useState("");

    useEffect(() => {
      fetchUsers();
    }, []);
    
    const sortUsers = (sort) => {
      if(sort === "firstName"){
        setUsers([...users].sort((a, b) => a[sort].localeCompare(b[sort])));
      }
      else if (sort === "birthday"){
        setUsers([...users].sort((a, b) => {
          a = a[sort].split('/').reverse().join('');
          b = b[sort].split('/').reverse().join('');
          return a > b ? 1 : a < b ? -1 : 0;
        })
        )}
    }; 

  return (
    <>
    <Container className='containerStyle' fluid>
    <Search sortUsers={sortUsers}/>
      {isUsersLoading
      ? <LoaderDisabled />
      : <Profiles users={users} />}
      {usersError && <Error reload={fetchUsers}/>}
    <Routes>
    {/* <Route path="/:profileId" element={<Profile/>}/> */}
    </Routes>
    </Container>
    </>
  );
}

export default App;
