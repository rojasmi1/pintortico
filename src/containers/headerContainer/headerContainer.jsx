import { connect } from "react-redux";
import Header from '../../components/header';

const mapStateToProps = state => ({
  ...state.global
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
