import React from 'react';
// import Profile from './Profile';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Tab } from 'semantic-ui-react';

import s from './Profiles.module.css';
import Profile from './Profile';
import Modal from '../Modal/Modal';

const sections = ["Все", "Design", "Analytics", "Management", "IOS", "Android", "Back_office", "Frontend", "HR", "PR", "Backend", "Support"];



const Profiles = ({users}) => {;

    function getPanes(sections) {
        return sections.map(function (section) {
            return {
                menuItem: section,
                render: () =>
                    <Tab.Pane attached="false" className={s.tabStyle}>
                        {
                            users
                                .filter((u) => u.department === section.toLowerCase() || section === "Все")
                                .map((p) => {
                                    return (
                                        <div key={p.id} className={s.itemStyle}>
                                            <Profile avatar={p.avatarUrl} firstName={p.firstName} lastName={p.lastName} position={p.position} userTag={p.userTag}/>
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
