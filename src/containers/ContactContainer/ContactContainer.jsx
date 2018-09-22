import { connect } from 'react-redux';
import Contact from 'layout/Contact';

const mapStateToProps = state => ({
  ...state.home,
  ...state.global
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
