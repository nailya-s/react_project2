import React from 'react'
import { Item, Image, Container, Divider, Icon } from 'semantic-ui-react';
import s from './ProfileInfo.module.css'
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment/locale/ru';
import star from '../../icons/star.svg';
import call from '../../icons/phone.svg';

const ProfileInfo = ({ avatar, firstName, lastName, position, userTag, id, birthday, phone }) => {
    const router = useNavigate();
    const birthDay = new Date(birthday);
    const phoneFormat = phone.split('-').join(" ");


    return (
        <div >
            <div className={s.container}>
                <div className={s.arrow}>
                    <Icon name="arrow left" onClick={() => router('/')} />
                </div>
                <div className={s.profile}>
                    <Item.Group link >
                        <Image size="small" src={avatar} avatar />
                        <div className={s.content}>
                            <div>
                                <strong className={s.textStyle}>{firstName} {lastName}</strong>
                                <sup className={s.tagStyle}>{userTag.toLowerCase()}</sup>
                            </div>
                            <p className={s.decription}>{position}</p>
                        </div>
                    </Item.Group>
                </div>
            </div>
            <div className={s.details}>
                <div>
                    <div className={s.flex}>
                        <img src={star} alt="star" />
                    <Moment format="DD MMMM YYYY" >{birthDay}</Moment>
                    </div>
                    <div className={s.flex}>
                        <img src={call} alt="phone" />
                    <p className={s.phone}><a href="tel:{phoneFormat}">+7 (990) {phoneFormat}</a></p>
                    </div>
                </div>
                <div className={s.age}>
                    <Moment fromNow ago>{birthDay}</Moment>
                </div>
            </div>


        </div>
    )
}

export default ProfileInfo
