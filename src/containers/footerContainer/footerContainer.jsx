import { connect } from 'react-redux';
import Footer from '../../components/footer';

const mapStateToProps = state => ({
  ...state.global
});

export default connect(mapStateToProps)(Footer);
