import {connect} from "react-redux";
import Stats from "../components/Stats";
import {bindActionCreators} from "redux";
import {changeStatsAction} from "../actions/statsActions";

function mapStateToProps(state) {
    return {
        user: {
            name: state.user.name
        },
        stats: {
            followers: state.stats.followers,
            following: state.stats.following
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeStats: changeStatsAction}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Stats);