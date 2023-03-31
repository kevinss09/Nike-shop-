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
		<section className="Home min-h-screen md:px-[70px]">
			<Header />
			<div className="Top-header-Content w-full mt-10 md:mb-16 mb-36 flex md:flex-row flex-col">
				<div className="left md:w-1/2 md:ml-10 mx-5 text-center flex flex-col justify-center md:items-start items-center">
					<h1 className="text-black lg:text-[66px] font-bold md:text-left text-center tracking-wider text-3xl leading-snug">
						Summer Collections <br /> 2022
					</h1>
					<h3 className="text-sm font-light mt-8 tracking-widest md:text-left text-center">
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
			<div className="comfort-overview md:py-[110px] py-24 bg-[#D9D9D9] flex md:flex-row flex-col md:mx-[-70px]">
				<div className="left md:w-1/2 md:pl-[70px] mx-5 flex items-center justify-center">
					<img
						src={ProvidePicture}
						alt=""
						className="md:h-full md:w-full h-[250px]"
					/>
				</div>
				<div className="right md:w-1/2 md:mr-[70px] md:pl-20 flex flex-col justify-between mx-5 md:mx-0">
					<div
						className="md:text-left text-center
					 md:mt-0 mt-10"
					>
						<h1 className="font-extrabold tracking-widest	md:text-5xl text-3xl leading-tight">
							We Provide <br />
							Modern Comfort
						</h1>
						<h4 className="text-lg font-light mt-8 tracking-widest md:w-4/5 mx-3 md:mx-0">
							Designed for the way you live your life. Atoms are beautiful in
							their simplicity, supporting your feel with absolute comfort{" "}
						</h4>
					</div>
					<a
						className="py-3 px-5 rounded-lg bg-white md:w-1/3 w-full tracking-widest text-lg text-center mt-10 md:mt-0"
						href="#Explore-more"
					>
						Explore More
					</a>
				</div>
			</div>
			<div className="best-seller mt-[70px] mb-[100px] md:mx-0 mx-5">
				<h1 className="text-center font-bold text-4xl tracking-wider">
					Best Seller
				</h1>
				<div className="grid md:grid-cols-3 grid-rows-2 gap-16 mt-[100px]">
					{ShoesData.map((shoes, index) => {
						return (
							<div className="h-full w-full" key={index}>
								<img
									src={shoes.imgSource}
									alt=""
									className="bg-[#D9D9D9] rounded-lg md:h-[270px] w-[387px] h-[250px]"
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
				className="offer bg-[#D9D9D9] pt-[60px] pb-[100px] md:mx-[-70px] md:px-[70px] "
				id="Explore-more"
			>
				<div className="explore-overview flex md:flex-row flex-col justify-between mx-5 md:mx-0">
					<h2 className="font-bold text-4xl md:text-left text-center md:tracking-widest tracking-wide leading-relaxed">
						Explore Air Jordan 1<br />
						Comfort
					</h2>
					<div className="flex md:flex-row flex-col">
						<div className="md:border md:border-[#7d7d7d] mr-4"></div>
						<h3 className="font-normal text-lg tracking-wider md:mt-0 mt-6 md:text-left text-center">
							We Are Seeing The Votality in Global
							<br />
							Supply, And Are Unable To Guarantee
							<br />
							Festive Season Delivery
						</h3>
					</div>
				</div>
				<div className="mt-[70px] grid md:grid-cols-4 md:gap-8 gap-16 md:mx-0 mx-5">
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
									<h2 className="md:font-medium font-normal md:text-xl text-2xl tracking-wider">
										{explore.title}
									</h2>
									<h4 className="md:mt-[15px] mt-7 px-9 text-[#7D7D7D] font-normal text-base tracking-wide">
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
				<div className="mt-[100px] bg-[#3E4342] rounded-2xl md:w-full md:px-[70px] md:py-[75px] px-7 py-10 flex md:flex-row flex-col-reverse items-center md:mx-0 mx-5">
					<div className="left md:w-1/2 w-full text-white md:mr-48 md:text-left text-center">
						<h1 className="font-bold text-4xl tracking-wider leading-normal">
							JOIN OUR NIKE CLUB <br /> & GET 10% OFF
						</h1>
						<h4 className="mt-10 md:font-normal font-light text-lg md:tracking-wider tracking-widest ">
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
					<div className="right md:w-1/2 mt-[-55px]">
						<img
							src={NikeLarge}
							alt=""
							className="md:w-[400px] w-full h-[400px]"
						/>
					</div>
				</div>
			</div>
			<div className="w-full flex md:flex-row flex-col items-center justify-between my-[30px]">
				<div className="flex flex-row items-center justify-center md:justify-start w-full">
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
		</section>
	);
}
