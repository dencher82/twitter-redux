import React from 'react';
import Avatar from "../containers/AvatarContainer";

const Stats = props => {
    return (
        <div className='user-stats'>
            <div>
                <Avatar/>
                {props.user.name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => props.changeStats('followers', 1)}
                    onContextMenu={(event) => {
                        event.preventDefault();
                        props.changeStats('followers', -1)
                    }}
                >Followers: {props.stats.followers}</div>
                <div
                    onClick={() => props.changeStats('following', 1)}
                    onContextMenu={(event) => {
                        event.preventDefault();
                        props.changeStats('following', -1)
                    }}
                >Following: {props.stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;