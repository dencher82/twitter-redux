import {CHANGE_STATS} from "../actions/statsActions";
const initialState = {
    stats: {
        followers: 0,
        following: 0
    }
}

export default function statsReducer(state = initialState, action) {
    const stats = {...state.stats};
    switch (action.type) {
        case CHANGE_STATS:
            const res = stats[action.fieldType] + action.increment;
            stats[action.fieldType] = res < 0 ? 0 : res;
            // if (action.fieldType === 'followers') {
            //     return {...state, followers: stats[action.fieldType]};
            // }
            // if(action.fieldType === 'following') {
                return {...state, stats};
            // }
            // break;
        default:
            return state;
    }
}