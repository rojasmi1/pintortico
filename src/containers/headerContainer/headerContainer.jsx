import { connect } from 'react-redux';
import Header from '../../components/header';
import { actions } from '../../store/globalReducer';

const mapStateToProps = state => ({
  ...state.global,
  pathname: state.router.location.pathname
});

const mapDispatchToProps = dispatch => ({
  changeLocale: (locale, pathname) => {
    pathname = pathname.substring(1);
    if (pathname === '') {
      pathname = 'homepage';
    } else if (pathname === 'login') {
      pathname = '';
    }

    return dispatch(actions.changeLocale(locale, pathname));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
