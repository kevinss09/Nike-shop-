import React, { useState } from "react";
import Header from "../parts/Header";
import TopShoes from "../assets/images/top-jordan.png";
import BackShoes from "../assets/images/back-jordan.png";
import SideShoes from "../assets/images/side-jordan.png";
import BackSideShoes from "../assets/images/back-side-jordan.png";
import mainPicture from "../assets/images/main-detail.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Carousel from "../parts/Carousel";
import Footer from "../parts/Footer";
import { Link } from "react-router-dom";

export default function Detail() {
	const [toggle, setToggle] = useState(-1);
	const [arrowReview, setArrowReview] = useState(false);
	const [arrowDescription, setArrowDescription] = useState(false);
	const [arrowHow, setArrowHow] = useState(false);
	const [arrowFree, setArrowFree] = useState(false);

	console.log(toggle);

	return (
		<section className="Detail min-h-screen md:px-[70px]">
			<Header />
			<div className="bg-[#FAFAFA] h-[60px] md:mx-[-70px]"></div>
			<div className=" md:mt-[70px] Detail-content md:gap-[70px]">
				<div className="col-span-1 grid grid-cols-2 grid-rows-2 md:ml-0 mx-9 gap-5 md:flex md:flex-col justify-between items-center md:order-1 order-2">
					<img
						src={TopShoes}
						alt=""
						className="md:w-[200px] w-[130px] md:h-[100px] h-[130px]"
					/>
					<img
						src={BackShoes}
						alt=""
						className="md:w-[200px] w-[130px] md:h-[100px] h-[130px]"
					/>
					<img
						src={SideShoes}
						alt=""
						className="md:w-[200px] w-[130px] md:h-[100px] h-[130px]"
					/>
					<img
						src={BackSideShoes}
						alt=""
						className="md:w-[200px] w-[130px] md:h-[100px] h-[130px]"
					/>
				</div>
				<div className="col-span-1 md:order-2 order-1">
					<img src={mainPicture} alt="" />
				</div>
				<div className="col-span-1 flex-col order-3 md:mt-0 mt-20 md:mx-0 mx-5">
					<div className="flex flex-col text-center md:text-left">
						<h1 className="font-medium md:text-xl text-3xl tracking-wider">
							Nike
						</h1>
						<h3 className="font-medium md:text-3xl text-xl mt-3 md:tracking-normal tracking-wider">
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
							<h3 className="font-light text-lg md:text-2xl tracking-widest">
								Add to bag
							</h3>
						</Link>
						<div className="bg-white text-2xl text-black text-center w-full h-[56px] border border-[#3E3D3D] flex items-center justify-center">
							<h3 className="font-light text-lg md:text-2xl tracking-widest">
								Add to favorite
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-20 Review-Content md:mx-0 mx-5">
				<div className="Reviews">
					<div className="border-[0.5px] border-[#575757] w-full"></div>
					<div className="mt-10 flex flex-row justify-between">
						<div className="flex flex-col relative">
							<h1 className="font-semibold text-2xl tracking-wider">
								Reviews(11)
							</h1>
							{arrowReview && (
								<div
									className={[
										"detail-scrollbar",
										arrowReview ? "opacity-100 pt-10" : "opacity-0 pt-0",
									].join(" ")}
								>
									{" "}
									<div className="flex flex-col md:flex-row">
										<div className="flex flex-col items-start md:w-[500px] w-full p-10 shadow-xl rounded-lg bg-[#f1f1f1] md:mr-10">
											<div
												className="rounded-full h-8 w-8
										bg-green-800 text-white font-semibold flex items-center justify-center"
											>
												A
											</div>
											<h3
												className="mt-2 text-black
										 font-medium text-lg"
											>
												Maher Christina
											</h3>
											<h4 className="mt-2 text-black text-sm">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passage
											</h4>
										</div>
										<div className="flex flex-col items-start md:w-[500px] w-full p-10 shadow-xl rounded-lg bg-[#f1f1f1] md:mt-0 mt-10">
											<div
												className="rounded-full h-8 w-8
										bg-green-800 text-white font-semibold flex items-center justify-center"
											>
												A
											</div>
											<h3
												className="mt-2 text-black
										 font-medium text-lg"
											>
												Maher Christina
											</h3>
											<h4 className="mt-2 text-black text-sm">
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s,
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essentially unchanged.
												It was popularised in the 1960s with the release of
												Letraset sheets containing Lorem Ipsum passage
											</h4>
										</div>
									</div>
								</div>
							)}
						</div>
						<span onClick={() => setArrowReview((prev) => !prev)}>
							{arrowReview ? (
								<IoIosArrowUp className="duration-300 h-[40px] w-[40px]" />
							) : (
								<IoIosArrowDown className="duration-300 h-[40px] w-[40px]" />
							)}
						</span>
					</div>
					<div className="Description mt-10">
						<div className="border-[0.5px] border-[#575757] w-full"></div>
						<div className="mt-10 flex flex-row justify-between">
							<div className="flex flex-col relative">
								<h1 className="font-semibold text-2xl tracking-wider">
									Description
								</h1>
								{arrowDescription && (
									<div
										className={[
											"detail-scrollbar",
											arrowDescription ? "opacity-100 pt-10" : "opacity-0 pt-0",
										].join(" ")}
									>
										<div className="flex flex-col">
											<h3 className="text-black text-lg font-normal tracking-wider">
												Step into the history books. Paying homage to Frank
												Rudy, the man who created the coveted cornerstone of
												cushioning—Air—the Nike Air Max TW SE celebrates his
												legacy with fun details. From the shoe's release year
												proudly stamped on the Air unit to its translucent
												plastic detailing, its striking visuals deliver a lesson
												in comfort.
											</h3>
											<ul className="mt-8 list-disc list-inside">
												<li className="text-black text-lg font-normal tracking-widest">
													Colour Shown: Summit White/Sesame/Light Photo
													Blue/Safety Orange
												</li>
												<li className="text-black text-lg font-normal tracking-widest">
													Style: DV1232-100
												</li>
											</ul>
										</div>
									</div>
								)}
							</div>
							<span onClick={() => setArrowDescription((prev) => !prev)}>
								{arrowDescription ? (
									<IoIosArrowUp className="duration-300 h-[40px] w-[40px]" />
								) : (
									<IoIosArrowDown className="duration-300 h-[40px] w-[40px]" />
								)}
							</span>
						</div>
					</div>
					<div className="How mt-10">
						<div className="border-[0.5px] border-[#575757] w-full"></div>
						<div className="mt-10 flex flex-row justify-between">
							<div className="flex flex-col relative">
								<h1 className="font-semibold text-2xl tracking-wider">
									How This Was Made
								</h1>
								{arrowHow && (
									<div
										className={[
											"detail-scrollbar",
											arrowHow ? "opacity-100 pt-10" : "opacity-0 pt-0",
										].join(" ")}
									>
										<ul className="list-disc list-inside">
											<li className="text-black text-lg font-normal tracking-widest">
												This product was responsibly designed utilising recycled
												materials from post-consumer and/or post-manufactured
												waste. One of our biggest steps on our journey to zero
												carbon and zero waste is in choosing our materials
												because they account for more than 70% of any product's
												footprint. By reusing existing plastics, yarns and
												textiles, we significantly reduce our emissions. Our
												goal is to use as many recycled materials as possible
												without compromising on performance, durability and
												style.
											</li>
											<li className="text-black text-lg font-normal tracking-widest mt-8">
												Learn more about our{" "}
												<span className="font-bold underline">
													Move to Zero
												</span>{" "}
												journey towards zero carbon and zero waste, including
												how we're working to design product with sustainability
												in mind and help protect the future of where we live and
												play.
											</li>
										</ul>
									</div>
								)}
							</div>
							<span onClick={() => setArrowHow((prev) => !prev)}>
								{arrowHow ? (
									<IoIosArrowUp className="duration-300 h-[40px] w-[40px]" />
								) : (
									<IoIosArrowDown className="duration-300 h-[40px] w-[40px]" />
								)}
							</span>
						</div>
					</div>
					<div className="Free delivery mt-10">
						<div className="border-[0.5px] border-[#575757] w-full"></div>
						<div className="mt-10 flex flex-row justify-between">
							<div>
								<div className="flex flex-col relative">
									<h1 className="font-semibold text-2xl tracking-wider">
										Free Delivery and Returns
									</h1>
									{arrowFree && (
										<div
											className={[
												"detail-scrollbar",
												arrowFree ? "opacity-100 pt-10" : "opacity-0 pt-0",
											].join(" ")}
										>
											<div className="flex flex-col">
												<h3 className="text-black text-lg font-normal tracking-wider">
													Free standard delivery on orders over $190.
												</h3>
												<ul className=" mt-8 list-disc list-inside">
													<li className="text-black text-lg font-normal tracking-widest">
														You can return your order for any reason, free of
														charge, within 30 days.
													</li>
												</ul>
											</div>
										</div>
									)}
								</div>
							</div>
							<span onClick={() => setArrowFree((prev) => !prev)}>
								{arrowFree ? (
									<IoIosArrowUp className="duration-300 h-[40px] w-[40px]" />
								) : (
									<IoIosArrowDown className="duration-300 h-[40px] w-[40px]" />
								)}
							</span>
						</div>
						<div className="border-[0.5px] border-[#575757] w-full mt-10"></div>
					</div>
				</div>
			</div>
			<div className="mt-[150px] md:mb-0 mb-20">
				<h1 className="font-semibold md:text-4xl text-3xl tracking-wide mb-20 text-center ">
					YOU MIGHT ALSO LIKE
				</h1>
				<Carousel />
			</div>
			<Footer />
		</section>
	);
}
