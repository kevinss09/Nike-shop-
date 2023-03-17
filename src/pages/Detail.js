import React, { useState } from "react";
import Header from "../parts/Header";
import TopShoes from "../assets/images/top-jordan.png";
import BackShoes from "../assets/images/back-jordan.png";
import SideShoes from "../assets/images/side-jordan.png";
import BackSideShoes from "../assets/images/back-side-jordan.png";
import mainPicture from "../assets/images/main-detail.png";
import { IoIosArrowDown } from "react-icons/io";
import Carousel from "../parts/Carousel";
import Footer from "../parts/Footer";
import { Link } from "react-router-dom";

export default function Detail() {
	const [toggle, setToggle] = useState(-1);
	console.log(toggle);

	return (
		<section className="Detail min-h-screen px-[70px]">
			<Header />
			<div className="bg-[#FAFAFA] h-[60px] mx-[-70px]"></div>
			<div className="mt-[70px] Detail-content gap-[70px]">
				<div className="col-span-1 flex flex-col justify-between">
					<img src={TopShoes} alt="" />
					<img src={BackShoes} alt="" />
					<img src={SideShoes} alt="" />
					<img src={BackSideShoes} alt="" />
				</div>
				<div className="col-span-1">
					<img src={mainPicture} alt="" />
				</div>
				<div className="col-span-1 flex-col">
					<div className="flex flex-col">
						<h1 className="font-medium text-xl tracking-wider">Nike</h1>
						<h3 className="font-medium text-3xl mt-3">
							NIKE AIR JORDAN 1 RETRO HIGH 85 BLACK AND WHITE
						</h3>
						<h3 className="font-medium text-xl tracking-wider mt-3">$295</h3>
					</div>
					<div className="mt-[60px] grid grid-cols-3 grid-rows-3 gap-[30px]">
						<div
							className={[
								"text-center font-normal tracking-wider text-xl px-7 py-3 ",
								toggle === 0
									? "text-white bg-[#3E3D3D]"
									: "border border-black",
							].join("")}
							onClick={() => setToggle(0)}
						>
							US 8
						</div>
						<div
							className={[
								"text-center font-normal tracking-wider text-xl px-7 py-3 ",
								toggle === 1
									? "text-white bg-[#3E3D3D]"
									: "border border-black",
							].join("")}
							onClick={() => setToggle(1)}
						>
							US 8.5
						</div>
						<div
							className={[
								"text-center font-normal tracking-wider text-xl px-7 py-3 ",
								toggle === 2
									? "text-white bg-[#3E3D3D]"
									: "border border-black",
							].join("")}
							onClick={() => setToggle(2)}
						>
							US 9
						</div>
						<div
							className={[
								"text-center font-normal tracking-wider text-xl px-7 py-3 ",
								toggle === 3
									? "text-white bg-[#3E3D3D]"
									: "border border-black",
							].join("")}
							onClick={() => setToggle(3)}
						>
							US 9.5
						</div>
						<div
							className={[
								"text-center font-normal tracking-wider text-xl px-7 py-3 ",
								toggle === 4
									? "text-white bg-[#3E3D3D]"
									: "border border-black",
							].join("")}
							onClick={() => setToggle(4)}
						>
							US 10
						</div>
						<div
							className={[
								"text-center font-normal tracking-wider text-xl px-7 py-3 ",
								toggle === 5
									? "text-white bg-[#3E3D3D]"
									: "border border-black",
							].join("")}
							onClick={() => setToggle(5)}
						>
							US 10.5
						</div>
						<div
							className={[
								"text-center font-normal tracking-wider text-xl px-7 py-3 ",
								toggle === 6
									? "text-white bg-[#3E3D3D]"
									: "border border-black",
							].join("")}
							onClick={() => setToggle(6)}
						>
							US 11
						</div>
						<div
							className={[
								"text-center font-normal tracking-wider text-xl px-7 py-3 ",
								toggle === 7
									? "text-white bg-[#3E3D3D]"
									: "border border-black",
							].join("")}
							onClick={() => setToggle(7)}
						>
							US 11.5
						</div>
						<div
							className={[
								"text-center font-normal tracking-wider text-xl px-7 py-3 ",
								toggle === 8
									? "text-white bg-[#3E3D3D]"
									: "border border-black",
							].join("")}
							onClick={() => setToggle()}
						>
							US 12
						</div>
					</div>
					<div className="mt-[60px] flex flex-row w-full justify-between items-center gap-8">
						<Link
							className="bg-[#3E3D3D] text-white text-center w-full py-3 text-2xl"
							to="/bag"
						>
							<h3 className="font-light text-2xl tracking-widest">
								Add to bag
							</h3>
						</Link>
						<div className="bg-white text-2xl text-black text-center w-full h-[56px] border border-[#3E3D3D] flex items-center justify-center">
							<h3 className="font-light text-2xl tracking-widest">
								Add to favorite
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-20 Review-Content">
				<div className="Reviews">
					<div className="border-[0.5px] border-[#575757] w-full"></div>
					<div className="mt-10 flex flex-row justify-between">
						<h1 className="font-semibold text-2xl tracking-wider">
							Reviews(11)
						</h1>
						<IoIosArrowDown className="h-[40px] w-[40px]" />
					</div>
				</div>
				<div className="Description mt-10">
					<div className="border-[0.5px] border-[#575757] w-full"></div>
					<div className="mt-10 flex flex-row justify-between">
						<h1 className="font-semibold text-2xl tracking-wider">
							Description
						</h1>
						<IoIosArrowDown className="h-[40px] w-[40px]" />
					</div>
				</div>
				<div className="Details mt-10">
					<div className="border-[0.5px] border-[#575757] w-full"></div>
					<div className="mt-10 flex flex-row justify-between">
						<h1 className="font-semibold text-2xl tracking-wider">Details</h1>
						<IoIosArrowDown className="h-[40px] w-[40px]" />
					</div>
				</div>
				<div className="Highlights mt-10">
					<div className="border-[0.5px] border-[#575757] w-full"></div>
					<div className="mt-10 flex flex-row justify-between">
						<h1 className="font-semibold text-2xl tracking-wider">
							Highlights
						</h1>
						<IoIosArrowDown className="h-[40px] w-[40px]" />
					</div>
					<div className="border-[0.5px] border-[#575757] w-full mt-10"></div>
				</div>
			</div>
			<div className="mt-[150px]">
				<h1 className="font-semibold text-4xl tracking-wide mb-20">
					You might also like
				</h1>
				<Carousel />
			</div>
			<Footer />
		</section>
	);
}
