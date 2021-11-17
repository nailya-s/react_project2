import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Search from '../components/Search';
import Profiles from '../components/Profiles/Profiles';
import { useState, useEffect, useMemo } from 'react';
import PostService from '../API/PostService';
import LoaderDisabled from '../Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import Error from '../components/Error/Error';



function ProfilesData() {
  const [users, setUsers] = useState([]);
  const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
    const response = await PostService.getAll();
    setUsers(response.items);
  });

  const [filter, setFilter] = useState({ sort: '', query: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const sortedUsers = useMemo(() => {
    if (filter.sort === "firstName") {
      return [...users].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    else if (filter.sort === "birthday") {
      function distanceToBirthday(date){
      let currDate = new Date();
      currDate.setHours(0, 0, 0, 0);
      let currYear = currDate.getFullYear();
  
      let offset = new Date();
      offset.setHours(0, 0, 0, 0);
      offset.setFullYear(currYear + 1);
  
      date = new Date(date + " 00:00");
      date.setFullYear(currYear);
  
      let diff = date - currDate;
      return (diff < 0) ? diff + offset.getTime() : diff;
  }
  
  function getUpcomingBirthdays(users)
  {
      return users.slice(0).sort(
          (a, b) => distanceToBirthday(a[filter.sort]) - distanceToBirthday(b[filter.sort])
      );
  }
return getUpcomingBirthdays([...users]);   
}

    return users;
  }, [filter.sort, users]);
  
  




  const sortedAndSearchedUsers = useMemo(() => {
    return sortedUsers.filter(user => user.firstName.toLowerCase().includes(filter.query.toLowerCase()) || user.userTag.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedUsers]);


  return (
    <>

      <Container className='containerStyle' fluid>
        <Search filter={filter} setFilter={setFilter} />
        {isUsersLoading
          ? <LoaderDisabled />
          : <Profiles users={sortedAndSearchedUsers} filter={filter.sort} />}
        {usersError && <Error reload={fetchUsers} />}
      </Container>
    </>
  );
}

export default ProfilesData;
