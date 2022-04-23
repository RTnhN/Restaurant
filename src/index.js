import "./style.css";
import Header from "./header";
import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";

class Main {
  homePage;
  menuPage;
  constructor(){
    //Hook element def
    const contentElement = document.getElementById("content");
    const headerElement = document.createElement("header");
    const mainElement = document.createElement("div");
    //Add id
    headerElement.id = "header";
    mainElement.id = "main";

    //Rig to DOM
    contentElement.appendChild(headerElement);
    contentElement.appendChild(document.createElement("hr"))
    contentElement.appendChild(mainElement);

    this.header = new Header(headerElement);
    this.homePage = new Home(mainElement);
    this.menuPage = new Menu(mainElement);
    this.contactPage = new Contact(mainElement);
    this.header.make()
    this.header.returnButtonElements().forEach(elem => elem.addEventListener("click", this.switchTab.bind(this)))
    this.homePage.make()
  }
  clear(){
    this.homePage.clear()
    this.menuPage.clear()
    this.contactPage.clear()
  }
  switchTab(e) {
    switch (e.target.id) {
      case "HomeLink":
        this.clear();
        this.homePage.make();
      break;
  
      case "MenuLink":
        this.clear();
        this.menuPage.make();
      break;
      
      case "ContactLink":
        this.clear();
        this.contactPage.make()
      break;

    }
    this.header.styleActiveTabButton(e.target.id);
  }
}

const mainObject = new Main();





