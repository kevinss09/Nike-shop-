import React from "react";
import Header from "../parts/Header";
import JacketImg from "../assets/images/jacket-img.png";
import JordanAcclimate from "../assets/images/Jordan1Acclimate.png";
import HoodieImg from "../assets/images/hoodie-img.png";
import LoungeWear from "../assets/images/loungewear.png";
import Footer from "../parts/Footer";
import { Link, useLocation } from "react-router-dom";
import Carousel from "../parts/Carousel";

export default function Women() {
	const location = useLocation().pathname;

	return (
		<section className="Women min-h-screen px-[70px]">
			<Header />
			<div className="bg-[#FAFAFA] h-[60px] mx-[-70px]"></div>
			<div className="bg-white flex flex-row justify-between items-center my-5 w-2/3">
				<h1 className="font-bold text-2xl">Women</h1>
				<ul className="flex flex-row">
					<li className="font-normal text-base tracking-wide mr-10">Sale</li>
					<li className="font-normal text-base tracking-wide mr-10">Shoes</li>
					<li className="font-normal text-base tracking-wide mr-10">
						Clothing
					</li>
					<li className="font-normal text-base tracking-wide mr-10">
						Just Released
					</li>
					<li className="font-normal text-base tracking-wide">Best Seller</li>
				</ul>
			</div>
			<div className="women-main-picture mx-[-70px] bg-cover bg-no-repeat flex items-center justify-start">
				<div className="flex flex-col justify-center items-start ml-[70px] text-[#2D2C2C]">
					<h1 className="font-bold text-6xl ">
						FIND YOUR <br /> ULTIMATE EDGE
					</h1>
					<h3 className="mt-12 font-light tracking-widest text-xl text-left">
						Tap into tournament mode with <br /> technical apparel that brings
						out <br />
						your best game
					</h3>
					<Link
						className="px-8 py-3 bg-[#2D2C2C] font-light text-xl tracking-wider relative text-white mt-12"
						to="/explore"
					>
						<div className="absolute w-full h-full -left-2 -right-2 border border-[#2D2C2C] "></div>
						Shop now
					</Link>
				</div>
			</div>
			<div className="women-main-picture2 mx-[-70px] bg-cover bg-no-repeat flex items-center justify-end">
				<div className="flex flex-col justify-center items-end ml-[70px] text-white mr-12">
					<h1 className="font-bold text-6xl ">
						BE SUPPORTED. <br /> BE YOU.
					</h1>
					<h3 className="mt-12 font-light tracking-widest text-xl text-right">
						Look good, feel amazing, smash <br /> your goals with new Nike
						Trainers <br /> with maximum comfort
					</h3>
					<Link
						className="px-8 py-3 bg-white font-light text-xl tracking-wider relative text-black mt-12"
						to="/explore"
					>
						<div className="absolute w-full h-full left-2 right-2 border border-white "></div>
						Shop now
					</Link>
				</div>
			</div>
			<div className="selection my-20">
				<h1 className="font-semibold text-3xl tracking-wider">Selection</h1>
				<div className="mt-20 grid grid-cols-4 gap-10">
					<div className="col-span-1 h-[440px] flex flex-col bg-[#D9D9D9] justify-between items-center cursor-pointer">
						<img src={JacketImg} alt="" className="mt-10" />
						<h3 className="font-bold text-lg underline tracking-wider text-center my-5 cursor-pointer">
							JACKETS
						</h3>
					</div>
					<div className="col-span-1 h-[440px] flex flex-col bg-[#D9D9D9] justify-between items-center cursor-pointer">
						<img src={JordanAcclimate} alt="" className="mt-36" />
						<h3 className="font-bold text-lg underline tracking-wider text-center my-5">
							SHOES
						</h3>
					</div>
					<div className="col-span-1 h-[440px] flex flex-col bg-[#D9D9D9] justify-between items-center cursor-pointer">
						<img src={HoodieImg} alt="" className="mt-10" />
						<h3 className="font-bold text-lg underline tracking-wider text-center my-5">
							HOODIE
						</h3>
					</div>
					<div className="col-span-1 h-[440px] flex flex-col bg-[#D9D9D9] justify-between items-center cursor-pointer">
						<img src={LoungeWear} alt="" className="mt-4 scale-90" />
						<h3 className="font-bold text-lg underline tracking-wider text-center my-5">
							LOUNGEWEAR
						</h3>
					</div>
				</div>
			</div>
			<div className="Trending this week mb-20">
				<h1 className="font-semibold text-3xl tracking-wider mb-20">
					Trending this week
				</h1>
				<Carousel Path={location} />
			</div>
			<div className="your-seasonal-shop mb-20">
				<h2 className="font-semibold text-4xl mt-20">YOUR SEASONAL SHOP</h2>
				<div className="w-full mt-[50px] grid grid-cols-2 gap-[30px]">
					<div className="col-span-1 women-soccer-club bg-cover bg-no-repeat relative">
						<button className="absolute left-[30px] bottom-[30px] py-3 px-7 font-semibold text-base bg-white rounded-full hover:bg-[#1B1818] hover:text-white transition duration-300">
							Nike Soccer Club
						</button>
					</div>
					<div className="col-span-1 women-basketball-club bg-cover bg-no-repeat relative">
						<button className="absolute left-[30px] bottom-[30px] py-3 px-7 font-semibold text-base bg-white rounded-full hover:bg-[#1B1818] hover:text-white transition duration-300">
							Nike Running Club
						</button>
					</div>
				</div>
			</div>
			<div className="Women's Clothing & Shoes mt-24 mb-36 sticky">
				<h1 className="font-bold text-4xl text-center">
					WOMEN'S CLOTHING & SHOES
				</h1>
				<h3 className="font-light text-lg text-center tracking-widest leading-loose mt-[30px] px-5">
					As a creator, you look for ways to excel and express yourself when and
					where you can, from reaching from that last rep to evloving your
					streetwear style. Log miles or tear down the baseline in men's shoes
					with responsive cushioning. Rep an athletic style off the field in
					lifestyle apparel born of sport heritage. From athletes to streetwear
					enthusiasts, adidas men’s clothing and shoes exist to let you go
					harder, dig deeper, and get the most out of yourself, from the pitch
					to the street to the road less traveled.
				</h3>
			</div>
			<Footer Path={location} />
		</section>
	);
}
