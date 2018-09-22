import { connect } from 'react-redux';
import Events from 'layout/Events';

const mapStateToProps = state => ({
  ...state.home,
  ...state.global
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
