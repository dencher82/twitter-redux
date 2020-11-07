import userReducer from "./userReducer";
import statsReducer from "./statsReducer";

export default function rootReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        stats: statsReducer(state.stats, action)
    }
}