import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../assets/icons/facebook.png";
import InstagramIcon from "../assets/icons/instagram.png";
import LinkedInIcon from "../assets/icons/linkedin.png";
import TwitterIcon from "../assets/icons/twitter.png";

export default function Footer({ Path }) {
	console.log(Path);
	return (
		<div className="footer md:mt-[150px] ">
			<div className="men's collection grid md:grid-cols-4 gap-6">
				<div className="col-span-1 text-center">
					<h1 className="font-medium tracking-wide text-2xl">
						{Path == "/women" ? "Women's Clothing" : "Men's Clothing"}
					</h1>
					<ul className="mt-10">
						<li className="text-lg">T-shirts</li>
						<li className="md:mt-[30px] mt-5  text-lg">Hoodies</li>
						<li className="md:mt-[30px] mt-5  text-lg">Shorts</li>
						<li className="md:mt-[30px] mt-5  text-lg">Pants</li>
						<li className="md:mt-[30px] mt-5  text-lg">Jackets</li>
					</ul>
				</div>
				<div className="col-span-1 text-center md:mt-0 mt-10">
					<h1 className="font-medium text-2xl">
						{Path == "/women" ? "Women's Shoes" : "Men's Shoes"}
					</h1>
					<ul className="mt-10">
						<li className="text-lg">Running Shoes</li>
						<li className="md:mt-[30px] mt-5 text-lg">White Sneakers</li>
						<li className="md:mt-[30px] mt-5 text-lg">Slides & Sandals</li>
						<li className="md:mt-[30px] mt-5 text-lg">Classic Sneakers</li>
						<li className="md:mt-[30px] mt-5 text-lg">High Top Sneakers</li>
					</ul>
				</div>
				<div className="col-span-1 text-center md:mt-0 mt-10">
					<h1 className="font-medium tracking-wide text-2xl">
						{Path == "/women" ? "Women's Accessories" : "Men's Accessories"}
					</h1>
					<ul className="mt-10">
						<li className="text-lg">Duffle Bags</li>
						<li className="md:mt-[30px] mt-5 text-lg">Backpacks</li>
						<li className="md:mt-[30px] mt-5 text-lg">Hats</li>
						<li className="md:mt-[30px] mt-5 text-lg">Face Covers</li>
						<li className="md:mt-[30px] mt-5 text-lg">Socks</li>
					</ul>
				</div>
				<div className="col-span-1 text-center md:mt-0 mt-10">
					<h1 className="font-medium tracking-wide text-2xl">
						{Path == "/women" ? "Women's Collections" : "Men's Collections"}
					</h1>
					<ul className="mt-10">
						<li className="text-lg">Running</li>
						<li className="md:mt-[30px] mt-5 text-lg">Soccer</li>
						<li className="md:mt-[30px] mt-5 text-lg">Training & Gym</li>
						<li className="md:mt-[30px] mt-5 text-lg">Originals</li>
						<li className="md:mt-[30px] mt-5 text-lg">Loungewear</li>
					</ul>
				</div>
			</div>
			<div className="nike-club-promotion mt-[100px] px-[70px] py-10 bg-[#3E4342] md:mx-[-70px] flex md:flex-row flex-col items-center justify-center">
				<h1 className="font-bold text-4xl text-white tracking-wider md:mr-20 md:text-left text-center md:leading-normal leading-relaxed">
					JOIN OUR NIKE CLUB & GET 10% OFF
				</h1>
				<Link
					className="px-16 py-2 bg-white font-light text-xl tracking-wider relative md:mt-0 mt-12"
					to="/contact"
					onClick="window.location.href='#top'"
				>
					<div className="absolute w-full h-full left-2 right-2 border border-white "></div>
					Join us
				</Link>
			</div>
			<div className="w-full flex md:flex-row flex-col items-center justify-between my-[30px]">
				<div className="flex flex-row items-center md:justify-start justify-center w-full">
					<div className="h-[50px] w-[50px] bg-[#D9D9D9] rounded-full flex items-center justify-center mr-4">
						<img src={LinkedInIcon} alt="" className="w-[30px] h-[30px]" />
					</div>
					<div className="h-[50px] w-[50px] bg-[#D9D9D9] rounded-full flex items-center justify-center mr-4">
						<img src={InstagramIcon} alt="" className="w-[30px] h-[30px]" />
					</div>
					<div className="h-[50px] w-[50px] bg-[#D9D9D9] rounded-full flex items-center justify-center mr-4">
						<img src={TwitterIcon} alt="" className="w-[30px] h-[30px]" />
					</div>
					<div className="h-[50px] w-[50px] bg-[#D9D9D9] rounded-full flex items-center justify-center mr-4">
						<img src={FacebookIcon} alt="" className="w-[30px] h-[30px]" />
					</div>
				</div>
				<div className="flex md:flex-row flex-col md:text-left text-center md:mt-0 mt-7">
					<h3 className="md:font-semibold font-medium md:text-xl text-2xl md:mr-8 tracking-wider">
						Terms & Conditions
					</h3>
					<h3 className="md:font-semibold font-medium md:text-xl text-2xl tracking-wider mt-2 md:mt-0">
						Privacy Policy
					</h3>
				</div>
			</div>
		</div>
	);
}
