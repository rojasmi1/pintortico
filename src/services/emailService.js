import BaseService from './baseService';

class EmailService extends BaseService {
  sendContactMessage(name, email, message) {
    const body = {
      name,
      email,
      message
    };
    const path = `/contact`;
    return super.postRequest(path, body);
  }
}

export default EmailService;
