import React from "react";
import Header from "../parts/Header";
import MenPicture from "../assets/images/men-picture.jpg";
import Footer from "../parts/Footer";
import { Link, useLocation } from "react-router-dom";
import Carousel from "../parts/Carousel";

export default function Men() {
	const location = useLocation().pathname;
	return (
		<section className="Men min-h-screen px-[70px]">
			<Header />
			<div className="bg-[#FAFAFA] h-[60px] mx-[-70px]"></div>
			<div className="bg-white flex flex-row justify-between items-center my-5 w-2/3">
				<h1 className="font-bold text-2xl">Men</h1>
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
			<div className="men-main-picture mx-[-70px] bg-cover bg-no-repeat flex items-center justify-end">
				<div className="mr-12 flex flex-col items-end justify-center">
					<h1 className="text-6xl text-white font-extrabold text-right">
						FIND YOUR <br /> ULTIMATE EDGE
					</h1>
					<h3 className="mt-12 font-light tracking-widest text-white text-2xl text-right">
						Tap into tournament mode with <br /> technical apparel that brings
						out <br /> your best game
					</h3>
					<Link
						className="mt-12 font-light tracking-wider text-lg py-3 px-7 bg-white rounded-xl"
						to="/Explore"
					>
						Shop now
					</Link>
				</div>
			</div>
			<div className="trending-this-week mt-20">
				<h1 className="font-semibold text-4xl mb-20">Trending this week</h1>
				<Carousel Path={location} />
			</div>
			<div className="coaching-wellness mb-20">
				<h2 className="font-semibold text-4xl mt-20">Coaching and Wellness</h2>
				<div className="w-full mt-[50px] grid grid-cols-2 gap-[30px]">
					<div className="col-span-1 soccer-club bg-cover bg-no-repeat relative">
						<button className="absolute left-[30px] bottom-[30px] py-3 px-7 font-semibold text-base bg-white rounded-full hover:bg-[#1B1818] hover:text-white transition duration-300">
							Nike Soccer Club
						</button>
					</div>
					<div className="col-span-1 basketball-club bg-cover bg-no-repeat relative">
						<button className="absolute left-[30px] bottom-[30px] py-3 px-7 font-semibold text-base bg-white rounded-full hover:bg-[#1B1818] hover:text-white transition duration-300">
							Nike Basketball Club
						</button>
					</div>
				</div>
			</div>
			<div className="Men's Clothing & Shoes mt-24 mb-36 sticky">
				<h1 className="font-bold text-4xl text-center">
					MEN'S CLOTHING & SHOES
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
