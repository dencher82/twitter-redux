import {connect} from "react-redux";
import Stats from "../components/Stats";
import {bindActionCreators} from "redux";
import {changeStatsAction} from "../actions/statsActions";

function mapStateToProps(state) {
    return {
        user: {
            name: state.userReducer.user.name
        },
        stats: {
            followers: state.statsReducer.stats.followers,
            following: state.statsReducer.stats.following
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeStats: changeStatsAction}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Stats);