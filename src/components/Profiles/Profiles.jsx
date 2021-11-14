import React from 'react';
// import Profile from './Profile';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Item, Tab, Image } from 'semantic-ui-react';
import s from './Profiles.module.css';

const sections = ["Все", "Design", "Analytics", "Management", "IOS", "Android", "Back_office", "Frontend", "HR", "PR", "Backend", "Support"];



const Profiles = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const response = await axios.get(`https://stoplight.io/mocks/kode-education/trainee-test/25143926/users`);
            setUsers(response.data.items);
            console.log(response.data.items);
        } catch (e) {
            setUsers(e.message);
        }
    };

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
                                            <Item.Group link> 
                                            <Item>
                                                <Image size='tiny' src={p.avatarUrl} avatar  />
                                                <Item.Content verticalAlign='middle'>
                                                    <Item.Header>{p.firstName} {p.lastName}</Item.Header>
                                                    <Item.Description>{p.position}</Item.Description>
                                                </Item.Content>
                                            </Item>
                                            </Item.Group> 
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
