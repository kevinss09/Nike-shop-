import React, { useState, useEffect } from "react";
import useShop from "../../helpers/reducer/ShopContext";
import { Link } from "react-router-dom";

export default function HomeCard({ imgSource, name, gender, price }) {
	const { shoes, addToCart, removeFromCart } = useShop();
	const [isInCart, setIsInCart] = useState(false);

	useEffect(() => {
		const shoesInCart = shoes.find((shoe) => shoe.name === name);
		if (shoesInCart) {
			setIsInCart(true);
		} else {
			setIsInCart(false);
		}
	}, [shoes, name]);

	const handleClick = () => {
		const shoes = { imgSource, name, gender, price };

		if (isInCart) {
			removeFromCart(shoes);
		} else {
			addToCart(shoes);
		}
	};
	return (
		<div className="h-full w-full relative flex justify-center">
			<Link to="/Detail">
				<div className="relative">
					<div className="md:h-[270px] w-[350px] h-[250px] bg-[#D9D9D9] rounded-lg relative flex items-end">
						<img src={imgSource} alt="" className="w-full" />
						<button
							className={[
								"absolute top-3 right-4 z-30 border rounded-full flex items-center justify-center w-7 hover:transition hover:duration-300 hover:scale-125",
								isInCart ? "text-white bg-red-500" : "text-white bg-green-500",
							].join(" ")}
							onClick={(e) => {
								e.preventDefault(); // Prevent the default link behavior
								handleClick(); // Call your handleClick function
							}}
						>
							<div className="text-lg leading-[1.7rem]">
								{isInCart ? "-" : "+"}
							</div>
						</button>
					</div>
				</div>
				<div className="flex flex-col mt-[15px]">
					<h3 className="w-3/4 font-bold text-base tracking-wider leading-normal">
						{name}
					</h3>
					<h3 className="font-medium text-base text-[#70706F] mt-1">
						{gender}
					</h3>
					<h3 className="font-semibold text-base tracking-wider mt-1">
						${price}
					</h3>
				</div>
			</Link>
		</div>
	);
}
