import React from "react";
import Header from "../parts/Header";
import Shoes1 from "../assets/images/Bag-1.png";
import Shoes2 from "../assets/images/Bag-2.png";
import Shoes3 from "../assets/images/Bag-3.png";
import { FaPaypal } from "react-icons/fa";
import Carousel from "../parts/Carousel";
import Footer from "../parts/Footer";

export default function Bag() {
	return (
		<section className="Bag min-h-screen px-[70px]">
			<Header />
			<div className="bg-[#FAFAFA] h-[60px] mx-[-70px]"></div>
			<div className="mt-[70px] Bag-Content gap-[50px]">
				<div className="col-span-1">
					<h1 className="font-semibold text-3xl">BAG</h1>
					<div className="Shoes-1 flex-col">
						<div className="flex flex-row mt-[50px]">
							<img src={Shoes1} alt="" className="mr-10" />
							<div className="flex flex-col justify-between">
								<h1 className="font-medium text-2xl tracking-wide">
									Nike Air Jordan 1 High Mocha
								</h1>
								<h3 className="font-normal text-xl text-[#BEBEBE]">
									Men's Shoes
								</h3>
								<h1 className="font-normal text-2xl tracking-wide">$295</h1>
								<h3 className="font-normal">Size: M 11</h3>
							</div>
						</div>
						<div className="border-[0.5px] border-[#D9D9D9] w-full mt-[30px]"></div>
					</div>
					<div className="Shoes-2 flex-col">
						<div className="flex flex-row mt-[50px]">
							<img src={Shoes2} alt="" className="mr-12" />
							<div className="flex flex-col justify-between">
								<h1 className="font-medium tracking-wide text-2xl">
									Nike Air Jordan 1 Acclimate Chutney
								</h1>
								<h3 className="font-normal text-xl text-[#BEBEBE]">
									Women's Shoes
								</h3>
								<h1 className="font-normal text-2xl tracking-wide">$210</h1>
								<h3 className="font-normal">Size: W 9</h3>
							</div>
						</div>
						<div className="border-[0.5px] border-[#D9D9D9] w-full mt-[30px]"></div>
					</div>
					<div className="Shoes-2 flex-col">
						<div className="flex flex-row mt-[50px]">
							<img src={Shoes3} alt="" className="mr-10" />
							<div className="flex flex-col justify-between">
								<h1 className="font-medium tracking-wide text-2xl">
									Nike Air Jordan 1 Gorge Green
								</h1>
								<h3 className="font-normal text-xl text-[#BEBEBE]">
									Men's Shoes
								</h3>
								<h1 className="font-normal text-2xl tracking-wide">$220</h1>
								<h3 className="font-normal">Size: M 11</h3>
							</div>
						</div>
						<div className="border-[0.5px] border-[#D9D9D9] w-full mt-[30px]"></div>
					</div>
				</div>
				<div className="col-span-1 flex flex-col">
					<h1 className="font-semibold text-3xl">SUMMARY</h1>
					<div className="mt-[50px] flex flex-col">
						<div className="flex flex-row items-center justify-between">
							<h1 className="font-light text-2xl tracking-wide">Subtotal</h1>
							<h3 className="font-light text-2xl">$505</h3>
						</div>
						<div className="flex flex-row items-center justify-between mt-[30px]">
							<h1 className="font-light text-2xl tracking-wide">Sales Tax</h1>
							<h3 className="font-light text-2xl">-</h3>
						</div>
						<div className="flex flex-row items-center justify-between mt-[30px]">
							<h1 className="font-light text-2xl tracking-wide">Delivery</h1>
							<h3 className="font-light text-2xl">$12</h3>
						</div>
						<div className="border-[0.5px] border-[#D9D9D9] w-full mt-[30px]"></div>
						<div className="flex flex-row items-center justify-between mt-[30px]">
							<h1 className="font-light text-2xl tracking-wide">Total</h1>
							<h3 className="font-light text-2xl">$557</h3>
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
			<div className="Might-Also-Like mt-[70px]">
				<h1 className="font-semibold text-4xl">You might also like</h1>
				<div className="mt-20">
					<Carousel />
				</div>
			</div>
			<Footer />
		</section>
	);
}
