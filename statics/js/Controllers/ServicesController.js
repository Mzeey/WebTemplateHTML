import { BaseController } from "./Base/BaseController.js";

export class ServicesController extends BaseController{
    constructor(){
        super("Home");
    }

    Init =()=>{
        //alert("you called me");
        console.log("Showing Services Controller");
    }
}