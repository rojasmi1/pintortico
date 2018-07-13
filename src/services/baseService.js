import axios from 'axios';

class BaseService {
  async getRequest(path) {
    const response = await axios.get(path);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.error);
    }
  }
}

export default BaseService;
