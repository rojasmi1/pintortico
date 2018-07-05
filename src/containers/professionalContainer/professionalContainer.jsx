import { connect } from 'react-redux';
import { actions } from '../../store/globalReducer';
import Professional from '../../layout/professional';

const mapStateToProps = state => ({
  ...state.professional,
  ...state.global
});

const mapDispatchToProps = dispatch => ({
  loadContent: locale => dispatch(actions.loadContent('professional', locale))
});

export default connect(mapStateToProps, mapDispatchToProps)(Professional);
