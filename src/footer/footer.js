import footerdata from "./footerdata.yaml";
import Page from "../page";

class Footer extends Page{
  constructor(mainElement){
    super(mainElement, footerdata)
  }
}

export default Footer