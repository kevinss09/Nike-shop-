import React from "react";
import Header from "../parts/Header";
import MenPicture from "../assets/images/men-picture.jpg";
import Footer from "../parts/Footer";
import { Link, useLocation } from "react-router-dom";
import Carousel from "../parts/Carousel";

// mx-[-70px]
// Trending this week
// image
// mens's collectin
// nike-club-promotion

export default function Men() {
	const location = useLocation().pathname;
	return (
		<section className="Men min-h-screen md:px-[70px]">
			<Header />
			<div className="bg-[#FAFAFA] h-[60px] md:mx-[-70px]"></div>
			<div className="men-breadcrumb bg-white flex md:flex-row flex-col justify-between items-center my-5 md:w-2/3 md:mx-0 mx-5 overflow-hidden">
				<h1 className="font-bold text-2xl">Men</h1>
				<ul className="scroll flex flex-row md:w-auto md:mt-0 mt-4 items-center justify-between overflow-scroll whitespace-nowrap w-[300px]">
					<li className="md:font-normal font-medium text-base tracking-wide md:mr-10 md:mx-0 mx-3">
						Sale
					</li>
					<li className="md:font-normal font-medium text-base tracking-wide md:mr-10 md:mx-0 mx-3">
						Shoes
					</li>
					<li className="md:font-normal font-medium text-base tracking-wide md:mr-10 md:mx-0 mx-3">
						Clothing
					</li>
					<li className="md:font-normal font-medium text-base tracking-wide md:mr-10 md:mx-0 mx-3">
						Just Released
					</li>
					<li className="md:font-normal font-medium text-base tracking-wide md:mr-10 md:mx-0 mx-3">
						Best Seller
					</li>
				</ul>
			</div>
			<div className="men-main-picture md:mx-[-70px] bg-cover bg-no-repeat flex items-center justify-end">
				<div className="md:mr-12 flex flex-col md:items-end items-center justify-center md:mx-0 mx-5">
					<h1 className="text-6xl text-white font-extrabold md:text-right text-center">
						FIND YOUR <br /> ULTIMATE EDGE
					</h1>
					<h3 className="mt-12 font-light tracking-widest text-white text-2xl md:text-right text-center">
						Tap into tournament mode with <br /> technical apparel that brings
						out <br /> your best game
					</h3>
					<Link
						className="mt-12 font-light tracking-wider text-lg py-3 md:px-7 px-12 bg-white rounded-xl"
						to="/Explore"
					>
						Shop now
					</Link>
				</div>
			</div>
			<div className="trending-this-week mt-20">
				<h1 className="font-semibold md:text-4xl text-3xl mb-20 text-center md:tracking-normal tracking-wider">
					TRENDING THIS WEEK
				</h1>
				<Carousel Path={location} />
			</div>
			<div className="coaching-wellness mb-20">
				<h2 className="font-semibold md:text-4xl text-3xl text-center md:tracking-normal tracking-wider md:mt-20 mt-10">
					COACHING AND WELLNESS
				</h2>
				<div className="w-full mt-[50px] grid md:grid-cols-2 gap-[30px]">
					<div className="col-span-1 soccer-club bg-contain bg-no-repeat relative mr-5 ml-6 md:mr-0 md:ml-0">
						<button className="absolute left-[30px] bottom-[30px] md:py-3 md:px-7 py-3 px-4 md:font-semibold font-medium md:text-base text-sm bg-white rounded-full hover:bg-[#1B1818] hover:text-white transition duration-300">
							Nike Soccer Club
						</button>
					</div>
					<div className="col-span-1 basketball-club bg-contain bg-no-repeat relative mr-5 ml-6 md:mr-0 md:ml-0">
						<button className="absolute left-[30px] bottom-[30px] md:py-3 md:px-7 py-3 px-4 md:font-semibold font-medium md:text-base text-sm bg-white rounded-full hover:bg-[#1B1818] hover:text-white transition duration-300">
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
