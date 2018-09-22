import { connect } from 'react-redux';
import Header from 'components/Header';
import { actions } from 'store/globalReducer';

const mapStateToProps = state => ({
  ...state.global
});

const mapDispatchToProps = dispatch => ({
  changeLocale: locale => dispatch(actions.changeLocale(locale))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
