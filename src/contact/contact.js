import contactdata from "./contactdata.yaml";
import Page from "../page";

class Contact extends Page {
  constructor(mainElement){
    super(mainElement, contactdata)
  }
}

export default Contact