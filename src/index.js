import Header from "./header/header";
import Home from "./home/home";
import Menu from "./menu/menu";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import "./style.css";

class Main {
  homePage;
  menuPage;
  constructor(){
    //Hook element def
    const contentElement = document.getElementById("content");
    const headerElement = document.createElement("header");
    const mainElement = document.createElement("div");
    const footerElement = document.createElement("footer");
    //Add id
    headerElement.id = "header";
    mainElement.id = "main";
    footerElement.id = "footer";

    //Rig to DOM
    contentElement.appendChild(headerElement);
    contentElement.appendChild(mainElement);
    contentElement.appendChild(footerElement);

    this.header = new Header(headerElement);
    this.homePage = new Home(mainElement);
    this.menuPage = new Menu(mainElement);
    this.contactPage = new Contact(mainElement);
    this.footer = new Footer(footerElement);
    this.header.make()
    this.header.returnButtonElements().forEach(elem => elem.addEventListener("click", this.switchTab.bind(this)))
    this.homePage.make()
    this.footer.make()
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





