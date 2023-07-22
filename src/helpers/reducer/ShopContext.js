import React, { useReducer, useContext, createContext } from "react";
import { initialState, shopReducer } from "./shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
	const [state, dispatch] = useReducer(shopReducer, initialState);

	const addToCart = (shoe) => {
		const updatedCart = state.shoes.concat(shoe);
		updatePrice(updatedCart);
		dispatch({
			type: "ADD",
			payload: { shoes: updatedCart },
		});
	};

	const removeFromCart = (shoe) => {
		const updatedCart = state.shoes.filter(
			(currentShoe) => currentShoe.name !== shoe.name
		);
		updatePrice(updatedCart);
		dispatch({
			type: "REMOVE",
			payload: { shoes: updatedCart },
		});
	};

	const updatePrice = (shoes) => {
		let total = 0;
		shoes.forEach((shoe) => (total += shoe.price));
		dispatch({
			type: "UPDATE",
			payload: { total },
		});
	};

	const value = {
		total: state.total,
		shoes: state.shoes,
		addToCart,
		removeFromCart,
	};
	console.log(value);

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default function useShop() {
	const context = useContext(ShopContext);
	if (context === undefined) {
		throw new Error("useShop must be used within ShopContext");
	}

	return context;
}
