import menudata from "./menudata.yaml";
import Page from "../page";
import eggToast from "./assets/EggToast.jpg";
import frenchToast from "./assets/FrenchToast.jpg";
import pancakes from "./assets/Pancakes.jpg";
import coffee from "./assets/Coffee.jpg";
import latte from "./assets/Latte.jpg";
import iceCoffee from "./assets/IceCoffee.jpg";
const imageDict = {eggToast, frenchToast, pancakes, coffee, latte, iceCoffee}

class Menu extends Page {
  constructor(mainElement){
    super(mainElement, menudata, imageDict)
  }
}
export default Menu