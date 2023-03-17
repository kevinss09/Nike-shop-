import React from "react";
import Header from "../parts/Header";
import RightArrow from "../assets/images/right-arrow-50.png";
import MidBerry from "../assets/images/mid-berry-black-5.png";
import ProvidePicture from "../assets/images/provide-picture.png";
import ShoesData from "../data/shoes.json";
import ExploreData from "../data/explore.json";
import GooglePlayIcon from "../assets/icons/google-play.png";
import FacebookIcon from "../assets/icons/facebook.png";
import InstagramIcon from "../assets/icons/instagram.png";
import LinkedInIcon from "../assets/icons/linkedin.png";
import TwitterIcon from "../assets/icons/twitter.png";
import AppleIcon from "../assets/icons/apple-logo.png";
import NikeSmall from "../assets/images/nike-50.png";
import NikeLarge from "../assets/images/nike-large.png";
import { Link } from "react-router-dom";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import Slider from "../parts/Slider";

export default function Home() {
	useScrollAnchor();
	return (
		<section className="Home min-h-screen px-[70px]">
			<Header />
			<div className="Top-header-Content w-full mt-10 mb-16 flex flex-row ">
				<div className="left w-1/2 ml-10">
					<h1 className="text-black lg:text-[66px] font-bold tracking-wider text-lg leading-snug">
						Summer Collections <br /> 2022
					</h1>
					<h3 className="text-sm font-light mt-8 tracking-widest">
						{" "}
						The style of shoe available to consumers <br />
						are endless and profit also endless
					</h3>
					<Link
						className="mt-14 bg-[#D9D9D9] flex flex-row w-[250px] h-[50px] items-center justify-center"
						to="/Explore"
					>
						<h3 className="text-lg font-normal tracking-wider mr-14">
							Shop now
						</h3>
						<img
							src={RightArrow}
							alt="Arrow to right"
							className="h-[30px] w-[30px]"
						/>
					</Link>
				</div>
				<Slider />
			</div>
			<div className="comfort-overview py-[110px] bg-[#D9D9D9] flex flex-row mx-[-70px]">
				<div className="left w-1/2 pl-[70px]">
					<img src={ProvidePicture} alt="" className=" h-full w-full" />
				</div>
				<div className="right w-1/2 mr-[70px] pl-20 flex flex-col justify-between">
					<div>
						<h1 className="font-extrabold tracking-widest	 text-5xl leading-tight">
							We Provide <br />
							Modern Comfort
						</h1>
						<h4 className="text-lg font-light mt-8 tracking-widest w-4/5">
							Designed for the way you live your life. Atoms are beautiful in
							their simplicity, supporting your feel with absolute comfort{" "}
						</h4>
					</div>
					<a
						className="py-3 px-5 rounded-lg bg-white w-1/3 tracking-widest text-lg text-center"
						href="#Explore-more"
					>
						Explore More
					</a>
				</div>
			</div>
			<div className="best-seller mt-[70px] mb-[100px]">
				<h1 className="text-center font-bold text-4xl tracking-wider">
					Best Seller
				</h1>
				<div className="grid grid-cols-3 grid-rows-2 gap-16 mt-[100px]">
					{ShoesData.map((shoes, index) => {
						return (
							<div className="h-full w-full" key={index}>
								<img
									src={shoes.imgSource}
									alt=""
									className="bg-[#D9D9D9] rounded-lg h-[270px] w-[387px]"
								/>
								<div className="flex flex-col mt-[15px]">
									<h3 className="w-3/4 font-bold text-base tracking-wider leading-normal">
										{shoes.name}
									</h3>
									<h3 className="font-medium text-base text-[#70706F] mt-1">
										{shoes.gender}
									</h3>
									<h3 className="font-semibold text-base tracking-wider mt-1">
										{shoes.price}
									</h3>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div
				className="offer bg-[#D9D9D9] pt-[60px] pb-[100px] mx-[-70px] px-[70px]"
				id="Explore-more"
			>
				<div className="explore-overview flex flex-row justify-between">
					<h2 className="font-bold text-4xl tracking-widest">
						Explore Air Jordan 1<br />
						Comfort
					</h2>
					<div className="flex flex-row">
						<div className="border border-[#7d7d7d] mr-4"></div>
						<h3 className="font-normal text-lg tracking-wider">
							We Are Seeing The Votality in Global
							<br />
							Supply, And Are Unable To Guarantee
							<br />
							Festive Season Delivery
						</h3>
					</div>
				</div>
				<div className="mt-[70px] grid grid-cols-4 gap-8">
					{ExploreData.map((explore, index) => {
						return (
							<div
								className="h-[430px] bg-white flex items-center flex-col"
								key={index}
							>
								<div className="mt-14 bg-[#D9D9D9] w-[120px] h-[120px] rounded-full flex items-center justify-center">
									<img src={explore.icon} alt="" />
								</div>
								<div className="mt-[30px] text-center flex items-center justify-center flex-col">
									<h2 className="font-medium text-xl tracking-wider">
										{explore.title}
									</h2>
									<h4 className="mt-[15px] px-9 text-[#7D7D7D] font-normal text-base tracking-wide">
										{explore.text}
									</h4>
									<img
										src={NikeSmall}
										alt=""
										className="w-[40px] h-[40px] mt-[15px]"
									/>
								</div>
							</div>
						);
					})}
				</div>
				<div className="mt-[100px] bg-[#3E4342] rounded-2xl w-full px-[70px] py-[75px] flex flex-row">
					<div className="left w-1/2 text-white md:mr-48">
						<h1 className="font-bold text-4xl tracking-wider leading-normal">
							JOIN OUR NIKE CLUB <br /> & GET 10% OFF
						</h1>
						<h4 className="mt-10 font-normal text-lg tracking-wider">
							Sign up for free. Join the community. never pay for shipping.
						</h4>
						<div className="flex flex-row mt-10 items-center">
							<Link
								className="bg-[#6C757D] text-white py-3 px-10 rounded-xl text-lg font-normal tracking-wider mr-10"
								to="/contact"
							>
								Join us
							</Link>
							<img src={AppleIcon} alt="" className="h-[30px] w-[30px] mr-5" />
							<img src={GooglePlayIcon} alt="" className="h-[30px] w-[30px]" />
						</div>
					</div>
					<div className="right w-1/2 mt-[-55px]">
						<img src={NikeLarge} alt="" className="w-[400px] h-[400px]" />
					</div>
				</div>
			</div>
			<div className="w-full flex flex-row items-center justify-between my-[30px]">
				<div className="flex flex-row">
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
				<div className="flex flex-row">
					<h3 className="font-semibold text-xl mr-8 tracking-wider">
						Terms & Conditions
					</h3>
					<h3 className="font-semibold text-xl tracking-wider">
						Privacy Policy
					</h3>
				</div>
			</div>
		</section>
	);
}
