export class BaseController{
    constructor(title = ""){
        title = title == ""? this.constructor.name.replace("Controller", ""): title;
        document.querySelector("title").innerHTML = title;
    }
}