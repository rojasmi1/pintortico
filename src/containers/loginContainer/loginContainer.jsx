import { connect } from 'react-redux';
import Login from '../../layout/login';
import { actions } from '../../store/globalReducer';

const mapStateToProps = state => ({
  ...state.global
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(actions.login(email, password)),
  logout: () => dispatch(actions.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
