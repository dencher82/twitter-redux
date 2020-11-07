import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions";

export default function userReducer(state, action) {
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