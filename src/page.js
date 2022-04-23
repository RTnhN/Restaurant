//The purpose of this page in the future is to create a class template for the other pages 
//since some functionality is the same. For now, it is not needed. 

class Elem{
  constructor(blockType,content, id){
    this.type = blockType;
    this.content = content;
    this.id = id;
  }
}

class Page{
  constructor(anchor){
    this.#anchor = anchor;
  }

  make(){
    for (const elem of this.#beforeHours){
      this.#mainElement.appendChild(document.createElement(elem.type));
      this.#mainElement.lastChild.textContent = elem.content;
      this.#mainElement.lastChild.id = elem.id;
      console.log(elem);
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
      console.log(elem);
    }
  }
  clear(){
    while (this.#mainElement.firstChild) {
      this.#mainElement.removeChild(this.#mainElement.firstChild);
    }
  }
  makeFromList(list)
}


export default Page