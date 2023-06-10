import { BaseController } from "./Base/BaseController.js";

export class IndexController extends BaseController{
    constructor(){
        super("Home");
    }

    Init =()=>{
        //alert("you called me");
        console.log("Hello");
    }
}