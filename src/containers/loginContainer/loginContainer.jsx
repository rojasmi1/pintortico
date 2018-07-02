import { connect } from 'react-redux';
import Login from '../../layout/login';
import { actions } from '../../store/globalReducer';

const mapStateToProps = state => ({
  ...state.global
});

const mapDispatchToProps = dispatch => ({
  authenticateUser: () => dispatch(actions.authenticateUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
