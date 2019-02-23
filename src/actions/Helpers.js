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

  static async axiosPost(url, body) {
    const response = await axios.post(
      path+url,
      body
    );
    return response;
  }

  static statusHandler(statusText, status) {
    const elementHandler = document.getElementsByClassName('error');
    if (status == 200 || status == 201) {
      for (let i = 0; i < elementHandler.length; i++) {
        const element = elementHandler[i];
        element.classList.remove('hide');
        element.classList.remove('red');
        element.classList.add('green');
        element.innerHTML = statusText;
      }
    }else{
      for (let i = 0; i < elementHandler.length; i++) {
        const element = elementHandler[i];
        element.classList.remove('hide');
        element.classList.add('red');
        element.innerHTML = statusText;
      }
    }
  }
}
