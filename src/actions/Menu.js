import Helpers from './Helpers';
import { FETCH_MENU } from './types';

export const setAllMenu = menu => ({
  type: FETCH_MENU,
  payload: menu,
});

// eslint-disable-next-line import/prefer-default-export
export const getAllMenu = () => async (dispatch) => {
  try {
    const payload = await Helpers.axiosGet('/menu');
    const { menu } = payload.data;
    dispatch(setAllMenu(menu));
  } catch (error) {
    // console.log(error);
  }
};
