/* eslint-disable no-plusplus */
import axios from 'axios';

const path = 'https://daniellamarr-fast-food-fast.herokuapp.com/api/v1';

/**
 * Helpers
 */
export default class Helpers {
  /**
   * Axios Get Request
   * @param {string} url endpoint for get request
   * @param {string} headers headers for get request
   * @returns {object} response object
   */
  static async axiosGet(url, headers) {
    const response = await axios.get(
      path + url,
      {
        headers,
      },
    );
    return response;
  }

  /**
   * Axios Post Request
   * @param {string} url endpoint for get request
   * @param {object} body request object parameters
   * @returns {object} response object
   */
  static async axiosPost(url, body) {
    const response = await axios.post(
      path + url,
      body,
    );
    return response;
  }

  /**
   * Status Handler
   * @param {string} statusText response text
   * @param {number} status response code
   * @returns {null} null
   */
  static statusHandler(statusText, status) {
    const elementHandler = document.getElementsByClassName('error');
    if (status === 200 || status === 201) {
      for (let i = 0; i < elementHandler.length; i++) {
        const element = elementHandler[i];
        element.classList.remove('hide');
        element.classList.remove('red');
        element.classList.add('green');
        element.innerHTML = statusText;
      }
    } else {
      for (let i = 0; i < elementHandler.length; i++) {
        const element = elementHandler[i];
        element.classList.remove('hide');
        element.classList.add('red');
        element.innerHTML = statusText;
      }
    }
  }
}
