import React from 'react'
import { Item, Image } from 'semantic-ui-react';
import s from './Profile.module.css';
import {useNavigate} from 'react-router-dom';

const Profile = ({avatar, firstName, lastName, position, userTag, id}) => {
    const router = useNavigate();

    return (
        <div>
        <Item.Group link> 
        <Item>
            <Image size='tiny' src={avatar} avatar  />
            <Item.Content verticalAlign='middle'>
                <Item.Header onClick={()=> router(`/user/${id}`)}>{firstName} {lastName} </Item.Header>
                <label className={s.tagStyle}>{userTag.toLowerCase()}</label>
                <Item.Description>{position}</Item.Description>
            </Item.Content>
        </Item>
        </Item.Group> 
    </div>
    )
}

export default Profile
