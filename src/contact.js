class Elem{
  constructor(blockType,content, id){
    this.type = blockType;
    this.content = content;
    this.id = id;
  }
}

class Contact{
  #anchor;
  #title;
  #description;
  #hoursTitle;
  #hours;
  #locationTitle;
  #location;
  #beforeHours;
  #afterHours;

  constructor(anchor){
    this.#anchor = anchor;
    this.#title = "Contact";
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
      this.#anchor.appendChild(document.createElement(elem.type));
      this.#anchor.lastChild.textContent = elem.content;
      this.#anchor.lastChild.id = elem.id;
    }
    this.#anchor.appendChild(document.createElement("ul"));
    const hoursListElement = this.#anchor.lastChild;
    for (const hour of this.#hours){
      hoursListElement.appendChild(document.createElement("li"));
      hoursListElement.lastChild.textContent = hour;
    }
    for (const elem of this.#afterHours){
      this.#anchor.appendChild(document.createElement(elem.type));
      this.#anchor.lastChild.textContent = elem.content;
      this.#anchor.lastChild.id = elem.id;
    }
  }
  clear(){
    while (this.#anchor.firstChild) {
      this.#anchor.removeChild(this.#anchor.firstChild);
    }
  }

}


export default Contact