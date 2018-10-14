import { connect } from 'react-redux';
import ContactForm from 'components/ContactForm';
import { actions } from 'store/contactReducer';

const mapStateToProps = state => ({
  ...state.contact
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (name, email, message, callback) =>
    dispatch(actions.sendMessage(name, email, message))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
