import Helpers from "./Helpers";

export default class Menu extends Helpers {
  static async getAllMenu(){
    try {
      const menu = await this.axiosGet('/menu');
      return menu;
    } catch (error) {
      console.log(error)
    }
  }
}
