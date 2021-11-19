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

    let wrapped = s.wrapped;
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
                                    var nextUser = users.length <= index + 1 ? null : users[index + 1];
                                    if(nextUser != null){
                                    var currentDate = new Date();
                                    var currentYear = currentDate.getFullYear();
                                    var currentUserBd = new Date(new Date(p["birthday"]).setFullYear(currentYear));
                                    var firstDayYear = new Date(currentYear, 0, 1);
                                    var lastDayYear = new Date(currentYear, 12, 31);
                                    var nextUserBd = new Date(new Date(nextUser.birthday).setFullYear(currentYear));
                                    showDivider = (nextUserBd >= firstDayYear && nextUserBd < currentDate) && (currentUserBd >= currentDate && currentUserBd <= lastDayYear);
                                    }
                                    
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
