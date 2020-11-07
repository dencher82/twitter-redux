import {CHANGE_STATS} from "../actions/statsActions";

export default function statsReducer(state, action) {
    const stats = {...state};
    switch (action.type) {
        case CHANGE_STATS:
            const res = stats[action.fieldType] + action.increment;
            stats[action.fieldType] = res < 0 ? 0 : res;
            if (action.fieldType === 'followers') {
                return {...state, followers: stats[action.fieldType]};
            }
            if(action.fieldType === 'following') {
                return {...state, following: stats[action.fieldType]};
            }
            break;
        default:
            return state;
    }
}