import axios from 'axios';

const path = 'https://daniellamarr-fast-food-fast.herokuapp.com/api/v1';

export default class Helpers {
  static async axiosGet(url) {
    try {
      const response = await axios.get(path+url);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
