import React from "react";
import { Link } from "react-router-dom";
import NikeImg from "../assets/images/nike-50.png";
import ShoppingCart from "../assets/images/shopping-cart-30.png";

export default function Header() {
	return (
		<div className="header">
			<div className="header-pickup bg-[#FAFAFA] mx-[-70px]">
				<h1 className="text-center py-5">
					Buy online, pick up in store-it’s quick and convenience.{" "}
					<span className="underline">Pickup options</span>
				</h1>
			</div>
			<div className="header-navbar bg-white flex flex-row justify-between items-center my-1 mx-[-70px] px-[70px]">
				<Link to="/">
					<img src={NikeImg} alt="WASUp" className="h-[60px] w-[60px]" />
				</Link>
				<ul className="flex flex-row">
					<Link className="px-9" to="/">
						Home
					</Link>
					<Link className="px-9" to="/men">
						Men
					</Link>
					<Link className="px-9" to="/women">
						Women
					</Link>
					<Link className="px-9" to="/detail">
						About
					</Link>
				</ul>
				<div className="flex flex-row items-center justify-center">
					<Link to="/bag">
						<img src={ShoppingCart} alt="" className="h-[30px] w-[30px] mr-5" />
					</Link>
					<Link
						className="text-black bg-[#FAFAFA] px-7 py-2 rounded-md text-base border border-black"
						to="/Contact"
					>
						Contact us
					</Link>
				</div>
			</div>
		</div>
	);
}
