import { connect } from 'react-redux';
import Home from 'layout/Home';

const mapStateToProps = state => ({
  ...state.home,
  ...state.global
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
