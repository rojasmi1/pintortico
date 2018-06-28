import { connect } from 'react-redux';
import Professional from '../../layout/professional';

const mapStateToProps = state => ({
    ...state.professional, ...state.global
  });

  const mapDispatchToProps = dispatch => ({
  });

export default connect(mapStateToProps, mapDispatchToProps)(Professional);
