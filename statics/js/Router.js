import { HomeController } from "./Controllers/HomeController.js";
import { PageController } from "./Controllers/PageController.js";

export class Router {
	#_pages = PageController.GetPages();
	#_currentPage= PageController.GetCurrentPage();
	#_controllers = {
		[this.#_pages.home]: new HomeController().Init,
	};
	constructor() {
	}

	GetControllers = () => {
		return this.#_controllers;
	};

	Route = () => {
		const currentPageFile = this.#_currentPage.substring(this.#_currentPage.lastIndexOf("/" + 1));
		for (const page in this.#_pages) {
			if (this.#_currentPage.includes(this.#_pages[page])) {
				const controller = this.#_controllers[this.#_pages[page]];
				if (controller) {
					controller();
					break;
				}
			}
		}
	};
}
