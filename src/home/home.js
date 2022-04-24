import homedata from "./homedata.yaml";
import Page from "../page";

class Home extends Page{
  constructor(mainElement){
    super(mainElement, homedata)
  }
}

export default Home