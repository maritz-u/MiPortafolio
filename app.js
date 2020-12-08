import {changeRoute} from "./Router.js";
import { initRouter } from './Router.js';

console.log("app.js");
const init =() => {
  initRouter();

}

window.addEventListener("load", init);





