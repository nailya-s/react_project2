import React from 'react'


const Profile = () => {
    return (
        <div key={p.id}>
            <Feed>
                <Feed.Event>
                    <Feed.Label image={p.avatarUrl} />
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

export default Profile
