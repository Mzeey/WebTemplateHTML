export class Router {
	constructor() {
	}

	Route = async () => {
		const name = window.location.pathname;
		let pageName = name.split("/").pop();
		pageName = pageName.split(".").shift();
		const controllerName = convertToPascalCase(pageName);
		
		const {[controllerName + 'Controller']: Controller} = await import("./Controllers/" + controllerName + 'Controller.js');
		const controller = new Controller();
		controller.Init();

		function convertToPascalCase(input) {
			const words = input.split(/[_\-]/);
			const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
			return capitalizedWords.join('');
		}
	};
}
