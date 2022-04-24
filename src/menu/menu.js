import menudata from "./menudata.yaml";
import Page from "../page";
import egg from "./assets/Egg.jpeg"
const imageDict = {"egg":egg}

class Menu extends Page {
  constructor(mainElement){
    super(mainElement, menudata, imageDict)
  }
}
export default Menu