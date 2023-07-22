export const initialState = {
	total: 0,
	shoes: [],
};

export const shopReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "ADD":
			console.log("AddToCart", payload);
			return {
				...state,
				shoes: payload.shoes,
			};
		case "REMOVE":
			console.log("RemoveFromCart", payload);
			return {
				...state,
				shoes: payload.shoes,
			};
		case "UPDATE":
			console.log("UpdateCart ", payload);
			return {
				...state,
				total: payload.total,
			};
	}
};
