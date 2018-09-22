import { connect } from 'react-redux';
import Gallery from 'layout/Gallery';

const mapStateToProps = state => ({
  ...state.home,
  ...state.global
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
