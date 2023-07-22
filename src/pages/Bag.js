import React from "react";
import Header from "../parts/Header";
import Shoes1 from "../assets/images/Bag-1.png";
import Shoes2 from "../assets/images/Bag-2.png";
import Shoes3 from "../assets/images/Bag-3.png";
import { FaPaypal } from "react-icons/fa";
import Carousel from "../parts/Carousel";
import Footer from "../parts/Footer";
import useShop from "../helpers/reducer/ShopContext";

export default function Bag() {
	const { shoes, total, addToCart, removeFromCart } = useShop();
	const salesTax = total * 0.12;
	const maxTotal = total + salesTax + 12;
	return (
		<section className="Bag min-h-screen md:px-[70px]">
			<Header />
			<div className="bg-[#FAFAFA] h-[60px] md:mx-[-70px]"></div>
			<div className="mt-[70px] Bag-Content gap-[50px] md:mx-0 mx-5">
				<div className="col-span-1 text-center md:text-left">
					<h1 className="font-semibold text-3xl">BAG</h1>
					{/* Start array of state.shoes */}
					{shoes.map((shoe, index) => {
						return (
							<div
								className="Shoes-1 flex-col mt-[50px] relative"
								key={shoe.index}
							>
								<div className="flex flex-col md:flex-row ">
									<div className="flex items-center justify-center">
										<img
											src={shoe.imgSource}
											alt=""
											className="md:mr-10 md:h-auto md:w-[250px] w-[300px]"
										/>
									</div>
									<div className="flex flex-col justify-between md:mt-0 mt-7">
										<h1 className="font-semibold md:font-medium text-3xl md:text-2xl tracking-wide">
											{shoe.name}
										</h1>
										<h3 className="font-normal text-xl text-[#BEBEBE] md:mt-0 mt-3">
											{shoe.gender}
										</h3>
										<h1 className="font-normal text-2xl tracking-wide md:mt-0 mt-3">
											${shoe.price}
										</h1>
										<h3 className="font-normal md:mt-0 mt-3">Size: M 11</h3>
									</div>
								</div>
								<div className="border-[0.5px] border-[#D9D9D9] w-full mt-[30px]"></div>
								<button
									className="absolute top-20 right-3 text-red-600 text-xl"
									onClick={() => removeFromCart(shoe)}
								>
									X
								</button>
							</div>
						);
					})}
					{/* End array of state.shoes */}
				</div>
				<div className="col-span-1 flex flex-col md:mt-0 mt-10">
					<h1 className="font-semibold text-3xl text-center md:text-left">
						SUMMARY
					</h1>
					<div className="mt-[50px] flex flex-col">
						<div className="flex flex-row items-center justify-between">
							<h1 className="font-light text-2xl tracking-wide">Subtotal</h1>
							<h3 className="font-light text-2xl">${total}</h3>
						</div>
						<div className="flex flex-row items-center justify-between mt-[30px]">
							<h1 className="font-light text-2xl tracking-wide">Sales Tax</h1>
							<h3 className="font-light text-2xl">${salesTax}</h3>
						</div>
						<div className="flex flex-row items-center justify-between mt-[30px]">
							<h1 className="font-light text-2xl tracking-wide">Delivery</h1>
							<h3 className="font-light text-2xl">$12</h3>
						</div>
						<div className="border-[0.5px] border-[#D9D9D9] w-full mt-[30px]"></div>
						<div className="flex flex-row items-center justify-between mt-[30px]">
							<h1 className="font-light text-2xl tracking-wide">Total</h1>
							<h3 className="font-light text-2xl">${maxTotal}</h3>
						</div>
					</div>
					<div className="Button-div mt-[50px]">
						<button className="w-full h-[65px] font-normal text-2xl text-white bg-[#3E3D3D] rounded-full tracking-wider">
							Pay now
						</button>
						<button className="w-full h-[65px] bg-[#D9D9D9] mt-[30px] rounded-full flex flex-row items-center justify-center">
							<h3 className="font-normal text-2xl text-black tracking-wider">
								Paypal
							</h3>
							<FaPaypal className="text-2xl ml-1" />
						</button>
					</div>
				</div>
			</div>
			<div className="Might-Also-Like mt-[70px] md:mb-0 mb-36">
				<h1 className="font-medium md:font-semibold text-center text-3xl md:text-4xl">
					YOU MIGHT ALSO LIKE
				</h1>
				<div className="mt-20">
					<Carousel />
				</div>
			</div>
			<Footer />
		</section>
	);
}
