import Helpers from "./Helpers";
import { FETCH_MENU } from './types';

export const getAllMenu = () => async dispatch => {
  try {
    const [ payload ] = await Promise.all([Helpers.axiosGet('/menu')]);
    const { menu } = payload.data;
    dispatch({
      type: FETCH_MENU,
      payload: menu,
    });
  } catch (error) {
    console.log(error)
  }
}
