import BaseService from './baseService';

class CloudinaryService extends BaseService {
  getBaseImages() {
    const path = `/baseImages`;
    return super.getRequest(path);
  }
}

export default CloudinaryService;
