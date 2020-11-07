import React from 'react';

const Avatar = props => {
    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                props.changeAvatar(url);
           }}
            onContextMenu={(event) => {
                event.preventDefault();
                const name = prompt('Enter new name');
                props.changeName(name);
            }}
            className={`user-avatar ${props.size||''}`}
            src={props.user.avatar}
            alt={props.user.name}
        />
    );
};

export default Avatar;