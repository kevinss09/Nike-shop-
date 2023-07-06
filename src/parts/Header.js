import React, { useState } from "react";
import { Link } from "react-router-dom";
import NikeImg from "../assets/images/nike-50.png";
import ShoppingCart from "../assets/images/shopping-cart-30.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="header relative z-20 top-0 left-0 lg:flex flex-col">
			<div className="header-pickup bg-[#FAFAFA] md:mx-[-70px]">
				<h1 className="text-center py-5">
					Buy online, pick up in store-it’s quick and convenience.{" "}
					<span className="underline">Pickup options</span>
				</h1>
			</div>
			<div className="header-navbar bg-white md:flex md:flex-row md:justify-between md:items-center md:my-1 md:py-0 md:px-0 py-3 px-4 w-full flo">
				<div className="left-side justify-end md:justify-between flex items-center">
					<Link to="/">
						<img src={NikeImg} alt="WASUp" className="h-[60px] w-[60px]" />
					</Link>
					<span
						className={[
							"text-3xl right-0 pt-1 md:hidden block cursor-pointer md:ml-00 ml-24",
						]}
						onClick={() => setToggle((prev) => !prev)}
					>
						{toggle ? (
							<FiX className="duration-300 mr-3" />
						) : (
							<FiMenu className="duration-300 mr-3" />
						)}
					</span>
				</div>
				<div></div>
				<ul
					className={[
						"right-side md:flex md:flex-row z-[-1] md:static absolute left-0 md:w-auto w-full md:z-auto md:opacity-100 opacity-0 top-[-400px] text-center bg-white",
						toggle ? "opacity-100 top-[80px]" : "",
					].join(" ")}
				>
					<li className="nav-item mx-4 my-4 pt-[1rem] pb-0 md:py-2 lg:my-0 lg:border-0 border-t">
						<Link className="px-5 md:text-base text-lg" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item mx-4 my-4 pt-[1rem] pb-0 md:py-2 lg:my-0 lg:border-0 border-t">
						<Link className="px-5 md:text-base text-lg" to="/men">
							Men
						</Link>
					</li>
					<li className="nav-item mx-4 my-4 pt-[1rem] pb-0 md:py-2 lg:my-0 lg:border-0 border-t">
						<Link className="px-5 md:text-base text-lg" to="/women">
							Women
						</Link>
					</li>
					<li className="nav-item mx-4 my-4 pt-[1rem] pb-0 md:py-2 lg:my-0 lg:border-0 border-t">
						<Link className="px-5 md:text-base text-lg" to="/detail">
							About
						</Link>
					</li>
					<li className="nav-item mx-4 my-4 pt-[1rem] pb-0 md:py-2 lg:my-0 lg:border-0 border-t md:hidden">
						<div className="flex items-center justify-center">
							<Link to="/bag">
								<img
									src={ShoppingCart}
									alt=""
									className="h-[30px] w-[30px] mr-5"
								/>
							</Link>
							<Link
								className="text-black bg-[#FAFAFA] px-7 py-2 rounded-md text-base border border-black"
								to="/Contact"
							>
								Contact us
							</Link>
						</div>
					</li>
				</ul>
				<span className="flex flex-row items-center justify-center nav-call">
					<Link to="/bag">
						<img src={ShoppingCart} alt="" className="h-[30px] w-[30px] mr-5" />
					</Link>
					<Link
						className="text-black bg-[#FAFAFA] px-7 py-2 rounded-md text-base border border-black"
						to="/Contact"
					>
						Contact us
					</Link>
				</span>
			</div>
		</nav>
	);
}
