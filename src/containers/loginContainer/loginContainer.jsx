import { connect } from 'react-redux';
import Login from '../../layout/login';
import { actions } from '../../store/globalReducer';

const mapStateToProps = state => ({
  ...state.global
});

const mapDispatchToProps = dispatch => ({
  login: (email, password, locale) =>
    dispatch(actions.login(email, password, locale)),
  logout: locale => dispatch(actions.logout(locale))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
