import React from 'react';
import { Tab } from 'semantic-ui-react';
import s from './Profiles.module.css';
import Profile from './Profile';
import { Image } from 'semantic-ui-react';
import search from '../../icons/searchUser.svg';
import Moment from 'react-moment';
import 'moment/locale/ru';

const sections = ["Все", "Design", "Analytics", "Management", "IOS", "Android", "Back_office", "Frontend", "HR", "PR", "Backend", "Support"];



const Profiles = ({ users, filter}) => {
    
    if (!users.length) {
        return (
            <div className={s.searchFailure}>
                <Image size='small' src={search} avatar />
                <p><strong>Мы никого не нашли</strong></p>
                <p className= {s.greyText}>Попробуй скорректировать запрос</p>
                
            </div>
        )
    }
    function getPanes(sections) {
        return sections.map(function (section) {
            return {
                menuItem: section,
                render: () =>
                    <Tab.Pane attached="false">
                        {
                            users
                                .filter((u) => u.department === section.toLowerCase() || section === "Все")
                                .map((p) => {
                                    return (
                                        <div key={p.id} className={s.itemStyle}>
                                            <Profile avatar={p.avatarUrl} firstName={p.firstName} lastName={p.lastName} position={p.position} userTag={p.userTag} birth={p.birthday} id={p.id}/>
                                            {filter === "birthday" && <Moment format="DD MMMM YYYY">{p.birthday}</Moment>}
                                        </div>

                                    )
                                })

                        }

                    </Tab.Pane>
            }
        })
    }

    return <div>

        <Tab menu={{ secondary: true, pointing: true }} panes={getPanes(sections)} />

    </div>
}

export default Profiles
