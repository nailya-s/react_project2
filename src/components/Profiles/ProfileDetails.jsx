import React, { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { useParams, } from 'react-router';

import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import ProfileInfo from './ProfileInfo';


const ProfileDetails = () => {
    const params = useParams();
    const [users, setUser] = useState([]);
    const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
        const response = await PostService.getById();
        setUser(response);
    });

    useEffect(() => {
        fetchUsers();
    }, []);




    return (
        <div>
            {users.filter(user => user.id === params.id).map(p => (
               <ProfileInfo key={p.id} avatar={p.avatarUrl} firstName={p.firstName} lastName={p.lastName} position={p.position} userTag={p.userTag} birthday={p.birthday} id={p.id} phone={p.phone}/>
      ))}
        </div>
    )

    
}

export default ProfileDetails
