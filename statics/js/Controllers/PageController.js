//This class is static
export class PageController{
    static #_urlPath = ""; //change to add a path prefix;
    static #_pages = {
        home: `${this.#_urlPath}index`,
    }
    static GetPages(){
        return this.#_pages;
    }

    static GetCurrentPage(){
        return location.href.toString();
    }
}