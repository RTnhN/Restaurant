import "./style.css";
class Header {
  #headerElement;
  links;
  constructor(contentElement){
    this.#headerElement = contentElement;
    this.links = ["Home", "Menu", "Contact"];
    
  }
  make(){
    this.#headerElement.appendChild(document.createElement("p"));
    this.#headerElement.lastChild.id = "logo";
    this.#headerElement.lastChild.textContent = "Byte Café";
    this.#headerElement.appendChild(document.createElement("nav"));
    this.#headerElement.lastChild.appendChild(document.createElement("ul"));
    const navList = this.#headerElement.lastChild.lastChild;
    for (const link of this.links){
      navList.appendChild(document.createElement("li"));
      navList.lastChild.id = link;
      navList.lastChild.appendChild(document.createElement("a"));
      navList.lastChild.lastChild.textContent = link;
      navList.lastChild.lastChild.id = `${link}Link`;
    }
  }
  clear(){
    while (this.#headerElement.firstChild) {
      this.#headerElement.removeChild(this.#headerElement.firstChild);
    }
  }
  styleActiveTabButton(tabName){
    for (const link of this.links){
      document.getElementById(`${link}Link`).classList.remove("selected");
    }
    document.getElementById(tabName).classList.add("selected");
  }
  returnButtonElements(){
    return this.#headerElement.querySelectorAll("a");
  }

}
export default Header