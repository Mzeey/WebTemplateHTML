import { City, Country, State } from "../../../../../node_modules/country-state-city/lib/index.js";

export class CartHandler {
	#_cartItems = [];
	#_cartQuantity = 0;
	#_cartItem = {
		id: 0,
		tite: "",
		category_id: 0,
		price: 0,
		category_image: "",
		quantity: 1,
		discount_rate: 0.0,
		is_active: "1",
	};
	constructor() {
		this.#_cartItems = this.#_getLocalStorageJSON("currentCart");
		this.#_cartQuantity = this.#_getLocalStorage("qtyCart");
	}

	GetCartItem() {
		return this.#_cartItem;
	}

	GetCart = () => {
		return this.#_cartItems;
	};

	GetCartSize = () => {
		return this.#_cartQuantity;
	};

	#_getLocalStorageJSON(description) {
		return JSON.parse(localStorage.getItem(description)) || [];
	}
	#_getLocalStorage(description) {
		return localStorage.getItem(description);
	}
	#_setLocalStorageJSON(description, content) {
		localStorage.setItem(description, JSON.stringify(content));
	}
	#_setLocalStorage(description, content) {
		localStorage.setItem(description, content);
	}

	AddToCart = (newItem) => {
		if (this.#_checkCartEmpty()) {
			this.#_addToCart(newItem);
			return 1;
		}
		if (this.#_checkIfItemExist(newItem)) {
			return -1;
		}
		this.#_addToCart(newItem);
		return 1;
	};

	ClearCart() {
		this.#_cartItems = [];
		this.#_setLocalStorageJSON("currentCart", this.#_cartItems);
		this.#_cartQuantity = this.#_cartItems.length;
		this.#_setLocalStorage("qtyCart", this.#_cartQuantity);
	}

	DeleteItem = (id) => {
		let isFound = this.#_checkIfItemExist();
		if (isFound) {
			this.#_cartItems.filter((item) => item.id == id);
			this.#_setLocalStorageJSON("currentCart", this.#_cartItems);
			this.#_cartQuantity = this.#_cartItems.length;
			this.#_setLocalStorage("qtyCart", this.#_cartQuantity);
			return 1;
		}
		return -1;
	};

	#_addToCart = (newItem) => {
		this.#_cartItems.push(newItem);
		this.#_setLocalStorageJSON("currentCart", this.#_cartItems);
		this.#_cartQuantity = this.#_cartItems.length;
		this.#_setLocalStorage("qtyCart", this.#_cartQuantity);
	};

	#_checkCartEmpty = () => {
		let isEmpty = false;
		if (this.#_cartQuantity == 0) {
			isEmpty = true;
		}
		return isEmpty;
	};

	#_checkIfItemExist = (newItem) => {
		return this.#_cartItems.some((item) => item.id === newItem.id);
	};

}
