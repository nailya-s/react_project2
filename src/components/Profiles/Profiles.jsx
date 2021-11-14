import React from 'react';
// import Profile from './Profile';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Feed } from 'semantic-ui-react';


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

    return <div>
            {
                users.map(u =>
                    <div key={u.id}>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label image={u.avatarUrl} />
                                <Feed.Content>
                                    <Feed.Date content='1 day ago' />
                                    <Feed.Summary>
                                        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    </div>
                )
            }
    </div>
}

export default Profiles
