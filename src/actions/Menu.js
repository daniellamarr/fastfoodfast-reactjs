import Helpers from './Helpers';
import { FETCH_MENU, FETCH_SINGLE_MENU } from './types';

// eslint-disable-next-line import/prefer-default-export
export const getAllMenu = () => async (dispatch) => {
  try {
    const [payload] = await Promise.all([Helpers.axiosGet('/menu')]);
    const { menu } = payload.data;
    dispatch({
      type: FETCH_MENU,
      payload: menu,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleMenu = menuID => async (dispatch) => {
  try {
    const payload = await Helpers.axiosGet(`/menu/${menuID}`);
    const { menu } = payload.data;
    dispatch({
      type: FETCH_SINGLE_MENU,
      payload: menu,
    });
  } catch (error) {
    console.log(error);
  }
};
