import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions";
const initialState = {
    user: {
        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
        name: 'Monster'
    }
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_AVATAR:
            let avatar = {...state.avatar};
            avatar = action.payload || avatar;
            return {...state, avatar};
        case CHANGE_NAME:
            let name = {...state.name};
            name = action.payload || name;
            return {...state, name};
        default:
            return state;
    }
}