import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import  Search from '../components/Search';
import Profiles from '../components/Profiles/Profiles';
import { useState, useEffect, useMemo } from 'react';
import PostService from '../API/PostService';
import LoaderDisabled from '../Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import Error from '../components/Error/Error';



function ProfilesData() {
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
            let firstDifference = new Date().getMonth()- new Date(a[filter.sort]).getMonth();
            let secondDifference = new Date().getMonth() - new Date (b[filter.sort]).getMonth();
            return firstDifference-secondDifference;
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
      : <Profiles users={sortedAndSearchedUsers} filter={filter.sort}/>}
      {usersError && <Error reload={fetchUsers}/>}
    </Container>
    </>
  );
}

export default ProfilesData;
