import React from 'react';
import { Tab } from 'semantic-ui-react';
import s from './Profiles.module.css';
import Profile from './Profile';
import { Image, Divider } from 'semantic-ui-react';
import search from '../../icons/searchUser.svg';
import Moment from 'react-moment';
import 'moment/locale/ru';

const sections = ["Все", "Design", "Analytics", "Management", "IOS", "Android", "Back_office", "Frontend", "HR", "PR", "Backend", "Support"];



const Profiles = ({ users, filter }) => {

    if (!users.length) {
        return (
            <div className={s.searchFailure}>
                <Image size='small' src={search} avatar />
                <p><strong>Мы никого не нашли</strong></p>
                <p className={s.greyText}>Попробуй скорректировать запрос</p>

            </div>
        )
    }


    function getPanes(sections) {
        return sections.map(function (section) {
            return {
                menuItem: section,
                render: () =>
                    <Tab.Pane >
                        {
                            users
                                .filter((u) => u.department === section.toLowerCase() || section === "Все")
                                .map((p, index) => {
                                    var showDivider = false;
                                    var currentDate = new Date();
                                    var currentYear = currentDate.getFullYear();
                                    let sortedUsers = [...users].sort(function(a,b){
                                        return  new Date(new Date(a["birthday"]).setFullYear(currentYear))- new Date(new Date(b["birthday"]).setFullYear(currentYear));  
                                    })
                                    showDivider = (p.id === sortedUsers[users.length-1].id);
                                    
                                    return (
                                        <div key={p.id} className={s.itemStyle}>
                                            <div className={s.profileStyle}>
                                            <Profile avatar={p.avatarUrl} firstName={p.firstName} lastName={p.lastName} position={p.position} userTag={p.userTag} birth={p.birthday} id={p.id} />
                                            {filter === "birthday" && <Moment format="DD MMMM">{p.birthday}</Moment>}
                                            </div>
                                            <div>
                                            {
                                                showDivider && filter === "birthday" && <Divider horizontal>{currentYear+1}</Divider>
                                            }
                                            </div>
                                            
                                        </div>


                                    )
                                })

                        }

                    </Tab.Pane>
            }
        })
    }

    return <div>

        <Tab menu={{ secondary: true, pointing: true, className:"wrapped"}} panes={getPanes(sections)} />

    </div>
}

export default Profiles
