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
            return {...state, stats};
        default:
            return state;
    }
}