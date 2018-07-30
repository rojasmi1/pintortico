import axios from 'axios';
import { API } from '../constants';

class BaseService {
  async getRequest(path) {
    const response = await axios({
      url: `${API.BASE_URL}${path}`,
      method: 'GET'
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.error);
    }
  }
}

export default BaseService;
