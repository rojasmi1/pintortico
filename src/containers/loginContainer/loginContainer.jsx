import { connect } from 'react-redux';
import Login from '../../layout/login';

const mapStateToProps = state => ({
  ...state.global
});

export default connect(mapStateToProps)(Login);
