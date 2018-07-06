import { connect } from 'react-redux';
import Login from '../../layout/login';
import { actions } from '../../store/globalReducer';

const mapStateToProps = state => ({
  ...state.global
});

const mapDispatchToProps = dispatch => ({
  login: (email, password, locale, previousPage) =>
    dispatch(actions.login(email, password, locale, previousPage)),
  logout: locale => dispatch(actions.logout(locale))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
