import { connect } from "react-redux";
import { actions } from "../../store/homeReducer";
import Home from '../../layout/home';

const mapStateToProps = state => ({
  ...state.home, ...state.global
});

const mapDispatchToProps = dispatch => ({
  asyncAction: () => dispatch(actions.asyncAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
