import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import FieldError from 'components/FieldError';

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string().required('Required')
});

const styles = theme => ({
  root: {
    maxWidth: 700,
    margin: '0 auto'
  },
  errorMessage: {
    color: theme.palette.common.error,
    fontSize: 20,
    backgroundColor: theme.palette.common.lightGrey,
    padding: theme.spacing.unit
  }
});

class ContactForm extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.isSendingMessage && !this.props.isSendingMessage) {
      this.props.resetForm();
    }
  }

  render() {
    const {
      classes,
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      isSendingMessage,
      contactMessageError
    } = this.props;
    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <Grid container spacing={8} justify="center">
          {contactMessageError && (
            <Grid item>
              <Typography className={classes.errorMessage}>
                Sorry, there was an error while trying to send your message.
                This is a problem in our side, please reload the app or try
                again later.
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography variant="title">
              Got a question or request? I'd love to hear from you.
              <br />
              Send me a message and I'll respond as soon as possible.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              placeholder="First Name"
              label="First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="firstName"
              fullWidth
              error={errors.firstName && touched.firstName}
              disabled={isSendingMessage}
            />
            <FieldError hasErrors={errors.firstName && touched.firstName}>
              {errors.firstName}
            </FieldError>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              placeholder="Last Name"
              label="Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="lastName"
              fullWidth
              error={errors.lastName && touched.lastName}
              disabled={isSendingMessage}
            />
            <FieldError hasErrors={errors.lastName && touched.lastName}>
              {errors.lastName}
            </FieldError>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              placeholder="Email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              fullWidth
              error={errors.email && touched.email}
              disabled={isSendingMessage}
            />
            <FieldError hasErrors={errors.email && touched.email}>
              {errors.email}
            </FieldError>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              placeholder="Type your message here"
              label="Type your message here"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              id="message"
              fullWidth
              error={errors.message && touched.message}
              disabled={isSendingMessage}
              multiline
              rows={6}
            />
            <FieldError hasErrors={errors.message && touched.message}>
              {errors.message}
            </FieldError>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              type="submit"
              variant="contained"
              disabled={isSendingMessage}
              fullWidth
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const ContactFormik = withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }),
  validationSchema: ContactSchema,
  handleSubmit: (values, { setSubmitting, props, resetForm }) => {
    const { firstName, lastName, email, message } = values;
    const name = `${lastName}, ${firstName}`;
    props.sendMessage(name, email, message);
  },
  displayName: 'ContactForm'
})(ContactForm);

export default withStyles(styles)(ContactFormik);
