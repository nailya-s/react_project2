import React from 'react'
import { Item, Image, Label } from 'semantic-ui-react';
import s from './Profile.module.css';

const Profile = ({avatar, firstName, lastName, position, userTag}) => {
    return (
        <div>
        <Item.Group link> 
        <Item>
            <Image size='tiny' src={avatar} avatar  />
            <Item.Content verticalAlign='middle'>
                <Item.Header>{firstName} {lastName} </Item.Header>
                <label className={s.tagStyle}>{userTag.toLowerCase()}</label>
                <Item.Description>{position}</Item.Description>
            </Item.Content>
        </Item>
        </Item.Group> 
    </div>
    )
}

export default Profile
