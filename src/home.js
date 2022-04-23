class Elem{
  constructor(blockType,content, id){
    this.type = blockType;
    this.content = content;
    this.id = id;
  }
}

class Home{
  #mainElement;
  #title;
  #description;
  #hoursTitle;
  #hours;
  #locationTitle;
  #location;
  #beforeHours;
  #afterHours;

  constructor(mainElement){
    this.#mainElement = mainElement;
    this.#title = "Byte Café";
    this.#description = "Et labore reprehenderit id reprehenderit laboris consequat. Ullamco sint incididunt ea duis consequat laboris dolore anim ipsum Lorem. Ex laborum qui dolor eu nulla laborum occaecat et minim minim officia. Exercitation aute tempor anim mollit incididunt excepteur aliqua. Ex labore incididunt fugiat voluptate proident dolor minim proident veniam do."
    this.#hoursTitle = "Hours";
    this.#hours = ["Mon-Thur 10am - 10pm", "Fri-Sat 10am - 11pm", "Sun 1pm - 10pm"];
    this.#locationTitle = "Location";
    this.#location = "123 main street, anywhere, usa 12345";
    this.#beforeHours = [new Elem("h1",this.#title,"title"),new Elem("p", this.#description,"description"),new Elem("h2", this.#hoursTitle, "hoursTitle")];
    this.#afterHours = [new Elem("h2", this.#locationTitle, "locationTitle"),new Elem("p",this.#location, "location")];
  }

  make(){
    for (const elem of this.#beforeHours){
      this.#mainElement.appendChild(document.createElement(elem.type));
      this.#mainElement.lastChild.textContent = elem.content;
      this.#mainElement.lastChild.id = elem.id;
    }
    this.#mainElement.appendChild(document.createElement("ul"));
    const hoursListElement = this.#mainElement.lastChild;
    for (const hour of this.#hours){
      hoursListElement.appendChild(document.createElement("li"));
      hoursListElement.lastChild.textContent = hour;
    }
    for (const elem of this.#afterHours){
      this.#mainElement.appendChild(document.createElement(elem.type));
      this.#mainElement.lastChild.textContent = elem.content;
      this.#mainElement.lastChild.id = elem.id;
    }
  }
  clear(){
    while (this.#mainElement.firstChild) {
      this.#mainElement.removeChild(this.#mainElement.firstChild);
    }
  }

}


export default Home