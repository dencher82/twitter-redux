import userReducer from "./userReducer";
import statsReducer from "./statsReducer";
import {combineReducers} from "redux";

// export default function rootReducer(state, action) {
//     return {
//         user: userReducer(state.user, action),
//         stats: statsReducer(state.stats, action)
//     }
// }

const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
})

export default rootReducer