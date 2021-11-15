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

  const [filter, setFilter] = useState({sort:'', query: ''});

    useEffect(() => {
      fetchUsers();
    }, []);

    const sortedUsers = useMemo(() => {
        if(filter.sort === "firstName"){
          return [...users].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        else if (filter.sort === "birthday") {
          return [...users].sort((a, b) => {
            a = a[filter.sort].split('/').reverse().join('');
            b = b[filter.sort].split('/').reverse().join('');
            return a > b ? 1 : a < b ? -1 : 0;
          }
        )}
        return users;
    }, [filter.sort, users]);

    const sortedAndSearchedUsers = useMemo(() => {
      return sortedUsers.filter(user => user.firstName.toLowerCase().includes(filter.query.toLowerCase()) || user.userTag.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedUsers]);

    

  return (
    <>
    <Container className='containerStyle' fluid>
    <Search filter={filter} setFilter={setFilter}/>
      {isUsersLoading
      ? <LoaderDisabled />
      : <Profiles users={sortedAndSearchedUsers} />}
      {usersError && <Error reload={fetchUsers}/>}
    <Routes>
    {/* <Route path="/:profileId" element={<Profile/>}/> */}
    </Routes>
    </Container>
    </>
  );
}

export default App;
